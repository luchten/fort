import { Link } from "gatsby";
import React from "react";
import '../styles/mainMenu.css';


export default function MainMenu() {
    return (
        <div className="container-lg">
            <div className="row">
                <div className="col">
                    <div className="main-menu">
                        <Link to="#"><img src="/images/fort-logo.png" alt="" /></Link>
                        <ul className="main-menu-links">
                            <li><Link to="#">Instituicional</Link></li>
                            <li><Link to="#">Conheça</Link></li>
                            <li><Link to="#">Trabalhe Conosco</Link></li>
                            <li><Link to="#">Novidades</Link></li>
                            <li><Link to="#">Parceiros</Link></li>
                            <li><Link to="#">Cadastre-se</Link></li>
                            <li><Link to="#">Lojas</Link></li>
                            <li><Link to="#">Ofertas</Link></li>
                            <button className="delivery">Delivery</button>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
