import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav({modal, openModal}) {
    return (
        <>
         <header  className="header">
            <Link to="/" className={modal === true ? 'header__h1--shaded' : "header__h1"}>Daria Zaprigaeva</Link>
            {modal === true ? 
            <p onClick={openModal} className='nav__link--shaded'>Artwork</p>
            : <p onClick={openModal} className='nav__link'>About</p>
        }
         </header>  
        </>
    )
}

