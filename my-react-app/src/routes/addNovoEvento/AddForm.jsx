import blogFetch from '../../axios/config'; // URL do banco de dados
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddForm() {
    const [nomeEvento, setNomeEvento] = useState("");
    const [descEvento, setDeskEvento] = useState("");
    const [dataSelecionada, setdataSelecionada] = useState("");
    const navigate = useNavigate();

    const lidarSubmit = async (e) => {
        e.preventDefault();

        const dadosUsuario = {
            id: `${Date.now()}`, // Gera um ID único
            tituloEvento: nomeEvento,
            descricaoEvento: descEvento,
            dataEvento: dataSelecionada,
        };

        try {
            await blogFetch.post('/eventos', dadosUsuario);
            navigate('/', { state: { dadosUsuario } });
        } catch (error) {
            console.error('Erro ao adicionar evento:', error);
        }
    };

    const lidarMudancaNomeEvento = (e) => {
        setNomeEvento(e.target.value);
    };

    const lidarMudancaDescEvento = (e) => {
        setDeskEvento(e.target.value);
    };

    const lidarMudancaData = (e) => {
        setdataSelecionada(e.target.value);
    };

    // Definir datas mínimas e máximas para o input data
    const hoje = new Date();
    const minData = hoje.toISOString().split("T")[0];
    const maxData = new Date(hoje);
    maxData.setFullYear(hoje.getFullYear() + 1);
    const maxDateString = maxData.toISOString().split('T')[0];

    return (
        <div className="col-sm-12 col-md-5 col-lg-4 form_login bg-dark rounded rounded-5 mt-5">
            <div className="col-sm-12 col-md-12 p-4 pt-4">
                <section className="login-session row gap-3 justify-content-center text-light">
                    <h2 className="text-center text-capitalize">adicionar evento</h2>
                    <form onSubmit={lidarSubmit} className="login_form">
                        <div className="mb-4">
                            <label htmlFor="nome_evento" className="form-label m-0 text-capitalize">nome do evento</label>
                            <input
                                type="text"
                                className="form-control border-light bg-transparent text-light ps-1 pb-0"
                                id="nome_evento"
                                maxLength={75}
                                required
                                placeholder="Nome do Evento"
                                onChange={lidarMudancaNomeEvento}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="descricao_evento" className="form-label m-0 text-capitalize">descrição do evento</label>
                            <textarea
                                id="descricao_evento"
                                className="form-control border-light bg-transparent text-light ps-1 pb-0"
                                required
                                rows={4}
                                onChange={lidarMudancaDescEvento}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="data_evento" className="form-label m-0 text-capitalize">data do evento</label>
                            <input
                                type="date"
                                className="form-control border-light bg-transparent text-light ps-1 pb-0"
                                id="data_evento"
                                required
                                value={dataSelecionada}
                                min={minData}
                                max={maxDateString}
                                onChange={lidarMudancaData}
                            />
                        </div>
                        <div className="button-container-form">
                            <button type="submit" className="btn btn-success">criar</button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
}

export default AddForm;
