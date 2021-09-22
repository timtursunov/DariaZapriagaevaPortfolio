import React from 'react'

export default function Footer({setFilterType, modal, filterType}) {
    return (
        <>  
        <footer className="footer">
            <div>
                <p className='footer__scroller'>Scroll to explore</p>
            </div>
            <div className='footer__links'>
                    <p onClick={() => setFilterType('all')} className={filterType === 'all' ? ' active_filter footer__link--selected'  : `footer__link`}>All</p>
                    <p onClick={() => setFilterType('photo')} className={filterType === 'photo' ? `footer__middle  footer__link--selected active_filter `  : 'footer__middle footer__link  '}>Photo</p>
                    <p onClick={() => setFilterType('video')} className={filterType === 'video' ? `active_filter footer__link--selected` : 'footer__link'}>Video</p>      
            </div>
        </footer>
        </>
    )
}
