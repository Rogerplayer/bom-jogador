import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'

function App() {
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <span className="navbar-item">
              <strong>🎮 Bom Jogador</strong>
            </span>
          </div>
        </div>
      </nav>
      <main className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </main>
    </>
  )
}

export default App
