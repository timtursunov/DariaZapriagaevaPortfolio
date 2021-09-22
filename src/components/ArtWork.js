import React from 'react'
import { Image } from '../styles/mainPage'
import {Link} from 'react-router-dom'

export default function ArtWork(artwork, index) {
    let contentType = artwork.artwork.fields.type
    let imageUrl = artwork.artwork.fields.media.fields.file.url
    let slug = artwork.artwork.fields.slug

    
    const findFileType = () => {
            return contentType === 'image' ? 
            <Link to={`/artwork/${slug}`}>
            <img className='artwork__img' alt="Daria's Artworks" src={imageUrl} />
            </Link> 
            :
            <Link to={`/artwork/${slug}`}>
            <img className='artwork__img' alt="Daria's Artworks" src={imageUrl} />
            </Link> 
    } 
    return (
                <Image key={index}   className='artwork'>
                    {findFileType()}
                </Image>
    )

}