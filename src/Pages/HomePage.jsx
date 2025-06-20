import Banner from "../Components/Banner/Banner";
import ColecoesDestaque from "../Components/colecoesDestaque/ColecoesDestaque";
import Footer from "../Components/Footer";
import Header from "../Components/HeaderHome/Header";

function HomePage() {
  return (
    <>
      <Header />
      <Banner />
      <ColecoesDestaque />
      <Footer />
    </>
  );
}

export default HomePage;
