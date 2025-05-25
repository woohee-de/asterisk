import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function CustomCursor() {
    const location = useLocation();

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hoveringLink, setHoveringLink] = useState(false);

    // location 바뀔 때 hoveringLink 상태 초기화
    useEffect(() => {
        setHoveringLink(false);
    }, [location]);

    useEffect(() => {
        const move = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        document.addEventListener('mousemove', move);

        const handleEnter = () => setHoveringLink(true);
        const handleLeave = () => setHoveringLink(false);

        const links = document.querySelectorAll('a, a[href^="mailto:"], [data-link], [data-dialog="true"]');
        links.forEach((link) => {
            link.addEventListener('mouseenter', handleEnter);
            link.addEventListener('mouseleave', handleLeave);
        });

        return () => {
            document.removeEventListener('mousemove', move);
            links.forEach((link) => {
                link.removeEventListener('mouseenter', handleEnter);
                link.removeEventListener('mouseleave', handleLeave);
            });
        };
    }, [location]);

    return (
        <div
            className={`cursor ${hoveringLink ? 'on' : ''}`}
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
        />
    );
}

export default CustomCursor;