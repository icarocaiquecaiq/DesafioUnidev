import blogFetch from '../../axios/config'; // URL do banco de dados
import React, { useEffect, useState } from 'react';
import TabelaRemoveEvento from './TabelaRemoveEvento';

function RemoverEventos() {
    const [eventos, setEventos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    const handleRemove = async (id) => {
        try {
            await blogFetch.delete(`/eventos/${id}`);
            setEventos((prevEventos) => prevEventos.filter(evento => evento.id !== id));
        } catch (err) {
            console.error('Erro ao remover evento:', err);
        }
    };

    if (loading) return <div className='text-white'>Loading...</div>;
    if (error) return <div className='text-white'>Error: {error}</div>;

    return (
        <>
            <div className='container_descricao_site_home m-5 text-center fs-6 text-white'>
                <p className='descricao_site_home fs-4 text-capitalize'><b>Selecione o evento que deseja retirar</b></p>
            </div>
            <TabelaRemoveEvento evento={eventos} onRemove={handleRemove} />
        </>
    );
}

export default RemoverEventos;
