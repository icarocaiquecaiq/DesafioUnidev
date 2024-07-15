import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';



function LogForm() {
    const [nome, setNome] = useState("")
    const [senha, setSenha] = useState("")
    const navigate = useNavigate()

    const dadosUsuario = {
        nome: nome,
        senha: senha
    }

    function lidarSubmit (e){
        e.preventDefault()
        console.log(dadosUsuario)
        // logica de enviar para o servidor
        navigate('/', {state: {dadosUsuario} })
    }

    function lidarMudancaNome (e){
        setNome(n => n = e.target.value)
    }

    function lidarMudancaSenha(e){
        setSenha(s => s = e.target.value)
    }


    return(
        <div className="col-sm-12 col-md-5 col-lg-4 form_login bg-dark rounded rounded-5">
            <div className=" col-sm-12 col-md-12  p-4 pt-4  ">
                <section className="login-session row gap-3 justify-content-center text-light">
                    <h2 className="text-center">Login</h2>
                    <form onSubmit={lidarSubmit} className="login_form ">
                        <div className="mb-4">
                            <label htmlFor="nome" className="form-label m-0">Nome</label>
                            <input 
                                type="text" 
                                className="form-control border-light bg-transparent text-light ps-1 pb-0"
                                id="nome"
                                maxLength={50}  
                                required 
                                placeholder="Seu Nome" 
                                name="nome"
                                onChange={lidarMudancaNome} 
                            />        
                        </div>
                        <div className="mb-4">
                            <label htmlFor="senha" className="senha form-label m-0">Senha</label>
                            <input 
                                type="password"
                                id="senha"
                                className="password form-control border-light bg-transparent text-light ps-1 pb-0"
                                required 
                                name="senha"
                                onChange={lidarMudancaSenha}
                                />        
                        </div>
                        <div className="button-container-form">
                            <button type="submit" className="btn btn-success">entrar</button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default LogForm
    