import React, { useState } from 'react';
import Header from '../components/Header';
import ContactFormWidget from '../components/forms/ContactFormWidget';
import Footer from '../components/Footer';
import FloatingActionButtons from '../components/FloatingActionButtons';
import VideoGallery from '../components/VideoGallery';
import InstagramGallery from '../components/InstagramGallery';

export default function Discover() {
    const [showMobileForm, setShowMobileForm] = useState(false);
    const [formExpanded, setFormExpanded] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentProcessSlide, setCurrentProcessSlide] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const [processTouchStart, setProcessTouchStart] = useState(0);
    const [processTouchEnd, setProcessTouchEnd] = useState(0);

    const services = [
        {
            title: 'Commercials',
            description: 'Cinematic brand storytelling that captures attention and drives emotion.',
            video: '/admercedes.mp4',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                    <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
                </svg>
            )
        },
        {
            title: 'Music Videos',
            description: 'Aesthetic narratives blending rhythm, color, and movement.',
            video: null,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                    <path fillRule="evenodd" d="M19.952 1.651a.75.75 0 01.298.599V16.303a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.403-4.909l2.311-.66a1.5 1.5 0 001.088-1.442V6.994l-9 2.572v9.737a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.402-4.909l2.31-.66a1.5 1.5 0 001.088-1.442V5.25a.75.75 0 01.544-.721l10.5-3a.75.75 0 01.658.122z" clipRule="evenodd" />
                </svg>
            )
        },
        {
            title: 'Documentaries',
            description: 'Human-focused storytelling exploring culture and emotion.',
            video: null,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                    <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                </svg>
            )
        },
        {
            title: 'Event Coverage',
            description: 'Dynamic footage capturing the energy of live events.',
            video: null,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                    <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                </svg>
            )
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % services.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
    };

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            nextSlide();
        }
        if (isRightSwipe) {
            prevSlide();
        }
    };

    const processSteps = [
        { step: '01', title: 'Discovery', desc: 'We start by understanding your vision, goals, and audience to create a solid foundation for your project.' },
        { step: '02', title: 'Concept', desc: 'Developing a creative direction that aligns with your brand story and resonates with your target audience.' },
        { step: '03', title: 'Production', desc: 'Capturing stunning visuals with professional equipment and techniques, bringing your vision to life.' },
        { step: '04', title: 'Post-Production', desc: 'Editing, color grading, and sound design to perfect the final piece and deliver exceptional results.' }
    ];

    const nextProcessSlide = () => {
        setCurrentProcessSlide((prev) => (prev + 1) % processSteps.length);
    };

    const prevProcessSlide = () => {
        setCurrentProcessSlide((prev) => (prev - 1 + processSteps.length) % processSteps.length);
    };

    const handleProcessTouchStart = (e) => {
        setProcessTouchStart(e.targetTouches[0].clientX);
    };

    const handleProcessTouchMove = (e) => {
        setProcessTouchEnd(e.targetTouches[0].clientX);
    };

    const handleProcessTouchEnd = () => {
        if (!processTouchStart || !processTouchEnd) return;
        const distance = processTouchStart - processTouchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            nextProcessSlide();
        }
        if (isRightSwipe) {
            prevProcessSlide();
        }
    };

    return (
        <div className="min-h-screen text-white">
            <Header />
            <FloatingActionButtons />

            {/* Desktop/Tablet Layout */}
            <div className="hidden md:block pt-20 pb-20">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Hero Section */}
                    <header className="mb-16 text-left">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">Discover Our Work</h1>
                        <p className="text-xl text-neutral-300 leading-relaxed max-w-3xl mx-auto">
                            We specialize in creating visual stories that resonate. From commercials to documentaries,
                            every project is crafted with attention to detail and emotional depth.
                        </p>
                    </header>

                    {/* Split Layout: Slider Left, Process Cards Right */}
                    <section className="mb-20">
                        <div className="flex gap-8 items-start">
                            {/* Left Side - Services Slider */}
                            <div className="w-1/2">
                                <div className="relative">
                                    {/* Slider Container */}
                                    <div
                                        className="shimmer-effect rounded-2xl overflow-hidden"
                                        style={{ background: 'rgba(0,0,0,0.4)' }}
                                        onTouchStart={handleTouchStart}
                                        onTouchMove={handleTouchMove}
                                        onTouchEnd={handleTouchEnd}
                                    >
                                        <div className="relative aspect-video">
                                            {services[currentSlide].video ? (
                                                <video
                                                    key={currentSlide}
                                                    className="w-full h-full object-cover"
                                                    autoPlay
                                                    loop
                                                    muted
                                                    playsInline
                                                >
                                                    <source src={services[currentSlide].video} type="video/mp4" />
                                                </video>
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-black/80 to-red/20">
                                                    <div className="text-orange-400">
                                                        {services[currentSlide].icon}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Overlay Gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent"></div>

                                            {/* Content Overlay - Left Bottom */}
                                            <div className="absolute bottom-0 left-0 p-8 z-10">
                                                <h3 className="text-4xl font-bold mb-3 text-white drop-shadow-2xl">{services[currentSlide].title}</h3>
                                                <p className="text-lg text-white/90 leading-relaxed drop-shadow-lg max-w-md">{services[currentSlide].description}</p>
                                            </div>

                                            {/* Navigation Arrows on Sides */}
                                            <button
                                                onClick={prevSlide}
                                                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 shimmer-bottom p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all backdrop-blur-sm"
                                                aria-label="Previous slide"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                    <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
                                                </svg>
                                            </button>

                                            <button
                                                onClick={nextSlide}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 shimmer-bottom p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all backdrop-blur-sm"
                                                aria-label="Next slide"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                    <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                                                </svg>
                                            </button>

                                            {/* Dots Indicator at Bottom */}
                                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                                                {services.map((_, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => setCurrentSlide(index)}
                                                        className={`h-2 rounded-full transition-all ${index === currentSlide ? 'bg-gold w-12' : 'bg-white/40 w-2 hover:bg-white/60'
                                                            }`}
                                                        aria-label={`Go to slide ${index + 1}`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side - Process Cards */}
                            <div className="w-1/2">
                                <div className="grid grid-cols-2 gap-4">
                                    {processSteps.map((item, index) => (
                                        <div
                                            key={index}
                                            className="flip-card shimmer-effect h-56"
                                        >
                                            <div className="flip-card-inner">
                                                {/* Front */}
                                                <div className="flip-card-front flex flex-col items-center justify-center text-center">
                                                    <div className="text-5xl font-bold text-orange-500/40 mb-3">{item.step}</div>
                                                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                                    <p className="text-xs text-neutral-400 mt-2">Hover to learn more</p>
                                                </div>
                                                {/* Back */}
                                                <div className="flip-card-back flex flex-col items-center justify-center text-center">
                                                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                                    <p className="text-neutral-200 text-xs leading-relaxed px-2">{item.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Video Gallery Section */}
                    <section className="mb-20">
                        <VideoGallery channelId={process.env.REACT_APP_YOUTUBE_CHANNEL_ID} />
                    </section>

                    {/* Instagram Gallery Section */}
                    <section className="mb-20">
                        <InstagramGallery />
                    </section>

                    <Footer />
                </div>

                {/* Collapsible Contact Form - Bottom Right (Stacked above call button) */}
                <div className="fixed bottom-6 right-24 z-50">
                    {!formExpanded ? (
                        <button
                            onClick={() => setFormExpanded(true)}
                            className="shimmer-effect px-6 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-2xl"
                            style={{
                                background: 'linear-gradient(135deg, rgba(220,38,38,0.95), rgba(234,88,12,0.95))'
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                            </svg>
                            Contact Us
                        </button>
                    ) : (
                        <div className="w-96 max-h-[600px] overflow-hidden rounded-2xl shadow-2xl" style={{ background: 'rgba(0,0,0,0.95)' }}>
                            <div className="relative">
                                {/* Close Button */}
                                <button
                                    onClick={() => setFormExpanded(false)}
                                    className="absolute top-4 right-4 z-50 text-white p-2 rounded-lg transition-all hover:bg-white/10"
                                    aria-label="Close form"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                                    </svg>
                                </button>

                                {/* Form */}
                                <div className="p-6">
                                    <ContactFormWidget compact={false} />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden pt-20 p-6 pb-24">
                {/* Hero Section */}
                <header className="mb-12 text-left">
                    <h1 className="text-3xl font-bold mb-4">Discover Our Work</h1>
                    <p className="text-base text-neutral-300">
                        We specialize in creating visual stories that resonate. From commercials to documentaries,
                        every project is crafted with attention to detail and emotional depth.
                    </p>
                </header>

                {/* Services Slider - Mobile */}
                <section className="mb-12">
                    <div className="relative">
                        {/* Slider Container */}
                        <div
                            className="shimmer-effect rounded-2xl overflow-hidden"
                            style={{ background: 'rgba(0,0,0,0.4)' }}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            <div className="relative aspect-video">
                                {services[currentSlide].video ? (
                                    <video
                                        key={currentSlide}
                                        className="w-full h-full object-cover"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    >
                                        <source src={services[currentSlide].video} type="video/mp4" />
                                    </video>
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-black/80 to-red/20">
                                        <div className="text-orange-400">
                                            {services[currentSlide].icon}
                                        </div>
                                    </div>
                                )}

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                                {/* Content Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                                    <h3 className="text-xl font-bold mb-2 text-white drop-shadow-lg">{services[currentSlide].title}</h3>
                                    <p className="text-fog/90 text-sm leading-relaxed drop-shadow-md">{services[currentSlide].description}</p>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Controls */}
                        <div className="flex items-center justify-between mt-6">
                            <button
                                onClick={prevSlide}
                                className="shimmer-bottom p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all"
                                aria-label="Previous slide"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
                                </svg>
                            </button>

                            {/* Dots Indicator */}
                            <div className="flex gap-2">
                                {services.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? 'bg-gold w-6' : 'bg-white/30'
                                            }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={nextSlide}
                                className="shimmer-bottom p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all"
                                aria-label="Next slide"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Process Section - Mobile Carousel */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6 text-center">Our Process</h2>

                    <div className="relative">
                        {/* Carousel Container */}
                        <div
                            className="shimmer-effect rounded-2xl overflow-hidden"
                            style={{ background: 'rgba(0,0,0,0.4)' }}
                            onTouchStart={handleProcessTouchStart}
                            onTouchMove={handleProcessTouchMove}
                            onTouchEnd={handleProcessTouchEnd}
                        >
                            <div className="relative min-h-[280px] p-6 flex flex-col items-center justify-center text-center">
                                <div className="text-5xl font-bold text-orange-500/40 mb-4">{processSteps[currentProcessSlide].step}</div>
                                <h3 className="text-2xl font-bold text-white mb-4">{processSteps[currentProcessSlide].title}</h3>
                                <p className="text-neutral-200 text-base leading-relaxed">{processSteps[currentProcessSlide].desc}</p>
                            </div>
                        </div>

                        {/* Navigation Controls */}
                        <div className="flex items-center justify-between mt-6">
                            <button
                                onClick={prevProcessSlide}
                                className="shimmer-bottom p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all"
                                aria-label="Previous process step"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
                                </svg>
                            </button>

                            {/* Dots Indicator */}
                            <div className="flex gap-2">
                                {processSteps.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentProcessSlide(index)}
                                        className={`w-2 h-2 rounded-full transition-all ${index === currentProcessSlide ? 'bg-gold w-6' : 'bg-white/30'
                                            }`}
                                        aria-label={`Go to step ${index + 1}`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={nextProcessSlide}
                                className="shimmer-bottom p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all"
                                aria-label="Next process step"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Video Gallery Section - Mobile */}
                <section className="mb-12">
                    <VideoGallery channelId={process.env.REACT_APP_YOUTUBE_CHANNEL_ID} />
                </section>

                {/* Instagram Gallery Section - Mobile */}
                <section className="mb-12">
                    <InstagramGallery />
                </section>

                <Footer />
            </div>

            {/* Mobile Fixed Bottom Button */}
            <button
                onClick={() => setShowMobileForm(true)}
                className="shimmer-effect md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
                style={{
                    background: 'linear-gradient(135deg, rgba(220,38,38,0.95), rgba(234,88,12,0.95))'
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                Contact Us
            </button>

            {/* Mobile Form Modal */}
            {showMobileForm && (
                <div className="md:hidden fixed inset-0 z-50 flex items-end">
                    {/* Overlay */}
                    <div
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                        onClick={() => setShowMobileForm(false)}
                    />

                    {/* Modal */}
                    <div
                        className="relative w-full bg-gradient-to-b from-black via-orange to-green rounded-t-3xl p-6 max-h-[85vh] overflow-hidden flex flex-col"
                        style={{
                            boxShadow: '0 -8px 32px rgba(0,0,0,0.6)'
                        }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setShowMobileForm(false)}
                            className="absolute top-4 right-4 text-white p-2 rounded-lg transition-all"
                            style={{
                                background: 'rgba(255,255,255,0.1)',
                                border: '1px solid rgba(255,255,255,0.2)'
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                            </svg>
                        </button>

                        {/* Form */}
                        <div className="flex-1 overflow-hidden">
                            <ContactFormWidget compact={false} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
