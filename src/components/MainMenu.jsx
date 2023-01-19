import { Link } from "gatsby";
import React, { useState, useEffect } from "react";
import '../styles/mainMenu.css';


export default function MainMenu() {
    const [imageState, setImageState] = useState('');
    useEffect(() => {
        const scrollHandle = () => {
            if (window.scrollY > 0) {
                setImageState('small');
            } else {
                setImageState('');
            }
        }
        window.addEventListener('scroll', scrollHandle);
    }, []);
    return (
        <div className="main-menu">
            <Link to="#"><img className={imageState == 'small' ? 'img-small' : ''} src="/fort/images/fort-logo.png" alt="" /></Link>
            <ul className="menu-links">
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
    );
}
