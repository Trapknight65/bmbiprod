import React, { useEffect, useState } from 'react';

const Background = () => {
    const [fireflies, setFireflies] = useState([]);

    useEffect(() => {
        // Generate random fireflies
        const count = 30;
        const newFireflies = Array.from({ length: count }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            animationDuration: 10 + Math.random() * 20 + 's',
            animationDelay: Math.random() * 5 + 's',
            size: 2 + Math.random() * 3 + 'px',
        }));
        setFireflies(newFireflies);
    }, []);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            {/* Shimmering Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-red opacity-80 animate-gradientShift background-size-200"></div>

            {/* Fireflies */}
            {fireflies.map((fly) => (
                <div
                    key={fly.id}
                    className="absolute rounded-full bg-gold opacity-0 animate-firefly"
                    style={{
                        left: `${fly.left}%`,
                        top: `${fly.top}%`,
                        width: fly.size,
                        height: fly.size,
                        animationDuration: fly.animationDuration,
                        animationDelay: fly.animationDelay,
                        boxShadow: '0 0 10px 2px rgba(255, 203, 17, 0.4)'
                    }}
                />
            ))}

            {/* Overlay to ensure text readability if needed, though gradient is already dark */}
            <div className="absolute inset-0 bg-black/20"></div>
        </div>
    );
};

export default Background;
