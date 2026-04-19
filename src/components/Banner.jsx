import '../styles/banner.css';

function Banner() {
    return (
        <div className="banner" style={{
            backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%)',
            backgroundColor: '#0f0f0f'
        }}>
            <div className="banner__content">
                <div className="banner__badge">ORIGINAL</div>
                <h1 className="banner__title">MIDNIGHT PROTOCOL</h1>
                <p className="banner__description">When a high-stakes cyber heist goes wrong, an elite hacker must navigate the neon-lit underworld of Neo-Tokyo to clear her name before the clock strikes zero.</p>
                <div className="banner__info">
                    <span className="banner__match">98% Match</span>
                    <span className="banner__year">2024</span>
                    <span className="banner__rating">18+</span>
                    <span className="banner__duration">2h 14m</span>
                    <span className="banner__quality">4K</span>
                </div>
                <div className="banner__buttons">
                    <button className="banner__btn banner__btn--primary">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M3 2v12l9-6-9-6z" />
                        </svg>
                        Play
                    </button>
                    <button className="banner__btn banner__btn--secondary">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M2 1h12a1 1 0 011 1v12a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1zm1 2v10h10V3H3z" />
                        </svg>
                        My List
                    </button>
                    <button className="banner__btn banner__btn--secondary">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M8 2v10M3 7h10" stroke="currentColor" strokeWidth="2" fill="none" />
                        </svg>
                    </button>
                    <button className="banner__btn banner__btn--secondary">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M8 1a7 7 0 110 14A7 7 0 018 1zm-1 10l-2-2m2 2l2-2m-2 2v-5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Banner;
