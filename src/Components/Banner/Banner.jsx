import Banne from "../../assets/banner1.png";
import banner from "../../assets/banner2.png"
import banner3 from "../../assets/banner1.png"
import { FaFire } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.css"

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <section id="bannerHome">
        <div id="bannerOfertas">
          <h3>Melhores ofertas personalizadas</h3>
          <h1>Queima de stoque Nike <FaFire size={30} color="#FF4500" /></h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam commodi blanditiis itaque labore voluptatibus deserunt.</p>
          <button>Ver Ofertas</button>
        </div>
        <div id="bannerImg">
          <Slider {...settings}>
            <div><img src={Banne} alt="Slide 1" style={{ width: "100%" }} /></div>
            <div><img src={banner} alt="Slide 2" style={{ width: "100%" }} /></div>
            <div><img src={banner3} alt="Slide 3" style={{ width: "100%" }} /></div>
          </Slider>
        </div>
      </section>
    </>
  )
}

export default Banner;