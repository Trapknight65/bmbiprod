import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingActionButtons from '../components/FloatingActionButtons';

export default function About() {
  return (
    <div className="min-h-screen text-white p-6 md:p-12">
      <Header />
      <FloatingActionButtons />

      {/* Add padding to account for fixed header */}
      <div className="pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Who is Bambi */}
          <div>
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-tangerine mb-2">Who is Bambi ?</h1>
            </header>

            <section className="prose prose-invert text-neutral-300 max-w-none">
              <p className="text-lg leading-relaxed text-balance">
                Bambi is a <b>visual storyteller</b> specializing in evocative short-form and documentary&nbsp;work.
              </p>
              <p className="text-lg leading-relaxed text-balance mt-4 hidden md:block">
                With a background in cinematography and editing, our approach blends atmospheric lighting, cinematic pacing, and an attention to <b>emotional detail</b>, delivering <b>unforgettable and appealing&nbsp;visuals</b>.
              </p>

              {/* Cards Grid/Slider */}
              <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-6 px-6 mt-12 xl:grid xl:grid-cols-3 xl:gap-6 xl:pb-0 xl:mx-0 xl:px-0 no-scrollbar">
                {/* Philosophy Card */}
                <div className="min-w-[85vw] snap-center shimmer-effect rounded-xl overflow-hidden border border-white/10 flex flex-col xl:min-w-0" style={{ background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(10px)' }}>
                  <div className="w-full h-48 bg-black/20 p-8 flex items-center justify-center">
                    <img src="/logo1.png" alt="Philosophy" className="w-full h-full object-contain" />
                  </div>
                  <div className="p-6 flex flex-col items-center text-center flex-1">
                    <h3 className="text-2xl font-tangerine text-white mb-2">Philosophy</h3>
                    <p className="text-sm leading-relaxed text-neutral-300 text-balance">
                      The work favors quiet moments and natural emotion — building to striking images that linger.
                    </p>
                  </div>
                </div>

                {/* Team Card */}
                <div className="min-w-[85vw] snap-center shimmer-effect rounded-xl overflow-hidden border border-white/10 flex flex-col xl:min-w-0" style={{ background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(10px)' }}>
                  <div className="w-full h-48">
                    <img src="/team.jpg" alt="Team" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 flex flex-col items-center text-center flex-1">
                    <h3 className="text-2xl font-tangerine text-white mb-2">Team</h3>
                    <p className="text-sm leading-relaxed text-neutral-300 text-balance">
                      We help your producers choose the right team, keep the budget aligned, and ensure a smooth production.
                    </p>
                  </div>
                </div>

                {/* Together Card */}
                <div className="min-w-[85vw] snap-center shimmer-effect rounded-xl overflow-hidden border border-white/10 flex flex-col xl:min-w-0" style={{ background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(10px)' }}>
                  <div className="w-full h-48 bg-black/20 p-8 flex items-center justify-center">
                    <img src="/logo2.png" alt="Together" className="w-full h-full object-contain" />
                  </div>
                  <div className="p-6 flex flex-col items-center text-center flex-1">
                    <h3 className="text-2xl font-tangerine text-white mb-2">Together</h3>
                    <p className="text-sm leading-relaxed text-neutral-300 text-balance">
                      We believe that audiovisual production is a joint collaborative effort.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-tangerine text-white mt-12 mb-8">Our Partners</h3>

              <div className="w-full overflow-hidden mb-12 relative">
                <div className="flex animate-scroll w-max gap-6">
                  {[
                    // Original list
                    { name: 'Akita', src: '/partners/akita.png', url: 'https://www.akitafilm.com' },
                    { name: 'Fargo', src: '/partners/fargo.png', url: 'https://fargofilm.com' },
                    { name: 'Filmmaster', src: '/partners/filmmaster.png', url: 'https://www.filmmaster.com' },
                    { name: 'Klaszik', src: '/partners/klaszik.png', url: 'https://klaszik.com' },
                    { name: 'Schmid', src: '/partners/schmid.png', url: 'https://schmid.pt' },
                    { name: 'The Family', src: '/partners/thefamily.png', url: 'https://thefamily.tv' },
                    { name: 'Viva', src: '/partners/viva.jpeg', url: '#' },
                    { name: 'Vivi', src: '/partners/vivi.jpeg', url: '#' },
                    // Duplicate list for seamless loop
                    { name: 'Akita', src: '/partners/akita.png', url: 'https://www.akitafilm.com' },
                    { name: 'Fargo', src: '/partners/fargo.png', url: 'https://fargofilm.com' },
                    { name: 'Filmmaster', src: '/partners/filmmaster.png', url: 'https://www.filmmaster.com' },
                    { name: 'Klaszik', src: '/partners/klaszik.png', url: 'https://klaszik.com' },
                    { name: 'Schmid', src: '/partners/schmid.png', url: 'https://schmid.pt' },
                    { name: 'The Family', src: '/partners/thefamily.png', url: 'https://thefamily.tv' },
                    { name: 'Viva', src: '/partners/viva.jpeg', url: '#' },
                    { name: 'Vivi', src: '/partners/vivi.jpeg', url: '#' },
                  ].map((partner, index) => (
                    <a
                      key={index}
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-32 h-24 flex items-center justify-center p-4 rounded-xl border border-transparent hover:border-white/10 hover:bg-black/30 transition-all duration-300 group relative overflow-hidden cursor-pointer"
                    >
                      {/* Shimmer effect on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite]" />
                      </div>

                      <img
                        src={partner.src}
                        alt={partner.name}
                        className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - ID Section */}
          <div className="sticky top-24">
            <div
              className="shimmer-effect p-8 rounded-2xl border border-white/10"
              style={{
                background: 'rgba(0,0,0,0.3)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div className="flex flex-col items-center mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gold shadow-lg mb-4">
                  <img
                    src="/bambi_b_.png"
                    alt="Bambi Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl md:text-3xl font-tangerine text-gold border-b border-white/10 pb-4 w-full text-center">Aparicio Bambi</h2>
              </div>

              <div className="space-y-6 text-neutral-300">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-fog/60 mb-1">Place and Year of Birth</h4>
                  <p className="text-white text-sm md:text-lg">12/03/1986 Luanda</p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-widest text-fog/60 mb-1">Current Address</h4>
                  <p className="text-white text-sm md:text-lg">Portugal, Avenida D.Diniz no74 1ºEsq Odivelas/Lisbon</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-fog/60 mb-1">Nationality</h4>
                    <p className="text-white text-sm md:text-lg">Angolan</p>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-fog/60 mb-1">Shooting Base</h4>
                    <p className="text-white text-sm md:text-lg">Lisbon</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-widest text-fog/60 mb-1">Languages</h4>
                  <p className="text-white text-sm md:text-lg">English – C1, Spanish – A</p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-widest text-fog/60 mb-1">Experience</h4>
                  <p className="text-white text-sm md:text-lg">4 Years</p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-widest text-fog/60 mb-1">Education Background</h4>
                  <ul className="space-y-2">
                    <li className="text-white text-sm md:text-base leading-relaxed">Degree in Cinema, Video and Multimedia Communication.</li>
                    <li className="text-white text-sm md:text-base leading-relaxed">Seminar at The University of Television and Film, HFF Munich.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
