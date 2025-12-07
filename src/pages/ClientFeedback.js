import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingActionButtons from '../components/FloatingActionButtons';
import FeedbackFormWidget from '../components/forms/FeedbackFormWidget';

export default function ClientFeedback() {
    const [showMobileForm, setShowMobileForm] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const testimonials = [
        {
            name: 'TEY CLAMOR',
            role: 'Director of Photography',
            feedback: "I really enjoy filming in Lisbon, Portugal. There aren't many places where you can find beautiful weather with excellent lighting, step out of the city center and in 30 minutes be on a mountain in the forest or in the countryside, finding all these terrains and different textures — and that is certainly one of the great aspects of filming here.",
            company: 'Bambi Productions',
            image: '/teyclamor.webp'
        },
        {
            name: 'KELLY GALLAGHER',
            role: 'Producer and Filmmaker',
            feedback: "I met Bambi when I was in Lisbon, Portugal working with RTP on a secret documentary about (Mercury and Human Rights). Bambi was just getting started at the time. He brought his computer to the Hotel Ritz and began transcribing and subtitling our project so that we could show it to our audience in America as quickly as possible. He is professional, dedicated, creative, and willing to do whatever is needed to get the job done. He has direction. I truly feel blessed and lucky to have worked with this brilliant producer.",
            company: '',
            image: '/kellygallagher.png'
        }
    ];

    // Auto-scroll carousel every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        }, 15000);

        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <div className="min-h-screen text-white">
            <Header />
            <FloatingActionButtons />

            {/* Desktop Split Layout */}
            <div className="hidden md:flex h-screen pt-20">
                {/* Left Side - Scrollable Content */}
                <div className="w-3/5 overflow-y-auto p-12 no-scrollbar">
                    <main className="max-w-4xl mx-auto">
                        {/* Hero Section */}
                        <header className="mb-16 text-center">
                            <h1 className="text-4xl md:text-6xl font-bold mb-4">Client Feedback</h1>
                            <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto text-balance">
                                Don't just take our word for it. Here's what our clients have to say about working with&nbsp;us.
                            </p>
                        </header>

                        {/* Testimonials Carousel */}
                        <section className="mb-20">
                            <div className="relative overflow-hidden">
                                <div
                                    className="flex transition-transform duration-700 ease-in-out"
                                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                >
                                    {testimonials.map((testimonial, index) => (
                                        <div
                                            key={index}
                                            className="min-w-full max-w-full flex-shrink-0 px-2"
                                        >
                                            <div className="shimmer-effect rounded-2xl border border-white/10 p-8 w-full" style={{ background: 'rgba(0,0,0,0.4)' }}>
                                                <div className="flex flex-col md:flex-row gap-6 items-start w-full">
                                                    {/* Circular Photo/Logo Placeholder */}
                                                    <div className="flex-shrink-0">
                                                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-gold">
                                                            <img
                                                                src={testimonial.image}
                                                                alt={testimonial.name}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                    </div>

                                                    {/* Content */}
                                                    <div className="flex-1 flex flex-col min-w-0">
                                                        {/* Quote */}
                                                        <p className="text-neutral-300 text-base md:text-lg leading-relaxed italic mb-6 flex-1 break-words whitespace-normal">
                                                            "{testimonial.feedback}"
                                                        </p>

                                                        {/* Client Info at Bottom */}
                                                        <div className="border-t border-white/10 pt-4">
                                                            <p className="font-bold text-lg md:text-xl text-white">{testimonial.name}</p>
                                                            <p className="text-neutral-400 text-sm mt-1">{testimonial.role}</p>
                                                            {testimonial.company && (
                                                                <p className="text-gold text-sm mt-1">{testimonial.company}</p>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Carousel Indicators */}
                                <div className="flex justify-center gap-2 mt-6">
                                    {testimonials.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentSlide(index)}
                                            className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-gold w-8' : 'bg-white/30'
                                                }`}
                                            aria-label={`Go to slide ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Stats Section */}
                        <section className="mb-20">
                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { number: '50+', label: 'Projects Completed' },
                                    { number: '40+', label: 'Happy Clients' },
                                    { number: '5★', label: 'Average Rating' },
                                    { number: '100%', label: 'Client Satisfaction' }
                                ].map((stat, index) => (
                                    <div
                                        key={index}
                                        className="shimmer-effect text-center p-6 rounded-xl"
                                        style={{
                                            background: 'rgba(0,0,0,0.3)'
                                        }}
                                    >
                                        <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">{stat.number}</div>
                                        <div className="text-neutral-300 text-sm md:text-base text-balance">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* CTA Section */}
                        <section className="text-center py-16">
                            <h2 className="text-3xl font-semibold mb-4 text-balance">Want to Be Our Next Success&nbsp;Story?</h2>
                            <p className="text-neutral-300 mb-8 max-w-2xl mx-auto text-lg leading-relaxed text-balance">
                                Join our growing list of satisfied clients and let's create something amazing&nbsp;together.
                            </p>
                            <a
                                href="#/contact-form"
                                className="shimmer-effect inline-block px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(220,38,38,0.8), rgba(234,88,12,0.8))'
                                }}
                            >
                                Start Your Project
                            </a>
                        </section>

                        <Footer />
                    </main>
                </div>

                {/* Right Side - Fixed Form */}
                <div className="w-2/5 relative flex items-center justify-center p-8 border-l border-white/10 bg-black/20 backdrop-blur-sm">
                    <div className="w-full max-w-xl">
                        <FeedbackFormWidget />
                    </div>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden pt-20 p-6 pb-24">
                <main className="max-w-6xl mx-auto">
                    {/* Hero Section */}
                    <header className="mb-8 text-center">
                        <h1 className="text-2xl font-bold mb-3">Client Feedback</h1>
                        <p className="text-sm text-neutral-300 px-4">
                            Don't just take our word for it. Here's what our clients have to say about working with us.
                        </p>
                    </header>

                    {/* Testimonials Carousel */}
                    <section className="mb-8">
                        <div className="relative overflow-hidden -mx-6 px-6">
                            <div
                                className="flex transition-transform duration-700 ease-in-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {testimonials.map((testimonial, index) => (
                                    <div
                                        key={index}
                                        className="min-w-full max-w-full flex-shrink-0 px-2"
                                    >
                                        <div className="shimmer-effect rounded-xl border border-white/10 p-4 w-full" style={{ background: 'rgba(0,0,0,0.4)' }}>
                                            <div className="flex flex-col gap-3">
                                                {/* Circular Photo/Logo Placeholder */}
                                                <div className="flex justify-center">
                                                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold">
                                                        <img
                                                            src={testimonial.image}
                                                            alt={testimonial.name}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Quote */}
                                                <p className="text-neutral-300 text-xs leading-relaxed italic break-words whitespace-normal">
                                                    "{testimonial.feedback}"
                                                </p>

                                                {/* Client Info at Bottom */}
                                                <div className="border-t border-white/10 pt-3">
                                                    <p className="font-bold text-sm text-white text-center">{testimonial.name}</p>
                                                    <p className="text-neutral-400 text-xs mt-0.5 text-center">{testimonial.role}</p>
                                                    {testimonial.company && (
                                                        <p className="text-gold text-xs mt-0.5 text-center">{testimonial.company}</p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Carousel Indicators */}
                            <div className="flex justify-center gap-2 mt-3">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-gold w-8' : 'bg-white/30'
                                            }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Stats Section */}
                    <section className="mb-8">
                        <div className="grid grid-cols-2 gap-3">
                            {[
                                { number: '50+', label: 'Projects Completed' },
                                { number: '40+', label: 'Happy Clients' },
                                { number: '5★', label: 'Average Rating' },
                                { number: '100%', label: 'Client Satisfaction' }
                            ].map((stat, index) => (
                                <div
                                    key={index}
                                    className="shimmer-effect text-center p-3 rounded-xl"
                                    style={{
                                        background: 'rgba(0,0,0,0.3)'
                                    }}
                                >
                                    <div className="text-2xl font-bold text-orange-400 mb-1">{stat.number}</div>
                                    <div className="text-neutral-300 text-xs">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="text-center py-6">
                        <h2 className="text-xl font-semibold mb-3">Want to Be Our Next Success Story?</h2>
                        <p className="text-neutral-300 mb-5 text-sm px-4">
                            Join our growing list of satisfied clients and let's create something amazing together.
                        </p>
                        <a
                            href="#/contact-form"
                            className="inline-block px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 text-sm"
                            style={{
                                background: 'linear-gradient(135deg, rgba(220,38,38,0.8), rgba(234,88,12,0.8))',
                                border: '1px solid rgba(220,38,38,0.4)',
                                boxShadow: '0 4px 20px rgba(220,38,38,0.3)'
                            }}
                        >
                            Start Your Project
                        </a>
                    </section>
                </main>
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
                    <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.387 17.387 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.165 17.165 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
                </svg>
                Leave Feedback
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
                        <div className="flex-1 overflow-y-auto no-scrollbar">
                            <FeedbackFormWidget />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
