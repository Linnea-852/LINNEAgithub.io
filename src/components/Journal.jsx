import { journal } from '../data'

export default function Journal() {
  return (
    <section className="journal" id="life-journal">
      <header className="section-head">
        <div>
          <p className="section-kicker kicker-blue">
            02 / LIFE JOURNAL <span>///</span>
          </p>
          <h2 className="tilt-right-soft">生活记录 (Life & Journal)</h2>
        </div>
        <p className="section-note">生活与代码一样，都值得用心记录 📸</p>
      </header>

      <div className="polaroid-grid">
        {journal.map((item) => (
          <article key={item.title} className={`polaroid tilt-${item.tilt}`}>
            <span className={`tape polaroid-tape tape-${item.tape}`} aria-hidden="true" />
            <div className="polaroid-photo">
              <img src={item.image} alt={item.alt} />
            </div>
            <div className="polaroid-caption">
              <h3>{item.title}</h3>
              <p>{item.caption}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
