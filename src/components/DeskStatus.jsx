import { deskNotes } from '../data'

export default function DeskStatus() {
  return (
    <section className="desk" aria-label="桌台速记">
      <div className="tape status-tape">✦ CURRENT STATUS</div>
      <div className="desk-heading">
        <span className="material-symbols-outlined">draw</span>
        <h2>桌台速记 (Work In Progress)</h2>
      </div>
      <div className="desk-grid">
        {deskNotes.map((note) => (
          <article key={note.title} className="desk-card">
            <div className="desk-meta">
              <span className={note.tone === 'red' ? 'tone-red' : 'tone-blue'}>{note.label}</span>
              <span>{note.meta}</span>
            </div>
            <h3>{note.title}</h3>
            <p>{note.text}</p>
          </article>
        ))}
      </div>
      <p className="desk-quote">
        <span aria-hidden="true">💡</span>
        <span>"Make it wobbly, make it human, make it alive."</span>
      </p>
    </section>
  )
}
