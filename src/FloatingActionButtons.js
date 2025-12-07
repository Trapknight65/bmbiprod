import React from 'react';

export default function FloatingActionButtons() {
    const buttonStyle = {
        background: 'linear-gradient(145deg, rgba(86, 212, 118, 0.15), rgba(55, 75, 65, 0.17))',
        boxShadow: `
      6px 6px 12px rgba(38, 73, 50, 0.6),
      -6px -6px 12px rgba(50,50,50,0.1),
      inset 1px 1px 2px rgba(0,0,0,0.3)
    `,
        border: '1px solid rgba(255,255,255,0.1)'
    };

    return (
        <>
            {/* Call Button - Always at bottom */}
            <a
                href="tel:+351960114077"
                aria-label="Call +351 960 114 077"
                className="fixed bottom-6 right-6 z-40 text-white rounded-full p-3 md:p-4  flex items-center gap-2 group"
                style={buttonStyle}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6 text-green-400">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
                <span className="hidden group-hover:inline-block text-sm font-motterdam font-medium whitespace-nowrap">Call Us</span>
            </a>
        </>
    );
}
