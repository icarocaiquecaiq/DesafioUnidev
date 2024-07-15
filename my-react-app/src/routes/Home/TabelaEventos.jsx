import React from "react";
import Eventos from "./Eventos";
import AcaoEventos from "./AcaoEventos";

const TabelaEventos = (evento) => {
    const cadaEvento = []


    evento.evento.forEach(element => {
        if (element) {
            cadaEvento.push(
                <div key={element.id} className='mb-5 d-flex flex-column container_acoes_eventos p-3 rounded rounded-3'>
                    <Eventos props={element}></Eventos>
                    <AcaoEventos props={element.id}></AcaoEventos>
                </div>
            )
            cadaEvento.push(

            )
        }
    })

    return (
        <div className='row justify-content-center'>
            <div className='col-11 col-md-10 lg-8 '>
                {cadaEvento}
            </div>
        </div>
    )
}

export default TabelaEventos



