import React from "react";
import '../styles/servicos.css';

export default function Servicos() {
    return (
        <div className="container-lg my-4">
            <div className="row mb-4">
                <div className="col text-center">
                    <h1>Serviços do <span className="red">Fort</span></h1>
                </div>
            </div>
            <div className="row servicos text-center">
                <div className="col-3">
                    <img src="/images/ofertas.png" alt="" />
                    <h4>OFERTAS</h4>
                </div>
                <div className="col-3">
                    <img src="/images/nossas_lojas.png" alt="" />
                    <h4>NOSSAS LOJAS</h4>
                </div>
                <div className="col-3">
                    <img src="/images/cadastro.png" alt="" />
                    <h4>CADASTRO</h4>
                </div>
                <div className="col-3">
                    <img src="/images/credit-card.png" alt="" />
                    <h4>PAGAMENTO</h4>
                </div>
            </div>
        </div>
    );
}
