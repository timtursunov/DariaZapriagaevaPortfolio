import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav({modal, openModal, CursorHoverOnLink}) {
    return (
        <>
         <header  className="header">
            <Link
            onMouseOver={() => CursorHoverOnLink()}
            onMouseOut={() => CursorHoverOnLink()}
            to="/" className={`${modal === true ? 'header__h1--shaded' : "header__h1"}` }>Daria Zaprigaeva</Link>
            {modal === true ? 
            <p
            onMouseOver={() => CursorHoverOnLink()}
            onMouseOut={() => CursorHoverOnLink()}
            onClick={openModal} className='nav__link--shaded'>Artwork</p>
            : <p
            onMouseOver={() => CursorHoverOnLink()}
            onMouseOut={() => CursorHoverOnLink()}
            onClick={openModal} className='nav__link'>About</p>
        }
         </header>  
        </>
    )
}

