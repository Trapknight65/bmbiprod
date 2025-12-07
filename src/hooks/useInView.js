import { useState, useEffect, useRef } from 'react';

export default function useInView(options = {}) {
    const [isInView, setIsInView] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !hasAnimated) {
                setIsInView(true);
                setHasAnimated(true);
            }
        }, {
            threshold: options.threshold || 0.2,
            rootMargin: options.rootMargin || '0px',
        });

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [hasAnimated, options.threshold, options.rootMargin]);

    return [ref, isInView];
}
