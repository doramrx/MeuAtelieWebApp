import { Link } from "react-router-dom";

import "./styles.css";

export function SignUp() {
    return (
        <div id="sign-up-page">
            <div id="logo">
                <img
                    src="src/assets/images/logo-2.png"
                    alt="logo"
                />
            </div>
            <h2 id="title">Cadastrar</h2>
            <div id="form">
                <label htmlFor="">Nome</label>
                <input type="text" />

                <label htmlFor="">Email</label>
                <input type="email" />

                <label htmlFor="">Senha</label>
                <input type="password" />

                <button
                    id="sign-up-button"
                    type="submit"
                >
                    Cadastrar
                </button>
                <p>
                    Já possui conta? <Link to="/signIn">Entrar</Link>
                </p>
            </div>
        </div>
    );
}
