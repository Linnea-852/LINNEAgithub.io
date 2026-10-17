export default function Hero() {
  function scrollToContact(event) {
    event.preventDefault()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="home">
      <div className="tape welcome-tape">★ WELCOME TO MY DESK ★</div>

      <div className="hero-title-wrap">
        <span className="hero-highlight" aria-hidden="true" />
        <h1>HI HERE IS LINNEA</h1>
      </div>

      <p className="hero-subtitle">Designing ideas. Building possibilities.</p>

      <div className="hero-cta">
        <div className="say-hi" aria-hidden="true">
          <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10,15 C40,5 75,20 68,55" strokeDasharray="4 4" />
            <path d="M55,50 L68,56 L72,42" />
          </svg>
          <span>Say Hi!</span>
        </div>

        <a className="contact-button" href="#contact" onClick={scrollToContact}>
          <span className="material-symbols-outlined">mail</span>
          <span className="contact-button-label">联系我</span>
          <span className="contact-button-en">(Contact Me)</span>
        </a>

        <svg className="asterisk" viewBox="0 0 40 40" aria-hidden="true">
          <line x1="20" x2="20" y1="5" y2="35" />
          <line x1="5" x2="35" y1="20" y2="20" />
          <line x1="9" x2="31" y1="9" y2="31" />
          <line x1="9" x2="31" y1="31" y2="9" />
        </svg>
      </div>
    </section>
  )
}
