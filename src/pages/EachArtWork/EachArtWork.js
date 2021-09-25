
import React, {useState, useEffect, useRef} from 'react';
import { useParams, Link,} from 'react-router-dom';
import { getSinglePost } from '../../hooks/client';
import { withRouter } from 'react-router'
import CustomCursor from '../../hooks/customCursor';
import Bio from '../../components/Bio';
import Nav from '../../components/Nav';
import EachNav from '../../components/EachNav';


function EachArtWork(props) {
    let {artworks} = props;
    let {modal} = props
    let {hoverOnLink} = props
    let {setModal} = props
    let {openModal} = props

    const { slug } = useParams()

    const [post, setPost] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [hover, setHover] = useState(false)
    const [timer, setTimer] = useState(1)
    const [didLinkHover, setDidLinkHover] = useState(false)

    const iid = useRef(null)



        const clear = () => {
        window.clearInterval(iid.current)
        setLoading(false)
        setTimer(1)
    }

        useEffect(() => {
        if(timer === 0 ){
            clear()
        } 
    }, [timer])

    useEffect(() => {
        setLoading(true)
        iid.current = window.setInterval(() => {
            setTimer((timer) => {
                return timer - 1
            })
        }, 500)
        const promise = getSinglePost(slug)
        promise.then(result => {
        setPost(result[0].fields)
        })
    }, [slug])

    const imageHovering = () => {
        setHover(prev => !prev)
    }

    const hoverLink = () => {
        setDidLinkHover(prev => !prev)
    }


    
    let id = artworks.findIndex(el => el?.fields?.slug === slug)
    let previousSlug = artworks[id - 1]
    let nextSlug = artworks[id + 1]

    const renderPost = () => {
      if (isLoading) return <Nav/>
      return (
        <div className={modal === true ? 'renderPost--shaded' : 'renderPost'}>
            {/* <CustomCursor artworks={artworks} modal={modal} hoverOnLink={hoverOnLink} hover={hover} post={post} didLinkHover={didLinkHover} />
            <EachNav modal={modal} setModal={setModal} openModal={openModal} hoverLink={hoverLink} didLinkHover={didLinkHover} /> */}
            <Bio modal={modal}/>
            <div className={`${hover === true ? 'eachArtWork--shaded' : 'eachArtWork'} ${modal === true ? 'eachArtWork--shaded' : 'eachArtWork'}`
        }>
                <div className={modal === true ? 'eachArtWork__img-box--shaded' :'eachArtWork__img-box'}>
    {               post.type === 'video' ?  
                        <iframe
                        onMouseOver={() => imageHovering()}
                        onMouseOut={() => imageHovering()}
                        className='eachArtWork__video'  src={`https://www.youtube.com/embed/${post.description}`}
                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen></iframe>  
                    :
                        <img
                        onMouseOver={() => imageHovering()}
                        onMouseOut={() => imageHovering()}
                        className="eachArtWork__img"
                        src={post.media.fields.file.url}
                            alt='1'
                    />}
                </div>
            </div>
            <div className={modal === true ? 'bio-references--shaded' : 'bio-references'}>
                            <p>Development by Timur Tursunov</p>
                            <p>/</p>
                            <p>Design by Deniz Kilicci</p>
            </div>
        </div>
      )
    }
    return (
        <>
                <div className={`${hover === true ? 'eachArtWork__wrapper--shaded' :'eachArtWork__wrapper'} ${modal === true ? 'eachArtWork__wrapper--shaded' :'eachArtWork__wrapper'} `}>
                    <div className="post">
                        {renderPost()}
                    </div>
                        {/* <div className='eachArtWork__footer'>
                                {id - 1 >= 0 && (  
                                    <Link
                                    onMouseOver={() => hoverLink()}
                                    onMouseOut={() => hoverLink()}
                                    className={modal === true ? "post__back--none" : "post__back"} to={`/artwork/${previousSlug?.fields?.slug}`}>
                                        {post?.firstInCollection === 'true' ? <p>Prev Project</p> : <p>Prev</p>}
                                    </Link>
                                    )}
                                    {id + 1 < artworks.length && (  
                                        <Link
                                        onMouseOver={() => hoverLink()}
                                        onMouseOut={() => hoverLink()}
                                        className={modal === true ? "post__next--none" :"post__next"} to={`/artwork/${nextSlug?.fields?.slug}`}>
                                            {post?.lastInCollection === 'true' ? <p>Next Project</p> : <p>Next</p>}
                                        </Link>
                                    )}
                        </div> */}
                        <div className={`${hover === true ? 'eachArtWork__info-box--shaded'  :'eachArtWork__info-box'} ${modal === true ? 'eachArtWork__info-box--none'  : 'eachArtWork__info-box'}`}>
                                    <p>{post?.collection}</p>
                        </div>
                </div>
        </>

      )
    

}

export default withRouter(EachArtWork)
