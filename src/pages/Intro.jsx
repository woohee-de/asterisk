import { useEffect, useRef } from 'react';

function Intro() {
    const introRef = useRef(null);
    const imgRef = useRef(null);
    const bgRef = useRef(null);

    useEffect(() => {
        if (!introRef.current || !imgRef.current || !bgRef.current) return;
        document.body.classList.add('no-scroll');

        imgRef.current.classList.add('on');

        const t1 = setTimeout(() => {
            imgRef.current.classList.add('rotate');
            const t2 = setTimeout(() => {
                bgRef.current.classList.add('out');
                imgRef.current.classList.add('out');
                const t3 = setTimeout(() => {
                    introRef.current.classList.add('out');
                    document.body.classList.remove('no-scroll');
                }, 1500);
                return () => clearTimeout(t3);
            }, 1700);
            return () => clearTimeout(t2);
        }, 2000);

        return () => clearTimeout(t1);
    }, []);


    return (
        <div className="intro" ref={introRef}>
            <div className="intro__bg" ref={bgRef}>
                <div className="intro__img" ref={imgRef}></div>
            </div>
        </div>
    );
}

export default Intro;
