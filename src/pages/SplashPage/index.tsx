import { Link } from "react-router-dom";

import "./styles.css";

export function SplashPage() {
    return (
        <div id="splash-page">
            <div id="logo">
                <img
                    src="src/assets/images/logo.png"
                    alt="logo"
                />
            </div>
            <div id="buttons">
                <Link
                    to="signUp"
                    id="sign-up-button"
                >
                    Cadastrar
                </Link>
                <Link
                    to="signIn"
                    id="sign-in-button"
                >
                    Entrar
                </Link>
            </div>
        </div>
    );
}
