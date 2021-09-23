import React from 'react'
import ArtWorksList from '../../components/ArtWorksList';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import Bio from '../../components/Bio';


const MainPage = ({artworks, setFilterType,filterType, openModal, setModal, modal, CursorHoverOnLink, hoverOnLink}) => {
    return (
        <>
            <Nav modal={modal} setModal={setModal} openModal={openModal} CursorHoverOnLink={CursorHoverOnLink} hoverOnLink={hoverOnLink}/>
             <div
            className={ modal === true ? 'main-container--shaded' : 'main-container'}>
             <ArtWorksList modal={modal} setModal={setModal} openModal={openModal} artworks={artworks}/> 
             </div> 
             <Bio modal={modal}/>
            <Footer modal={modal} setFilterType={setFilterType} filterType={filterType}/>  
        </>
    )
}
export default MainPage


