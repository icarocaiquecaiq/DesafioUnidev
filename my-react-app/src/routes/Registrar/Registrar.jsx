import React from 'react'
import RegForm from './RegForm';
import BemVindo from '../Entrar/BemVindo';




function Registrar() {
    return (
            <main className="row justify-content-around ms-0 me-0">
                <BemVindo></BemVindo>
                <RegForm></RegForm>
            </main>
    )
}

export default Registrar
