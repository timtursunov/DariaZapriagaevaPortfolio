import React from 'react'
export default function Bio({modal, CursorHoverOnLink}) {
    return (
        <div
        onMouseOver={() => CursorHoverOnLink()}
        onMouseOut={() => CursorHoverOnLink()}    
        className={modal === true ? 'bio--shaded' : 'bio'}>
            <div className='bio-bio'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ante convallis, euismod ligula sit amet, fringilla lacus. Vestibulum nec neque eu nisl mattis pretium. Vestibulum fringilla erat non ultricies bibendum. Sed eleifend, ligula ac venenatis ultricies, turpis felis commodo lacus, in vulputate magna ante ultrices nibh. Integer porta elementum neque, in congue felis eleifend at. Morbi ut diam imperdiet, tempus ipsum non, varius libero.</p>
            </div>
            <div className='bio-links'>
                <p>email.contact@email.com</p>
                <p>instagram</p>
            </div>
        </div>
    )
}
