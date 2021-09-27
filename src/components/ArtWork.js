import React, { useState } from 'react'
import { Image } from '../styles/mainPage'
import {Link} from 'react-router-dom'

export default function ArtWork(artwork, index ) {
    let contentType = artwork.artwork.fields.type
    let imageUrl = artwork.artwork.fields.media.fields.file.url
    let slug = artwork.artwork.fields.slug
    let collectionQuan = artwork.artwork.fields.howManyInCollection
    let collectionIndex = artwork.artwork.fields.orderOnCollection

    let isThumbnail = artwork.artwork.fields.firstInCollection

    const [hoverText, setHoverText] = useState(false)

    let hoverOnImg = () => {
        setHoverText(each => !each)
    }




    const findFileType = () => {
        if (isThumbnail === 'true'){
            return contentType === 'image' ? 
            <Link className='link' to={`/artwork/${slug}`}>
                <div className='artwork-div'>
                    <img
                    onMouseOver={() => hoverOnImg()}
                    onMouseOut={() => hoverOnImg()}
                    className='artwork__img' alt="Daria's Artworks" src={imageUrl} /> 
                    <p className={hoverText === true ? 'artwork__hover-text--active' :'artwork__hover-text'}>{collectionIndex} / {collectionQuan}</p>
                </div>
            </Link> 
            :
            <Link className='link' to={`/artwork/${slug}`}>
             <div className='artwork-div'>    
                    <img
                    onMouseOver={() => hoverOnImg()}
                    onMouseOut={() => hoverOnImg()} 
                    className='artwork__img' alt="Daria's Artworks" src={imageUrl} />
                    <p className={hoverText === true ? 'artwork__hover-text--active' :'artwork__hover-text'}>{collectionIndex} / {collectionQuan}</p>
                </div>    
            </Link> 
        }
    } 
    return (    
        <>
            <Image key={index}   className='artwork'>
                {findFileType()}
            </Image>
        </>
    )

}