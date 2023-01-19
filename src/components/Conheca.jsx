import React from "react";
import '../styles/conheca.css';

export default function Conheca() {
    return (
        <div className="container-lg">
            <div className="row conheca-title">
                <div className="col text-center">
                    <h1>Conheça o que o Fort <span className="red">Faz pra você</span></h1>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-6">
                    <img src="/fort/images/acougue.png" alt="" />
                </div>
                <div className="col-6">
                    <h1 className="red">Açougue Carne Fresca</h1>
                    <p>Os melhores cortes, sempre fresquinhos. Venha conhecer o melhor do nosso Açougue. Tem dicas, curiosidades, receitas e muito mais.</p>
                    <button>VISITAR AÇOUGUE</button>
                </div>
            </div>
        </div>
    );
}
