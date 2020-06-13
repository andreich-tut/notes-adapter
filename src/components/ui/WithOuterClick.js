import PropTypes from 'prop-types';
import React, {
    Children,
    cloneElement,
    isValidElement,
    useEffect,
    useRef
} from 'react';


const WithOuterClick = ({ children, handler }) => {

    const ref = useRef(null);

    const handleClickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            handler();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ ref ]);

    return Children.map(children, child => {
        if (isValidElement(child)) {
            return cloneElement(children, { ref });
        }

        return child;
    });
};

WithOuterClick.propTypes = {
    children: PropTypes.element.isRequired,
    handler: PropTypes.func.isRequired,
};

export default WithOuterClick;