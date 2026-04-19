import { useState, useEffect } from 'react';
import '../styles/navbar.css';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`} style={{ margin: 0, padding: 0 }}>
            <div className="navbar__left" style={{ margin: 0, padding: 0 }}>
                <div className="navbar__logo" style={{ margin: 0, padding: 0 }}>CINEMA</div>
                <div className="navbar__menu" style={{ margin: 0, padding: 0 }}>
                    <a href="#" className="navbar__link">Home</a>
                    <a href="#" className="navbar__link">TV Shows</a>
                    <a href="#" className="navbar__link">Movies</a>
                    <a href="#" className="navbar__link">New & Popular</a>
                    <a href="#" className="navbar__link">My List</a>
                </div>
            </div>
            <div className="navbar__right" style={{ margin: 0, padding: 0 }}>
                <button className="navbar__icon navbar__search" aria-label="Search">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                    </svg>
                </button>
                <button className="navbar__icon navbar__notifications" aria-label="Notifications">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.5 1.5H9.5V.5h1v1zM5.5 5a4.5 4.5 0 119 0v7l3 4v1h-15v-1l3-4v-7zm1 0v7a1 1 0 00.3.7l2.2 2.9V17h4v-1.4l2.2-2.9A1 1 0 0015.5 12V5a3.5 3.5 0 00-7 0z" />
                    </svg>
                </button>
                <button className="navbar__icon navbar__profile" aria-label="Profile">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
