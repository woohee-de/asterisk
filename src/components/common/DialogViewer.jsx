import { useEffect, useRef, useState } from 'react';

function DialogViewer() {
  const dialogRef = useRef(null);
  const [imgSrc, setImgSrc] = useState('');
  const [imgAlt, setImgAlt] = useState('');

  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target;
      if (target.dataset.dialog !== undefined) {
        setImgSrc(target.src);
        setImgAlt(target.alt || '확대 이미지');
        dialogRef.current?.showModal();
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className="dialog-viewer" aria-hidden="true"
      onClick={(e) => {
        if (e.target === dialogRef.current) dialogRef.current.close();
      }}
    >
      <div className="dialog-viewer__inner">
        <button className="dialog-viewer__close" aria-label="닫기" onClick={() => dialogRef.current.close()}>
          <i className="icon icon--close"></i>
        </button>
        <img className="dialog-viewer__img" src={imgSrc} alt={imgAlt} />
      </div>
    </dialog>
  );
};

export default DialogViewer;
