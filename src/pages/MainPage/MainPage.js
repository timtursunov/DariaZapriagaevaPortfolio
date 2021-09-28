import React from 'react'
import ArtWorksList from '../../components/ArtWorksList';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import Bio from '../../components/Bio';
import { ExternalLink } from 'react-external-link';


const MainPage = ({artworks, setFilterType,filterType, openModal, setModal, modal, CursorHoverOnLink, hoverOnLink}) => {
    return (
        <>
            <Nav modal={modal} setModal={setModal} openModal={openModal} CursorHoverOnLink={CursorHoverOnLink} hoverOnLink={hoverOnLink}/>
             <div
            className={ modal === true ? 'main-container--shaded' : 'main-container'}>
             <ArtWorksList modal={modal} setModal={setModal} openModal={openModal} artworks={artworks}/> 
             </div> 
             <Bio modal={modal}/>
             {/* <div className={modal === true ? 'bio-references--shaded' : 'bio-references'}>
                            <p>© 2021, Daria Zapriagaeva</p>
                            <p> / </p>
                            <p class='bio-reference__Daria--mobile'>© {new Date().getFullYear()}, Daria Zapriagaeva / <br></br></p> 
                            <p>Development by Timur Tursunov</p>
                            <p className='fakeclass'> f </p>
                            <p> / </p>
                            <p className='fakeclass'> f </p>
                            <ExternalLink class='bio-reference__link' href="https://denizkilicci.com/">
                            <span>Design by Deniz Kilicci</span>
                            </ExternalLink>
            </div> */}
            <Footer modal={modal} setFilterType={setFilterType} filterType={filterType}/>  
        </>
    )
}
export default MainPage


