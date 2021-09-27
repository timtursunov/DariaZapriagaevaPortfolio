import React, {useState, useEffect} from 'react'
import { useParams} from 'react-router-dom';

export default function CustomCursor({modal, hover, post, didLinkHover, didVideoHover}) {
    const cursorRef = React.useRef(null);
    const { slug } = useParams()

    const [position, setPosition] = useState({x: 0, y: 0});
    useEffect(() => {
              addEventListeners();
              return () => removeEventListeners();
       }, []);
    const addEventListeners = () => {
     document.addEventListener("mousemove", onMouseMove);
     };   
    const removeEventListeners = () => {
        document.removeEventListener("mousemove", onMouseMove);
    };
    const onMouseMove = (e) => {
        setPosition({x: e.clientX, y: e.clientY});
        };
    return (
        <div ref={cursorRef} className={`${modal === true ? 'custom-cursor--none' :'custom-cursor'} ${didLinkHover === true ? 'custom-cursor--none' : 'custom-cursor'} ${hover === true ? 'custom-cursor--white' : 'custom-cursor'} ${didVideoHover === true ? 'custom-cursor--none' : 'custom-cursor' } `}
        style={{
               left: `${position.x}px`,
               top: `${position.y}px`
          }}>
            {`${post.orderOnCollection}/${post.howManyInCollection}`}
        </div>
    )
}

