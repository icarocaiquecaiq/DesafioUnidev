import React, {useEffect, useState} from "react"

const Eventos = (props) => {
    const [dataUnf, setDataUnf] = useState(`${props.props.dataEvento}`) // variavel que copia a data e formata para string

    // formate todos as datas dos eventos no primeiro reloading
    useEffect(()=>{
        formatarDataEvento(props.props.dataEvento)
    },[])

    // pega a string data e divide em 3: Dia, mes, ano. e gera uma nova remanejada
    function formatarDataEvento(data){
        setDataUnf(d => {
                            const splitedData = data.split("-")
                            const ano = splitedData[0]
                            const mes = splitedData[1]
                            const dia = splitedData[2]
                            return d = `${dia}-${mes}-${ano}`
                        })
    }

    return (
        <div className='container_eventos_info row justify-content-center text-white'>
            <div className='col-10 col-md-11 container_cada_evento'>
                <div className='row'>
                    <div className='container_img_cada_evento mb-3 rounded rounded-2 col-sm-5 col-xl-4 '>
                        <img src="https://via.placeholder.com/150" className='img-fluidrounded mx-auto d-block' alt="Imagem de fundo do evento, desconsíderavel." />
                    </div>

                    <div className='container_eventos_paragrafos col-sm-7'>
                        <div className='container_titulo_evento col-md-5'>
                            <h3 className='fs-5'>{props.props.tituloEvento}</h3>
                        </div>

                        <div className='container_descricao_evento'>
                            <p>{props.props.descricaoEvento}</p>
                        </div>

                        <div className='container_data_evento'>
                            <p>{dataUnf}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Eventos