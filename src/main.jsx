import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'bulma/css/bulma.min.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* basename acompanha o "base" do vite.config.js (/bom-jogador/ no
        build de produção, / em dev) — sem isso, nenhuma rota batia quando
        hospedado no GitHub Pages, já que o site fica num subcaminho. */}
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
