import React, { useState } from 'react'
import {FaArrowUp} from 'react-icons/fa'
import { IconContext } from 'react-icons';

export default function ScrollToTopBtn() {
    const [visible, setVisible] = useState(false);
    
    const toggle = () => {
        const scroll = document.documentElement.scrollTop;
        if (scroll > 400) {
            setVisible(true)
        } else if (scroll <= 400) {
            setVisible(false)
        }
    };

    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggle);
    
    return (
        <button className="btn" onClick={scrollToTop} style={{ display: visible? 'inline' : 'none'}}>
            <IconContext.Provider value={{ size: "1.5em" }}>
                <FaArrowUp />
            </IconContext.Provider >
        </button>
        
    )
}
