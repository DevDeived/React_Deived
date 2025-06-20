import Banner from "../Components/Banner/Banner";
import ColecoesDestaque from "../Components/colecoesDestaque/ColecoesDestaque";
import Footer from "../Components/Footer";
import Header from "../Components/HeaderHome/Header";
import ProdutosEmAltas from "../Components/ProdutosEmAlta/ProdutosEmAltas";

function HomePage() {
  return (
    <>
      <Header />
      <Banner />
      <ColecoesDestaque />
      <ProdutosEmAltas/>
      <Footer />
    </>
  );
}

export default HomePage;
