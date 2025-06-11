import CriarContaPage from "./Pages/CriarContaPage"
import DetalhesProdutosPage from "./Pages/DetalhesProdutos"
import HomePage from "./Pages/HomePage"
import LoginPage from "./Pages/LoginPage"


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
