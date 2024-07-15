import React, { useState } from 'react';

const AcaoRemoveEvento = ({ props, onRemove }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleRemove = () => {
        onRemove(props.id);
        setModalVisible(false); // Fecha o modal após a remoção
    };

    return (
        <div className='container_acoes rounded rounded-2 row justify-content-around'>
            <div className='col-md-6 d-flex justify-content-around flex-wrap'>
                <button type="button" className="btn_padrao btn_remover_home" onClick={() => setModalVisible(true)}>
                    Remover
                </button>

                {modalVisible && (
                    <div className="modal show d-block" tabIndex={-1} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                        <div className="modal-dialog">
                            <div className="modal-content text-dark">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5 text-capitalize">Remover Evento</h1>
                                    <button type="button" className="btn-close" onClick={() => setModalVisible(false)} aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    Deseja realmente remover tal evento? Caso contrário, clique em "Cancelar".
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={() => setModalVisible(false)}>Cancelar</button>
                                    <button onClick={handleRemove} type="button" className="btn btn-danger">Remover</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AcaoRemoveEvento;
