import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import blogFetch from '../../axios/config';

function EditarEvento() {
    const navigate = useNavigate();
    const location = useLocation();
    const evento = location.state.evento;

    const [nomeEvento, setNomeEvento] = useState(evento.tituloEvento);
    const [descEvento, setDescEvento] = useState(evento.descricaoEvento);
    const [dataEvento, setDataEvento] = useState(evento.dataEvento);
    const [error, setError] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const lidarSubmit = async (e) => {
        e.preventDefault();

        const dadosAtualizados = {
            ...evento,
            tituloEvento: nomeEvento,
            descricaoEvento: descEvento,
            dataEvento: dataEvento,
        };

        try {
            await blogFetch.put(`/eventos/${evento.id}`, dadosAtualizados);
            navigate('/'); // Redireciona após a edição
        } catch (err) {
            setError('Erro ao editar evento: ' + err.message);
        }
    };

    const voltarPaginaHome = () => {
        navigate('/'); // Redireciona para a página inicial
    };

    return (
        <div className="col-sm-12 col-md-5 col-lg-4 form_login bg-dark rounded rounded-5 mt-5">
            <div className="col-sm-12 col-md-12 p-4 pt-4">
                <section className="login-session row gap-3 justify-content-center text-light">
                    <h2 className="text-center text-capitalize">Editar Evento</h2>
                    {error && <div className="text-danger">{error}</div>}
                    <form onSubmit={lidarSubmit} className="login_form">
                        <div className="mb-4">
                            <label htmlFor="nome_evento" className="form-label m-0 text-capitalize">Nome do Evento</label>
                            <input
                                type="text"
                                className="form-control border-light bg-transparent text-light ps-1 pb-0"
                                id="nome_evento"
                                maxLength={75}
                                required
                                placeholder="Nome do Evento"
                                value={nomeEvento}
                                onChange={(e) => setNomeEvento(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="descricao_evento" className="form-label m-0 text-capitalize">Descrição do Evento</label>
                            <textarea
                                id="descricao_evento"
                                className="form-control border-light bg-transparent text-light ps-1 pb-0"
                                required
                                rows={4}
                                value={descEvento}
                                onChange={(e) => setDescEvento(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="data_evento" className="form-label m-0 text-capitalize">Data do Evento</label>
                            <input
                                type="date"
                                className="form-control border-light bg-transparent text-light ps-1 pb-0"
                                id="data_evento"
                                required
                                value={dataEvento}
                                onChange={(e) => setDataEvento(e.target.value)}
                            />
                        </div>
                        <div className="button-container-form d-flex gap-3 flex-wrap">
                            <button type="button" onClick={voltarPaginaHome} className="btn_padrao btn_remover_home">Cancelar</button>
                            <button type='button' onClick={() => setModalVisible(true)} className="btn btn-primary">
                                Editar
                            </button>
                        </div>
                    </form>

                    {modalVisible && (
                        <div className="modal show d-block" tabIndex={-1} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                            <div className="modal-dialog text-dark">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5">Deseja confirmar edição?</h1>
                                        <button type="button" className="btn-close" onClick={() => setModalVisible(false)} aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        Confirmar a edição de tal evento? Caso contrário, clique em "Cancelar".
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" onClick={() => setModalVisible(false)}>Cancelar</button>
                                        <button onClick={lidarSubmit} type="button" className="btn btn-primary">Salvar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
}

export default EditarEvento;
