import { Link } from "react-router-dom";

import "./styles.css";

export function SignIn() {
    return (
        <div id="sign-in-page">
            <div id="logo">
                <img
                    src="src/assets/images/logo-2.png"
                    alt="logo"
                />
            </div>
            <h2 id="title">Entrar</h2>
            <div id="form">
                <label htmlFor="">Email</label>
                <input type="email" />

                <label htmlFor="">Senha</label>
                <input type="password" />

                <button
                    id="sign-in-button"
                    type="submit"
                >
                    Entrar
                </button>
                <p>
                    Não possui conta? <Link to="/signUp">Cadastrar</Link>
                </p>
            </div>
        </div>
    );
}
