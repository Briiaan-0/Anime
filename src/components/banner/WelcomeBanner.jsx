import React from 'react';
import './WelcomeBanner.css';

function WelcomeBanner({ title, subtitle, ctaText, onCtaClick }) {
    return (
        <div className="neon-border">
            <section className="welcome-banner">
                <h1 className="welcome-banner__title">{title}</h1>
                <p className="welcome-banner__subtitle">{subtitle}</p>
                {ctaText && onCtaClick && (
                    <button className="welcome-banner__button" onClick={onCtaClick}>
                        {ctaText}
                    </button>
                )}
            </section>
        </div>
    );
}

export default WelcomeBanner;
