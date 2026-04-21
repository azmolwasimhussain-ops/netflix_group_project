import { useState } from 'react';
import netflixLogo from '../assets/netflix-logo.svg';

export default function Banner() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden bg-black flex flex-col justify-between">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full object-cover">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          {/* Using a placeholder looping video URL */}
          <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4" />
        </video>
      </div>

      {/* Dark Overlay Gradients */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80"></div>
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.55)]"></div>

      {/* Top Navbar Area: Logo & Sign In */}
      <header className="relative z-10 flex items-center justify-between px-6 py-4 md:px-12 md:py-6 max-w-7xl mx-auto w-full">
        <img
          src={netflixLogo}
          alt="Netflix"
          className="w-24 md:w-36 object-contain"
        />
        <button className="bg-[var(--netflix-red)] text-white px-4 py-1.5 md:px-6 md:py-2 text-sm md:text-base font-medium rounded hover:bg-red-700 transition">
          Sign In
        </button>
      </header>

      {/* Centered Hero Content */}
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto w-full mt-[-80px]">
        <h1 className="text-[var(--netflix-text)] text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] font-black leading-tight drop-shadow-2xl mb-4">
          Unlimited movies, TV shows, and more
        </h1>
        <p className="text-[var(--netflix-text)] text-lg sm:text-2xl md:text-[1.5rem] font-medium drop-shadow-lg mb-8">
          Watch anywhere. Cancel anytime.
        </p>

        <form 
          onSubmit={(e) => { e.preventDefault(); setIsModalOpen(true); }}
          className="w-full flex flex-col md:flex-row items-center justify-center gap-2 max-w-3xl"
        >
          <div className="relative w-full md:flex-1">
            <input
              type="email"
              placeholder="Email address"
              required
              className="w-full px-4 py-3 md:py-4 bg-black/60 border border-gray-600 rounded text-white text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-white peer"
            />
          </div>
          <button
            type="submit"
            className="w-auto flex items-center justify-center gap-2 bg-[var(--netflix-red)] text-white text-lg md:text-xl font-medium px-6 py-3 md:py-4 rounded hover:bg-red-700 hover:shadow-[0_0_15px_rgba(229,9,20,0.8)] transition-all duration-300 flex-shrink-0"
          >
            Get Started
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </form>
      </div>

      {/* Sign Up Modal (Hidden by default) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
          <div className="bg-[var(--netflix-surface)] rounded-lg w-full max-w-md p-8 relative animate-fade-in shadow-2xl border border-gray-800">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-3xl font-bold text-white mb-6">Sign Up</h2>
            <p className="text-[var(--netflix-muted)] mb-6">
              Create a password to start your membership.
            </p>
            <input
              type="password"
              placeholder="Add a password"
              className="w-full px-4 py-3 bg-black/60 border border-gray-600 rounded text-white mb-4 focus:outline-none focus:border-white"
            />
            <button className="w-full bg-[var(--netflix-red)] text-white font-medium py-3 rounded text-lg hover:bg-red-700 transition">
              Next
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
