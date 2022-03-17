import React from 'react'

export default function Testing({array}) {
    return (
        <>
        {array.map((bio, index) => 
                <>
                <div className='bio-bio'>
                        <p>{bio.fields.bio.content[0].content[0].value}</p>
                        <p>Follow Daria on social media for updates or contact directly for inquiries.</p>
                </div>
                <div className='bio-links'>
                        <p className='bio-link'>{bio.fields.email}</p>
                        <p className='bio-link'>{bio.fields.instagram}</p>
                </div> 
                </>
                )}
        </>
    )
}
