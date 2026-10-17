import AboutNote from './components/AboutNote'
import Contact from './components/Contact'
import DeskStatus from './components/DeskStatus'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Journal from './components/Journal'
import SwarmCursor from './components/Swarm Cursor.jsx'
import Works from './components/Works'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <div className="page">
          <div style={{ position: 'relative', width: '100%', height: '600px' }}>
            <SwarmCursor
              count={800}
              size={2.6}
              spread={90}
              swirl={0.6}
              clickEffect="burst"
              color="#2d2d2d"
            >
              <Hero />
            </SwarmCursor>
          </div>
          <div className="bento">
            <AboutNote />
            <DeskStatus />
          </div>
          <Works />
          <Journal />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  )
}
