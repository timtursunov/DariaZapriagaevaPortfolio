import React from "react";
import withCursor from "../hooks/withCursor";
import {Link} from 'react-router-dom';



const Sides = props => {
  const { onCursor } = props.context; 
  let { getComponent, left, right, count, length } = props;

  return (
    <div className="sides">
        {getComponent()}

        {count - 1 >= 0 && 
            (<Link className="side-left" onMouseEnter={() => onCursor('left')}
            onMouseLeave={onCursor} to={`/artwork/${left}`}/>
        )}
        {count + 1 < length && 
            (<Link className="side-right" onMouseEnter={() => onCursor('right')}
            onMouseLeave={onCursor}to={`/artwork/${right}`}/>
        )}

    </div>);
};

export default withCursor(Sides);
