import React from "react";
import { useState } from "react";
import './Formulary.css';
import Header from "../Header/Header";
import Button from "../Button/Button";
import VideoList from "../VideoList/VideoList"

const Formulary = () => {

  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [duration, setDuration] = useState('');

  const submitVideo = async (e) => {
    e.preventDefault();

    const video = { title, url, duration };

    try {
      const response = await fetch('http://localhost:3333/videos',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(video),
        })

      if (response.ok) {
        const newVideo = await response.json();
        console.log('Vídeo adicionado:', newVideo);
        setTitle('');
        setUrl('');
        setDuration('');

      } else {
        console.error('Erro ao adicionar vídeo.');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);

    }
  }

    return (

      <div className="content">
        <form id="addVideo" className="formularyVideo" method="post" onSubmit={submitVideo}>

          <Header />

          <fieldset className="area">
            <legend>Dados do video</legend>
            <div className="field">
              <label htmlFor="fieldTitle">Título: </label>
              <input className="fieldTitle" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="field">
              <label htmlFor="fieldVideoUrl" aria-placeholder="Insira a url do seu video">Insira a url do seu video: </label>
              <input type="text" id="fieldVideoUrl" className="fieldVideoUrl" placeholder="Compatível com youtub, vimeo e dailymontion" pattern="https?://.+" value={url} onChange={(e) => setUrl(e.target.value)}></input>
            </div>
            <div className="field">
              <label htmlFor="fieldDuration">Duração: </label>
              <input type="number" className="fieldDuration" value={duration} onChange={(e) => setDuration(e.target.value)}></input>
            </div>
          </fieldset>
          <Button />
        </form>

        <VideoList />

      </div>
    )

  };


  export default Formulary;





