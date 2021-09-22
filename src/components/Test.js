import React from 'react'

export default function Test(openModal) {
    return (
        <div className='test'>
            <header className='test__header'>
                <h1 className='test__heading'>Daria Zapriagaeva</h1>
                <button className='test__paragraph'>Work</button>
            </header>
            <div className='bio-box'>
                <p className='bio-box_paragraph'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ante convallis, euismod ligula sit amet, fringilla lacus. Vestibulum nec neque eu nisl mattis pretium. Vestibulum fringilla erat non ultricies bibendum. Sed eleifend, ligula ac venenatis ultricies, turpis felis commodo lacus, in vulputate magna ante ultrices nibh. Integer porta elementum neque, in congue felis eleifend at. Morbi ut diam imperdiet, tempus ipsum non, varius libero.
                </p>
            </div>
            <div className='bio__links'>
                <p className='bio__link'>email.contact@email.com</p>
                <p className='bio__link' >@instagram</p>
            </div>            
        </div>
    )
}
