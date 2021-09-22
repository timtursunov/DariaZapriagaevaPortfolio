import React, {useState, useEffect} from 'react'
import { useParams} from 'react-router-dom';

export default function CustomCursor(props) {
    let {artworks} = props;
    const cursorRef = React.useRef(null);
    const { slug } = useParams()
    let id = artworks.findIndex(el => el?.fields?.slug === slug)



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
        <div ref={cursorRef} className='custom-cursor' 
        style={{
               left: `${position.x}px`,
               top: `${position.y}px`
          }}>
            {`${id+1}/${artworks.length}`}
        </div>
    )
}

