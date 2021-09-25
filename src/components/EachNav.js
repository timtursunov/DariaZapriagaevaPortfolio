import React from 'react';
import { Link } from 'react-router-dom';

export default function EachNav({modal, openModal, hoverLink}) {
    
    return (
        <>
         <header  className="header">
            <Link
            onMouseOver={() => hoverLink()}
            onMouseOut={() => hoverLink()}
            to="/" className={`${modal === true ? 'header__h1--shaded' : "header__h1"}` }>Daria Zaprigaeva</Link>
            {modal === true ? 
            <p
            onMouseOver={() => hoverLink()}
            onMouseOut={() => hoverLink()}
            onClick={openModal} className='nav__link--shaded'>Artwork</p>
            : <p
            onMouseOver={() => hoverLink()}
            onMouseOut={() => hoverLink()}
            onClick={openModal} className='nav__link'>About</p>
        }
         </header>  
        </>
    )
}

