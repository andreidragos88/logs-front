import React, { useState } from 'react';
import { useInViewEffect } from 'react-hook-inview';

/*
 * Optimize the nr of dom elements
 */
const showsInViewport = (Component, Container) => (props) => {
    const [styles, setStyles] = useState({ height: 'auto' });
    const [isVisible, setIsVisible] = useState(true);

    const ref = useInViewEffect(
        ([entry]) => {
            setStyles({ height: entry.isIntersecting ? 'auto' : entry.boundingClientRect.height });
            setIsVisible(entry.isIntersecting);
        },
        { threshold: 0.1 }
    );

    return (
        <Container ref={ref} style={styles}>
            {isVisible && <Component {...props} />}
        </Container>
    );
};

export default showsInViewport;