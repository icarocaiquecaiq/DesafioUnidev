import blogFetch from '../../axios/config'; // url do banco de dados

import React, { useEffect, useState } from 'react';
import axios from 'axios'

import TabelaEventos from './TabelaEventos';
import TitlePage from './TitlePage';


const EVENTOS = [
  {
    idEvento: 1,
    dataEvento:"13/07/2024",
    imagemUrlEvento:"https://via.placeholder.com/150",
    tituloEvento:"Tech Innovation",
    descricaoEvento: "Explore as últimas tendências em IA e IoT com especialistas do setor. Networking e workshops práticos"
  },

  {
    idEvento: 2,
    dataEvento:"12/08/2024",
    imagemUrlEvento:"https://via.placeholder.com/150",
    tituloEvento:"DevCon 2024",
    descricaoEvento: "Aprenda sobre novas linguagens de programação e frameworks. Palestras, painéis e hackathons esperam por você!"
  },

  {
    idEvento: 3,
    dataEvento:"01/02/2025",
    imagemUrlEvento:"https://via.placeholder.com/150",
    tituloEvento:"Cybersecurity Expo",
    descricaoEvento: "Descubra as melhores práticas em segurança cibernética. Palestras, demonstrações e estandes interativos para todos!"
  }
]



const Home = () => {


  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEventos = async () => {
      try {
        const response = await blogFetch.get("/eventos")
        setEventos(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEventos();
  }, []);

  if (loading) return <div className='text-white'>Loading...</div>;
  if (error) return <div className='text-white'>Error: {error}</div>;


  return (
    <>
      <TitlePage></TitlePage>
      <TabelaEventos evento={eventos}></TabelaEventos>
    </>
  )
}

export default Home