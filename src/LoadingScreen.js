import React, { useEffect, useState } from 'react';

export default function LoadingScreen({ onComplete }) {
    const [progress, setProgress] = useState(0);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        // Animation duration in ms
        const duration = 2500;
        const intervalTime = 20;
        const steps = duration / intervalTime;
        const increment = 100 / steps;

        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => {
                        setIsFading(true);
                        setTimeout(onComplete, 500); // Wait for fade out
                    }, 500); // Wait a bit at 100%
                    return 100;
                }
                return prev + increment;
            });
        }, intervalTime);

        return () => clearInterval(timer);
    }, [onComplete]);

    if (!onComplete) return null;
    return (
        <div
            className={`fixed inset-0 bg-black z-50 flex items-center justify-center transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'
                }`}
        >
            <div className="relative flex items-center justify-center">
                {/* Container for both Text and Logo */}
                <div className="relative flex items-center gap-6">

                    {/* BACKGROUND LAYER (Dimmed) */}
                    <div className="flex items-center gap-6 opacity-20 filter grayscale">
                        {/* Text */}
                        <div className="flex flex-col items-center leading-[0.85]">
                            <span className="font-tangerine text-gold text-[60px] sm:text-[100px] md:text-[130px] lg:text-[160px]">
                                Bambi
                            </span>
                            <span className="font-tangerine text-gold text-[60px] sm:text-[100px] md:text-[130px] lg:text-[160px] -mt-3 sm:-mt-5 md:-mt-6">
                                Visuals
                            </span>
                        </div>
                        {/* Logo */}
                        <img
                            src="/logo1.png"
                            alt="Bambi Visuals Logo Background"
                            className="h-[80px] sm:h-[120px] md:h-[150px] lg:h-[180px] object-contain block"
                        />
                    </div>

                    {/* FOREGROUND LAYER (Filling) */}
                    <div
                        className="absolute inset-0 flex items-center gap-6 transition-all duration-75 ease-linear"
                        style={{ clipPath: `inset(0 ${100 - progress}% 0 0)` }}
                    >
                        {/* Text */}
                        <div className="flex flex-col items-center leading-[0.85]">
                            <span className="font-tangerine text-gold text-[60px] sm:text-[100px] md:text-[130px] lg:text-[160px]">
                                Bambi
                            </span>
                            <span className="font-tangerine text-gold text-[60px] sm:text-[100px] md:text-[130px] lg:text-[160px] -mt-3 sm:-mt-5 md:-mt-6">
                                Visuals
                            </span>
                        </div>
                        {/* Logo */}
                        <img
                            src="/logo1.png"
                            alt="Bambi Visuals Logo"
                            className="h-[80px] sm:h-[120px] md:h-[150px] lg:h-[180px] object-contain block"
                        />
                    </div>

                </div>

                {/* Percentage */}
                <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 text-center">
                    <span className="text-fog/60 text-sm font-mono tracking-widest">
                        {Math.round(progress)}%
                    </span>
                </div>
            </div>
        </div>
    );
}
