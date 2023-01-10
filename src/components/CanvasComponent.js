import React from 'react';
import { useEffect} from "react";

import PropTypes from 'prop-types';


const Canvas = ({draw , height, width}) => {
    const canvas = React.useRef()

    Canvas.propTypes = {
        draw: PropTypes.func.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
      };

    useEffect(() => {
        const context = canvas.current.getContext('2d');
        draw(context)
    });
    return (
        <canvas
        style={{backgroundColor:"gray"}}
            ref={canvas}
            width={width}
            height={height}
        />
    )
};
export default Canvas;