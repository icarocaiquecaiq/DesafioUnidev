import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import blogFetch from '../../axios/config';
import TabelaEditaEvento from './TabelaEditaEvento';

function EditarEvento() {
    const [eventos, setEventos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEventos = async () => {
            try {
                const response = await blogFetch.get("/eventos");
                setEventos(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchEventos();
    }, []);

    const lidarEdicao = (evento) => {
        navigate('/selectedEvento', { state: { evento } }); // Navega para a página de edição
    };

    if (loading) return <div className='text-white'>Loading...</div>;
    if (error) return <div className='text-white'>Error: {error}</div>;

    return (
        <>
            <div className='container_descricao_site_home m-5 text-center fs-6 text-white'>
                <p className='descricao_site_home fs-4 text-capitalize'><b>Selecione o evento que deseja editar</b></p>
            </div>
            <TabelaEditaEvento evento={eventos} onEdit={lidarEdicao} />
        </>
    );
}

export default EditarEvento;
