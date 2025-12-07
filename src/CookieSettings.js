import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingActionButtons from './FloatingActionButtons';

export default function CookieSettings() {
    const [preferences, setPreferences] = useState({
        essential: true,
        analytics: false,
        marketing: false
    });

    const handleToggle = (key) => {
        if (key === 'essential') return; // Essential cookies cannot be disabled
        setPreferences({ ...preferences, [key]: !preferences[key] });
    };

    const handleSave = () => {
        // Save preferences logic here (e.g., localStorage)
        localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
        alert('Preferences saved!');
    };

    return (
        <div className="min-h-screen text-white">
            <Header />
            <FloatingActionButtons />

            <div className="pt-24 pb-12 px-6">
                <main className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-8 text-center">Cookie Settings</h1>

                    <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl space-y-8">
                        <p className="text-neutral-300">
                            We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic.
                            Below you can manage your preferences.
                        </p>

                        {/* Essential Cookies */}
                        <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                            <div>
                                <h3 className="text-xl font-semibold mb-1">Essential Cookies</h3>
                                <p className="text-sm text-neutral-400">Necessary for the website to function. Cannot be disabled.</p>
                            </div>
                            <div className="relative">
                                <input type="checkbox" checked disabled className="sr-only" />
                                <div className="w-14 h-8 bg-green-500/50 rounded-full opacity-50 cursor-not-allowed"></div>
                                <div className="absolute right-1 top-1 w-6 h-6 bg-white rounded-full shadow-md"></div>
                            </div>
                        </div>

                        {/* Analytics Cookies */}
                        <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                            <div>
                                <h3 className="text-xl font-semibold mb-1">Analytics Cookies</h3>
                                <p className="text-sm text-neutral-400">Help us understand how visitors interact with the website.</p>
                            </div>
                            <button
                                onClick={() => handleToggle('analytics')}
                                className={`relative w-14 h-8 rounded-full transition-colors duration-300 ${preferences.analytics ? 'bg-green-500' : 'bg-neutral-600'}`}
                            >
                                <div className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${preferences.analytics ? 'left-7' : 'left-1'}`}></div>
                            </button>
                        </div>

                        {/* Marketing Cookies */}
                        <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                            <div>
                                <h3 className="text-xl font-semibold mb-1">Marketing Cookies</h3>
                                <p className="text-sm text-neutral-400">Used to track visitors across websites to display relevant ads.</p>
                            </div>
                            <button
                                onClick={() => handleToggle('marketing')}
                                className={`relative w-14 h-8 rounded-full transition-colors duration-300 ${preferences.marketing ? 'bg-green-500' : 'bg-neutral-600'}`}
                            >
                                <div className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${preferences.marketing ? 'left-7' : 'left-1'}`}></div>
                            </button>
                        </div>

                        <div className="pt-6 border-t border-white/10">
                            <button
                                onClick={handleSave}
                                className="w-full py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(220,38,38,0.8), rgba(234,88,12,0.8))',
                                    border: '1px solid rgba(220,38,38,0.4)',
                                    boxShadow: '0 4px 20px rgba(220,38,38,0.3)'
                                }}
                            >
                                Save Preferences
                            </button>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}
