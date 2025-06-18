import Logo from "../../assets/logo.png";
import {FaShoppingCart} from 'react-icons/fa';
import "./Header.css"

function Header() {
  return (
    <>
      <section id="HeaderHome">
        <div id="HomePage">
          <img src={Logo} alt="" />
          <input type="text" placeholder="Pesquisar produto..." />
          <a href="">Cadastre-se</a>
          <button>Entrar</button>
          <FaShoppingCart color="#c92071" size={24} />
        </div>

        <div id="headerNav">
          <ul id="headerlist">
            <li>Home</li>
            <li>Produtos</li>
            <li>Categoria</li>
            <li>Meus Pedidos</li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Header;
