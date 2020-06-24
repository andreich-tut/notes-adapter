import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';


const spinnerFrames = [ '🕛', '🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚' ];

const Spinner = () => {
    const delay = 80;
    const [ frameIndex, setFrameIndex ] = useState(0);
    const requestRef = useRef(0);
    const previousTimeRef = useRef(0);

    useEffect(() => {
        const animate = (time) => {
            if (time - previousTimeRef.current > delay) {
                previousTimeRef.current = time;
                setFrameIndex((prevFrameIndex) => {
                    return spinnerFrames.length - 1 > prevFrameIndex
                        ? prevFrameIndex + 1 : 0;
                });
            }

            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(requestRef.current);
    }, []);

    return <div style={ {
        width: '20px',
        height: '20px'
    } }>{ spinnerFrames[frameIndex] }</div>;
};

const WithSpinner = ({ children }) => children.props.isLoading ? <Spinner/> : children;

WithSpinner.propTypes = {
    children: PropTypes.element,
};

export default WithSpinner;