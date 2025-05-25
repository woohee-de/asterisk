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
        if (dialogRef.current) {
          dialogRef.current.showModal();
          document.body.classList.add('no-scroll');  // 다이얼로그 열릴 때 바로 클래스 추가
          // 다이얼로그 내부 스크롤 상단 이동
          requestAnimationFrame(() => {
            dialogRef.current?.scrollTo(0, 0);
          });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => {
      document.body.classList.remove('no-scroll');  // 다이얼로그 닫힐 때 클래스 제거
    };
    dialog.addEventListener('close', handleClose);

    return () => {
      dialog.removeEventListener('close', handleClose);
      document.body.classList.remove('no-scroll');  // cleanup
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className="dialog-viewer" onClick={(e) => {
        if (e.target === dialogRef.current) dialogRef.current.close();
      }}
    >
      <div className="dialog-viewer__container">
        <div className="dialog-viewer__inner">
          <button className="dialog-viewer__close" aria-label="닫기" onClick={() => dialogRef.current.close()}>
            <i className="icon icon--close"></i>
          </button>
          <img className="dialog-viewer__img" src={imgSrc || null} alt={imgAlt} />
        </div>
      </div>
    </dialog>
  );
};

export default DialogViewer;
