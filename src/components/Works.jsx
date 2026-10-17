import { works } from '../data'

export default function Works() {
  return (
    <section className="works" id="works">
      <header className="section-head">
        <div>
          <p className="section-kicker kicker-red">
            01 / PORTFOLIO <span>///</span>
          </p>
          <h2>精选作品 (Selected Works)</h2>
        </div>
        <a className="section-link" href="#works">
          查看全部作品 <span aria-hidden="true">→</span>
        </a>
      </header>

      <div className="works-grid">
        {works.map((work) => (
          <article key={work.title} className={`work-card tilt-${work.tilt}`}>
            <div className="work-photo">
              <img src={work.image} alt={work.alt} />
              <span className={`photo-tag tilt-${work.tagTilt}`}>{work.tag}</span>
            </div>
            <div className="work-body">
              <div>
                <div className="work-meta">
                  <span>{work.year}</span>
                  <span className={`badge-${work.badgeTone}`}>{work.badge}</span>
                </div>
                <h3>{work.title}</h3>
                <p>{work.text}</p>
              </div>
              <div className="work-action">
                <span>{work.action}</span>
                <span className="material-symbols-outlined">arrow_outward</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
