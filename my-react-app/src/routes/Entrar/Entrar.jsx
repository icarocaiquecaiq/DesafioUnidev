import React from 'react'
import LogForm from './LogForm';
import BemVindo from './BemVindo';




function Entrar() {
    return (
            <main className="row justify-content-around ms-0 me-0">
                <BemVindo></BemVindo>
                <LogForm></LogForm>
            </main>
    )
}

export default Entrar
