import React from 'react';

export default function Footer() {
    return (
        <footer className="text-center text-white text-base py-6 relative z-10">
            <div className="mb-4 flex justify-center gap-6 text-sm text-neutral-400">
                <a href="#/cookie-settings" className="hover:text-orange-400 transition-colors">Cookie Settings</a>
                <a href="#/terms" className="hover:text-orange-400 transition-colors">Terms & Conditions</a>
                <a href="#/privacy" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center gap-6 mb-6">
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shimmer-effect p-3 rounded-full text-white hover:text-gold transition-colors"
                    style={{ background: 'rgba(255,255,255,0.05)' }}
                    aria-label="Instagram"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                </a>
                <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shimmer-effect p-3 rounded-full text-white hover:text-gold transition-colors"
                    style={{ background: 'rgba(255,255,255,0.05)' }}
                    aria-label="LinkedIn"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                </a>
                <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shimmer-effect p-3 rounded-full text-white hover:text-gold transition-colors"
                    style={{ background: 'rgba(255,255,255,0.05)' }}
                    aria-label="TikTok"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.49-3.35-3.98-5.6-.48-2.21.08-4.55 1.46-6.39.46-.59 1.04-1.12 1.7-1.56.04.03.09.07.13.1.05.05.1.09.15.14v4.05c-.44.26-.85.58-1.22.94-.94.96-1.32 2.36-1.06 3.67.27 1.4 1.29 2.58 2.63 3.04 1.33.46 2.85.15 3.92-.79 1.08-.94 1.65-2.33 1.61-3.74.04-4.74.01-9.48.01-14.22-.01-.02-.01-.04-.01-.06z" />
                    </svg>
                </a>
            </div>
            © {new Date().getFullYear()} Allan Deschamps x Bambi Visuals. All rights reserved.
        </footer>
    );
}
