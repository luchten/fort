import * as React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Conheca from "../components/Conheca";
import FortCarousel from "../components/FortCarousel";
import MainMenu from "../components/MainMenu";
import MainMenuMobile from "../components/MainMenuMobile";
import Servicos from "../components/Servicos";
import '../styles/global.css'

export default function Home() {
  return (
    <div>
      <div className="main-menu-fixed">
        <MainMenu></MainMenu>
        <MainMenuMobile></MainMenuMobile>        
      </div>
      <FortCarousel></FortCarousel>
      <Servicos></Servicos>
      <Conheca></Conheca>      
    </div>
  );
}
