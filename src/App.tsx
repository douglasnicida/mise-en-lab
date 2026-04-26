import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './core/Layout.jsx'
import Contato from './pages/Contato.jsx'
import Home from './pages/Home.jsx'
import Membros from './pages/Membros.jsx'
import Sobre from './pages/Sobre.jsx'
import Trabalhos from './pages/Trabalhos.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="grupos-alimentos" element={<Sobre />} />
          <Route path="trabalhos" element={<Trabalhos />} />
          <Route path="membros" element={<Membros />} />
          <Route path="ficha-tecnica" element={<Contato />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
