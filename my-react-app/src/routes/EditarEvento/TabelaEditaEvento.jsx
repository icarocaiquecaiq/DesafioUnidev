import React from 'react';
import Eventos from '../Home/Eventos';
import AcaoEditaEvento from './AcaoEditaEvento';

function TabelaEditaEvento({ evento, onEdit }) {
    return (
        <div className='row justify-content-center'>
            <div className='col-11 col-md-10 lg-8'>
                {evento.map((element) => (
                    <div key={element.id} className='mb-5 d-flex flex-column container_acoes_eventos p-3 rounded rounded-3'>
                        <Eventos props={element} />
                        <AcaoEditaEvento props={element} onEdit={onEdit} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TabelaEditaEvento;
