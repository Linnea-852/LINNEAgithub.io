import { skills } from '../data'

export default function AboutNote() {
  return (
    <section className="about" id="about">
      <span className="thumbtack" aria-hidden="true" />
      <article className="sticky-note">
        <header className="note-head">
          <div className="note-title">
            <h2>📌 关于我</h2>
            <span className="name-chip">Linnea Xiao</span>
          </div>
          <span className="memo-no">Memo #01</span>
        </header>

        <p className="about-lead">
          "Designer & Creative Coder exploring the intersection of authentic craft and interactive experiences."
        </p>
        <p className="about-body">
          喜欢拿纸笔随手乱涂，也热衷于用代码把充满灵气的纸质手感搬上屏幕。坚信不完美的线条才最有呼吸感。
        </p>

        <ul className="skill-list">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>

        <footer className="note-sign">
          <span>📍 Shanghai, China</span>
          <span className="signature">Linnea.X ✎</span>
        </footer>
      </article>
    </section>
  )
}
