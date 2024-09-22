import React, { useEffect, useState } from "react";
import './VideoList.css';


const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const apiUrl = process.env.REACT_API_URL
    const fetchVideos = async () => {
      try {
        // const response = await fetch('http://localhost:3333/videos');
        const response = await fetch(`${apiUrl}/videos`);
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.error('Erro ao tentar buscar videos', error);
      }
    }
    fetchVideos();
  }, []);


  return (

    <div>
      <h2>Lista de Videos</h2>

      <ul>
        {videos.map((video) => (
          <li key={video.id}>
            <strong>Título:</strong> {video.title} <br />
            <strong>URL:</strong> {video.url} <br />
            <strong>Duração:</strong> {video.duration}
          </li>

        ))}

      </ul>
    </div>
  )
}

export default VideoList;