import React  from 'react'
import ArtWork from './ArtWork'

export default function ArtWorksList({artworks ,modal}) {

    return (
        <>
            <div className={modal === true ? 'artworks__list--shaded' : 'artworks__list'}  >
                {artworks.map((artwork, index) => 
                <ArtWork artworks={artworks} artwork={artwork} index={index} modal={modal}/>
                )}
            </div> 
        </>
    )
}