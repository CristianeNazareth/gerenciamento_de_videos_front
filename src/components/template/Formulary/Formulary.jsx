import React from "react";
import './Formulary.css';
import Header from "../Header/Header";
import Button from "../Button/Button";

const Formulary = () => {
  return (

    <div className="content">
      <form id="addVideo" className="formularyVideo" method="post">

        <Header />
        <div>
          <label htmlFor="fieldName">Nome: </label>
          <input className="fieldName" type="text" />
        </div>
        <div>
          <label htmlFor="fieldVideoUrl" aria-placeholder="Insira a url do seu video">Insira a url do seu video: </label>
          <input type="text" id="fieldVideoUrl" className="fieldVideoUrl" placeholder="Compatível com youtub, vimeo e dailymention" pattern="https?://.+"></input>
        </div>
        <div>
          <label htmlFor="fieldDuration">Duração: </label>
          <input type="number" />
        </div>
        <Button />
      </form>

    </div>
  )
}


export default Formulary;





