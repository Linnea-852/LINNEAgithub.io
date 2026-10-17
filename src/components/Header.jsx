import { useEffect, useState } from 'react'
import { navLinks } from '../data'

export default function Header() {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean)

    function updateActive() {
      const atBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8
      if (atBottom) {
        setActive(sections[sections.length - 1].id)
        return
      }

      const marker = window.scrollY + 120
      let current = sections[0].id
      sections.forEach((section) => {
        if (section.offsetTop <= marker) current = section.id
      })
      setActive(current)
    }

    updateActive()
    window.addEventListener('scroll', updateActive, { passive: true })
    return () => window.removeEventListener('scroll', updateActive)
  }, [])

  function goTo(id) {
    setActive(id)
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="site-header">
      <div className="header-bar">
        <a className="brand" href="#home" onClick={() => goTo('home')}>
          <span className="brand-mark" aria-hidden="true">
            🍓
          </span>
          <span className="brand-text">
            <span className="brand-name">Linnea</span>
            <span className="brand-tag">sketchbook & thoughts</span>
          </span>
        </a>

        <div className="header-actions">
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="material-symbols-outlined">{open ? 'close' : 'menu'}</span>
          </button>

          <nav id="site-nav" className={open ? 'site-nav is-open' : 'site-nav'}>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={active === link.id ? 'nav-link is-active' : 'nav-link'}
                aria-current={active === link.id ? 'page' : undefined}
                onClick={(event) => {
                  event.preventDefault()
                  goTo(link.id)
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <span className="avatar" aria-hidden="true">
            <span className="material-symbols-outlined">person</span>
          </span>
        </div>
      </div>
    </header>
  )
}
