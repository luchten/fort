import React from "react";
import { Link } from "gatsby";
import "bootstrap-icons/font/bootstrap-icons.css";
import '../styles/mainMenuMobile.css'
import { useState } from "react";

export default function MainMenuMobile() {
    const [menuState, setMenuState] = useState('close');
    const toggleMenu = (props) => {
        if (props == 'open') setMenuState('')
        else setMenuState('close');
    }
    return (
        <div>
            <div className="main-menu-mobile">
                <Link to="#"><img src="/fort/images/fort-logo.png" alt="" /></Link>
                <button className="open-button" onClick={() => toggleMenu('open')}><i className="bi bi-list"></i></button>
            </div>
            <div className={menuState == 'close' ? 'menu-mobile-modal' : 'menu-mobile-modal modal-active'}>
                <ul className={menuState == 'close' ? "menu-mobile-links" : 'menu-mobile-links links-active'}>
                    <button className="close-button" onClick={() => toggleMenu('')}><i class="bi bi-x-lg"></i></button>
                    <li><Link to="#">Instituicional</Link></li>
                    <li><Link to="#">Conheça</Link></li>
                    <li><Link to="#">Trabalhe Conosco</Link></li>
                    <li><Link to="#">Novidades</Link></li>
                    <li><Link to="#">Parceiros</Link></li>
                    <li><Link to="#">Cadastre-se</Link></li>
                    <li><Link to="#">Lojas</Link></li>
                    <li><Link to="#">Ofertas</Link></li>
                    <button className="delivery delivery-mobile">Delivery</button>
                </ul>
            </div>
        </div>
    )
}
