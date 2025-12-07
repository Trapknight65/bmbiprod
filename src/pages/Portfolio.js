import React, { useState, useEffect } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingActionButtons from '../components/FloatingActionButtons';
import { fetchChannelVideos } from '../services/youtubeService';
import useInView from '../hooks/useInView';
import useParallax from '../hooks/useParallax';

export default function Portfolio() {
  const [currentProject, setCurrentProject] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const [error, setError] = useState(null);

  // Scroll-triggered animations
  const [aboutRef, aboutInView] = useInView({ threshold: 0.2 });
  const [videosRef, videosInView] = useInView({ threshold: 0.1 });

  // Parallax effect
  const { scrollY } = useParallax();

  useEffect(() => {
    const loadVideos = async () => {
      try {
        const fetchedVideos = await fetchChannelVideos();
        if (fetchedVideos.error) {
          setError(fetchedVideos.error);
          setVideos([]);
        } else if (fetchedVideos.length > 0) {
          setVideos(fetchedVideos);
          setError(null);
        } else {
          setVideos([]);
          setError("No videos found.");
        }
      } catch (err) {
        setError(err.message);
        setVideos([]);
      } finally {
        setLoading(false);
      }
    };
    loadVideos();
  }, []);

  const nextProject = () => {
    if (videos.length === 0) return;
    setCurrentProject((prev) => (prev + 1) % videos.length);
  };

  const prevProject = () => {
    if (videos.length === 0) return;
    setCurrentProject((prev) => (prev - 1 + videos.length) % videos.length);
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
      nextProject();
    }
    if (isRightSwipe) {
      prevProject();
    }
  };

  const currentVideo = videos.length > 0 ? videos[currentProject] : null;

  return (
    <div className="min-h-screen text-fog font-sans">
      <Header />
      <FloatingActionButtons />

      {/* Quick Section Nav - Fixed Right */}
      <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
        {[
          { id: 'hero', label: 'Top', icon: 'M11.47 2.47a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06l-6.22-6.22V21a.75.75 0 01-1.5 0V4.81l-6.22 6.22a.75.75 0 11-1.06-1.06l7.5-7.5z' },
          { id: 'videos', label: 'Videos', icon: 'M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z' },
          { id: 'about', label: 'About', icon: 'M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z' },
          { id: 'contact', label: 'Contact', icon: 'M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z' },
        ].map(({ id, label, icon }) => (
          <button
            key={id}
            onClick={() => {
              const el = document.getElementById(id);
              if (el) {
                const headerOffset = 100;
                const elementPosition = el.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              }
            }}
            className="group flex items-center gap-2 p-2 md:pr-4 rounded-full bg-black/50 backdrop-blur-md border border-white/10 hover:border-gold/50 hover:bg-black/70 transition-all"
            title={label}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-fog group-hover:text-gold transition-colors">
              <path fillRule="evenodd" d={icon} clipRule="evenodd" />
            </svg>
            <span className="hidden md:inline text-fog text-sm group-hover:text-gold transition-colors">{label}</span>
          </button>
        ))}
      </nav>

      {/* Hero Section - Full Screen Video */}
      <section id="hero" className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover scale-105"
            src="/hero.mp4"
            autoPlay
            loop
            muted={isMuted}
            playsInline
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
        </div>

        {/* Mute Button */}
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="absolute bottom-32 left-8 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all group"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white group-hover:scale-110 transition-transform">
              <path d="M5.85 3.5a.75.75 0 00-1.117-1 9.719 9.719 0 00-2.348 4.876.75.75 0 001.479.248A8.219 8.219 0 015.85 3.5zM19.267 2.5a.75.75 0 10-1.118 1 8.22 8.22 0 011.987 4.124.75.75 0 001.48-.248A9.72 9.72 0 0019.266 2.5z" />
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM9 7.5a.75.75 0 01.75.75v7.5a.75.75 0 01-1.5 0v-7.5A.75.75 0 019 7.5zm3 0a.75.75 0 01.75.75v7.5a.75.75 0 01-1.5 0v-7.5a.75.75 0 01.75-.75zm3 0a.75.75 0 01.75.75v7.5a.75.75 0 01-1.5 0v-7.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
              <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
              <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white group-hover:scale-110 transition-transform">
              <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM17.78 9.22a.75.75 0 10-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 101.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L20.56 12l1.72-1.72a.75.75 0 10-1.06-1.06l-1.72 1.72-1.72-1.72z" />
            </svg>
          )}
        </button>
      </section>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-20 space-y-32">

          {/* Featured Projects Slider - "Movement and Emotion" */}
          <section
            id="videos"
            ref={videosRef}
            className="relative -mx-4 md:-mx-10 scroll-mt-32"
            style={{ transform: `translateY(${scrollY * 0.05}px)` }}
          >
            <h2 className={`text-3xl md:text-5xl font-tangerine mb-8 p-x-3.14 text-fog text-left transition-all duration-1000 ${videosInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Movement <span className="text-gold">&</span> Emotion
            </h2>
            <div className="relative h-[70vh] md:h-[80vh]">
              {loading ? (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-fog/60">Loading videos...</div>
                </div>
              ) : videos.length > 0 ? (
                <div
                  className="relative w-full h-full overflow-hidden"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  <div className="absolute inset-0">
                    {/* Background Thumbnail */}
                    <div className="w-full h-full relative">
                      <img
                        src={currentVideo.thumbnail}
                        alt={currentVideo.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30"></div>
                    </div>
                  </div>

                  <div className="absolute inset-0 flex items-center px-8 md:px-16 z-10">
                    <div className="max-w-2xl animate-fadeInUp">
                      <h2 className="text-3xl md:text-5xl font-tangerine mb-4 text-fog drop-shadow-2xl line-clamp-2">
                        {currentVideo.title}
                      </h2>
                      <p className="text-base md:text-lg text-fog/90 leading-relaxed mb-6 drop-shadow-lg max-w-md line-clamp-3">
                        {currentVideo.description}
                      </p>
                      <button
                        onClick={() => setSelectedVideo(currentVideo)}
                        className="shimmer-effect px-6 py-3 rounded-full bg-red/80 hover:bg-red transition-all text-fog font-semibold flex items-center gap-2 group"
                      >
                        Watch
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                          <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Left Arrow */}
                  <button
                    onClick={prevProject}
                    className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm transition-all items-center justify-center shimmer-effect"
                    aria-label="Previous"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-fog">
                      <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
                    </svg>
                  </button>

                  {/* Right Arrow */}
                  <button
                    onClick={nextProject}
                    className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm transition-all items-center justify-center shimmer-effect"
                    aria-label="Next"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-fog">
                      <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                    </svg>
                  </button>

                  {/* Dots */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                    {videos.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentProject(index)}
                        className={`h-3 rounded-full transition-all ${index === currentProject
                          ? 'bg-gold w-12 shadow-lg shadow-gold/50'
                          : 'bg-white/40 w-3 hover:bg-white/60'
                          }`}
                        aria-label={`Project ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-4">
                  <div className="text-fog/60 mb-2">No videos found.</div>
                  {error && <div className="text-red/80 text-sm bg-black/50 p-2 rounded">{error}</div>}
                </div>
              )}

              {/* Counter */}
              {videos.length > 0 && (
                <div className="absolute top-8 right-4 md:right-10 z-20 text-fog/80 text-sm font-medium">
                  <span className="text-2xl font-bold text-gold">{String(currentProject + 1).padStart(2, '0')}</span>
                  <span className="mx-2">/</span>
                  <span>{String(videos.length).padStart(2, '0')}</span>
                </div>
              )}
            </div>
          </section>

          {/* About - Pokemon Battle Style */}
          <section
            id="about"
            ref={aboutRef}
            className="max-w-6xl mx-auto overflow-hidden scroll-mt-32"
            style={{ transform: `translateY(${scrollY * -0.03}px)` }}
          >
            {/* Title with Photo inline on mobile */}
            <div className="flex items-center gap-4 mb-8 md:mb-12">
              {/* Animated Title - triggers on scroll */}
              <h2 className={`text-3xl md:text-5xl font-tangerine text-fog text-left transition-all duration-1000 ${aboutInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <span className={`inline-block transition-all duration-700 ${aboutInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: '0.1s' }}>Aparicio</span>{' '}
                <span className={`inline-block text-gold transition-all duration-700 ${aboutInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: '0.3s' }}>Bambi</span>{' '}
                <span className={`inline-block transition-all duration-700 ${aboutInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: '0.5s' }}>!</span>
              </h2>
              {/* Photo - inline on mobile, hidden here on desktop */}
              <div className={`md:hidden flex-shrink-0 transition-all duration-1000 ${aboutInView ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                <div className="relative group">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gold shadow-lg shadow-gold/30">
                    <img
                      src="/bambi_b_.png"
                      alt="Aparicio Bambi"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Battle Layout: Text Left, Photo Mid-Right (desktop only for large photo) */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              {/* Left Side - Text with floating animation */}
              <div className={`flex-1 transition-all duration-1000 ${aboutInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`} style={{ transitionDelay: '0.4s' }}>
                <p className={`text-fog/80 text-base md:text-xl leading-relaxed text-balance font-light max-w-xl ${aboutInView ? 'animate-float-slow' : ''}`}>
                  Bambi is a visual storyteller specializing in evocative short-form and documentary work. With a background in cinematography and editing, our approach blends atmospheric lighting, cinematic pacing, and an attention to emotional detail.
                </p>
              </div>

              {/* Right Side - Profile Image (mid-right) with floating animation - hidden on mobile */}
              <div className={`hidden md:block flex-shrink-0 transition-all duration-1000 ${aboutInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`} style={{ transitionDelay: '0.6s' }}>
                <div className={`relative group p-8 ${aboutInView ? 'animate-float' : ''}`}>
                  {/* Profile image container */}
                  <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-gold shadow-2xl shadow-gold/40">
                    <img
                      src="/bambi_b_.png"
                      alt="Aparicio Bambi"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Gold-black shimmer overlay on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-full">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Explore & Contact */}
          <section className="max-w-7xl mx-auto pb-20 scroll-mt-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              <div>
                <h2 className="text-2xl font-tangerine mb-8 uppercase tracking-widest">Explore More</h2>
                <nav className="flex flex-col gap-4">
                  <a href="#/about" className="shimmer-effect px-6 py-4 rounded-xl border border-fog/20 hover:bg-fog/10 hover:border-fog/40 transition-all text-fog text-left">About Page</a>
                  <a href="#/discover" className="shimmer-effect px-6 py-4 rounded-xl border border-fog/20 hover:bg-fog/10 hover:border-fog/40 transition-all text-fog text-left">Discover</a>
                  <a href="#/client-feedback" className="shimmer-effect px-6 py-4 rounded-xl border border-fog/20 hover:bg-fog/10 hover:border-fog/40 transition-all text-fog text-left">Client Feedback</a>
                </nav>
              </div>
              <div>
                <h2 id="contact" className="text-2xl font-tangerine mb-6 text-fog">Let Us Create Together</h2>
                <p className="text-fog/60 mb-6 text-sm">For collaborations, bookings, or inquiries.</p>
                <form className="space-y-4 mb-8">
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-fog/20 text-fog placeholder-fog/40 focus:outline-none focus:border-gold/50 transition-all" />
                  <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-fog/20 text-fog placeholder-fog/40 focus:outline-none focus:border-gold/50 transition-all" />
                  <textarea placeholder="Your Message" rows="4" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-fog/20 text-fog placeholder-fog/40 focus:outline-none focus:border-gold/50 transition-all resize-none"></textarea>
                  <button type="submit" className="w-full shimmer-effect px-6 py-3 rounded-lg bg-red/80 hover:bg-red text-fog font-semibold transition-all">Send Message</button>
                </form>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-red/80 rounded-full text-white transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
              </svg>
            </button>
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
              title={selectedVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
