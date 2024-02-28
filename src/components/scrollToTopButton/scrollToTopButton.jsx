import React from 'react';
import "./scrolToTopButton.css";
import { Fab } from '@mui/material';
import { CaretUp } from "@phosphor-icons/react";


const ScrollToTopButton = () => {
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className={`scroll_top ${visible ? 'visible' : ''}`}>
            {visible && (
                <Fab color="black" size="small" aria-label="scroll back to top" onClick={scrollToTop}>
                    <CaretUp weight="bold" color='white' size={16} />
                </Fab>
            )}
        </div>
    );
};

export default ScrollToTopButton;
