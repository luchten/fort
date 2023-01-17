import * as React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FortCarousel from "../components/FortCarousel";
import MainMenu from "../components/MainMenu";
import Servicos from "../components/Servicos";
import '../styles/global.css'

export default function Home() {
  return (
    <div>
      <MainMenu></MainMenu>
      <FortCarousel></FortCarousel>
      <Servicos></Servicos>
    </div>
  );
}
