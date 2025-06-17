import Redirection from "../../assets/Redirection.png";
import tenis1 from "../../assets/tenis-1.png";
import tenis2 from "../../assets/tenis-2.png";
import "./LoginBody.css";
function LoginBody() {
  return (
    <>
      <section id="loginBody">
        <div id="loginForm">
          <div id="loginTitles">
            <h1>Acesse sua conta</h1>
            <p>
              Novo cliente ? Então Registre-se <a href="">Aqui</a>
            </p>
          </div>
          <div id="inputLognForm">
            <label htmlFor="">Login *</label>
          <input type="email" placeholder="Insira seu login ou email" />

          <label htmlFor="">Senha *</label>
          <input type="password" placeholder="Insira sua senha" />

          <a href="">Esqueci minha senha</a>

          <button>Acessar conta</button>

          <div id="formRedirection">
            <p>Ou faça login com </p>
            <img src={Redirection} alt="" />
          </div>
          </div>
        </div>
        <div id="loginBodyTenis">
          <img src={tenis1} alt="" />
          <img src={tenis2} alt="" />
        </div>
      </section>
    </>
  );
}

export default LoginBody;
