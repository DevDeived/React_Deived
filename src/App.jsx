import CriarContaPage from "./Pages/CriarContaPage"
import DetalhesProdutosPage from "./Pages/DetalhesProdutos"
import HomePage from "./Pages/HomePage"
import LoginPage from "./Pages/LoginPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/produto" element={<DetalhesProdutosPage />} />
        <Route path="/conta" element={<CriarContaPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
