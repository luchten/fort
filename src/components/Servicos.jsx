import React from "react";
import '../styles/servicos.css';
import { Link } from "gatsby";

export default function Servicos() {
    return (
        <div className="container-lg my-4">
            <div className="row servicos-title mb-4">
                <div className="col text-center">
                    <h1>Serviços do <span className="red">Fort</span></h1>
                </div>
            </div>
            <div className="row servicos mx-2 text-center">
                <div className="col-6 col-md-3 mb-4 mb-md-0">
                    <Link to="#"><img src="/fort/images/ofertas.png" alt="" /></Link>
                    <h4>OFERTAS</h4>
                </div>
                <div className="col-6 col-md-3 relative mb-4 mb-md-0">
                    <div className="bar-both">
                        <Link to="#"><img src="/fort/images/nossas_lojas.png" alt="" /></Link>
                    </div>
                    <h4>NOSSAS LOJAS</h4>
                </div>
                <div className="col-6 col-md-3 relative">
                    <div className="bar-right">
                        <Link to="#"><img src="/fort/images/cadastro.png" alt="" /></Link>
                    </div>
                    <h4>CADASTRO</h4>
                </div>
                <div className="col-6 col-md-3">
                    <Link to="#"><img src="/fort/images/credit-card.png" alt="" /></Link>
                    <h4>PAGAMENTO</h4>                    
                </div>
            </div>
        </div>
    );
}
