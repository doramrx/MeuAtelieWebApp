import './styles.css';

export function SplashPage(){
  return (
    <div id="splash-page">
      <div id="logo">
        <img src="src/assets/images/logo.png" alt="logo"/>
      </div>
      <div id="buttons">
        <a href="#" id="sign-up-button">Cadastrar</a>
        <a href="#" id="sign-in-button">Entrar</a>
      </div>
    </div>
  );
}