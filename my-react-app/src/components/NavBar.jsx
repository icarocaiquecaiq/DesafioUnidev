import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='bg-dark'>
      <header className='container-lg'>
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid d-flex justify-content-between">
            <Link to={'/'} className="navbar-brand fs-2 text-uppercase fw-bold text-white"  >unidev</Link>
            <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end " id="navbarNavDropdown">
              <ul className="navbar-nav d-flex justify-content-end">
                <li className="nav-item">
                  <Link to={'/'} className="nav-link text-white" aria-current="page" >Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'entrar'} className="nav-link text-white" >Login</Link>
                </li>
                <li className="nav-item">
                  <Link to={'registrar'} className="nav-link text-white" >Registre-se</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/'} className="nav-link text-white" >Sair</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/'} className="nav-link text-white" >Meus Eventos</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle text-white"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Acoes
                  </Link>
                  <ul className="dropdown-menu bg-dark">
                    <li><Link  to={'/addEvento'} className="dropdown-item text-white adicionar_link" >adionar evento</Link></li>
                    <li><Link to={'/removerEvento'} className="dropdown-item text-white remover_link" >remover evento</Link></li>
                    <li><Link to={'/editarEvento'} className="dropdown-item text-white editar_link" >editar evento</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>

  )
}

export default NavBar
