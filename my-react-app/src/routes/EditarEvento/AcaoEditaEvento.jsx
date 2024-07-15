import React from 'react';

function AcaoEditaEvento({ props, onEdit }) {
    const handleEdit = () => {
        onEdit(props);
    };

    return (

        <div className='container_acoes rounded rounded-2 row justify-content-around'>
            <div className='col-md-6 d-flex justify-content-around flex-wrap'>
                <button onClick={handleEdit} className=' btn_padrao btn_editar_home'>editar</button>
            </div>
        </div>


    );
}

export default AcaoEditaEvento;
