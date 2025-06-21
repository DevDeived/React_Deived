import Banner from "../Components/Banner/Banner";
import ColecoesDestaque from "../Components/colecoesDestaque/ColecoesDestaque";
import Footer from "../Components/Footer";
import Header from "../Components/HeaderHome/Header";
import OfertaEspecial from "../Components/OfertaEspecial/OfertaEspecial";
import ProdutosEmAltas from "../Components/ProdutosEmAlta/ProdutosEmAltas";

function HomePage() {
  return (
    <>
      <Header />
      <Banner />
      <ColecoesDestaque />
      <ProdutosEmAltas/>
      <OfertaEspecial/>
      <Footer />
    </>
  );
}

export default HomePage;
