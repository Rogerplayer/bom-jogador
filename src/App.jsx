import { useState } from 'react'
import { Routes, Route, NavLink, Link } from 'react-router-dom'
import Home from './views/Home/Home'
import GameDetails from './views/GameDetails/GameDetails'
import About from './views/About/About'
import Terms from './views/Terms/Terms'
import Manual from './views/Manual/Manual'
import ComingSoon from './views/ComingSoon/ComingSoon'
import Footer from './components/Footer/Footer'
import RainbowText from './components/RainbowText/RainbowText'
import styles from './App.module.css'

const NAV_ITEMS = [
  { to: '/', label: 'Populares', end: true },
  { to: '/buscar', label: 'Buscar' },
  { to: '/favoritos', label: 'Favoritos' },
  { to: '/jogando', label: 'Estou Jogando', highlight: true },
  { to: '/sobre', label: 'Sobre' },
  { to: '/manual', label: 'Manual' },
  { to: '/termos', label: 'Termos de Uso' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav
        className={`navbar ${styles.navbar}`}
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className={`navbar-item ${styles.brand}`} onClick={() => setMenuOpen(false)}>
              <span className={styles.icon} aria-hidden="true">
                🎮
              </span>
              <span className={styles.brandText}>
                <span>Bom Jogador</span>
                <span className={styles.tagline}>seu app de games favoritos</span>
              </span>
            </Link>
            <button
              className={`navbar-burger ${styles.burger} ${menuOpen ? 'is-active' : ''}`}
              aria-label="menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </button>
          </div>
          <div className={`navbar-menu ${menuOpen ? 'is-active' : ''} ${styles.menu}`}>
            <div className="navbar-start">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    [
                      'navbar-item',
                      styles.navItem,
                      isActive && styles.navItemActive,
                      item.highlight && styles.navItemHighlight,
                    ]
                      .filter(Boolean)
                      .join(' ')
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {item.highlight && <span className={styles.playDot} aria-hidden="true" />}
                  {item.highlight ? <RainbowText text={item.label} /> : item.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <main className={`section ${styles.main}`}>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games/:id" element={<GameDetails />} />
            <Route
              path="/buscar"
              element={
                <ComingSoon
                  title="Buscar"
                  description="Busca de jogos por nome, com paginação ou scroll infinito. Ainda não implementado."
                />
              }
            />
            <Route
              path="/favoritos"
              element={
                <ComingSoon
                  title="Favoritos"
                  description="Seus jogos favoritos, salvos localmente via localForage. Ainda não implementado."
                />
              }
            />
            <Route
              path="/jogando"
              element={
                <ComingSoon
                  title="Estou Jogando"
                  description="Os jogos que você está jogando agora, salvos localmente via localForage. Ainda não implementado."
                />
              }
            />
            <Route path="/sobre" element={<About />} />
            <Route path="/termos" element={<Terms />} />
            <Route path="/manual" element={<Manual />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
