
import './App.css';
import logo1 from '../src/Imagens GNRE/favicon.ico';
import logo2 from '../src/Imagens GNRE/logo-GNRE.png';
import Login from '../src/Imagens GNRE/Login.png';


function App() {
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
  return (
    <div>
      <div className='div-logo'>
        <header>
          <img className='logo1' src={logo1} />
          <img className='logo2' src={logo2} />
          <h1 className='titulo'>Procedimento - Enviar GNRE</h1>
        </header>
      </div>

      <div>
        <main className='principal'>
          <h3> ENTRAR NO SISTEMA E FAZER LOGIN</h3>
          <p>&bull; Entre no sistema ERP Client, faça o login com seu usuário e senha,
            clique em "ok" para ser direcionado ao ambiente do sistema! (conforme imagem a seguir):</p>
          <img className='img-proced-1' src={Login} />
        </main>
        <button className='button' onClick={scrollToTop}>Voltar ao Início</button>
      </div>
    </div>
  );
}

export default App;
