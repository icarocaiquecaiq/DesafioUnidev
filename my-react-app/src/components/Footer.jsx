import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
    return (
            <footer className="container-fluid bg-dark text-center mt-5">
            <div className="row justify-content-center pt-3 pb-3 gap-3">
                <h3 className="m-0 col-12 text-uppercase">unidev</h3>
                <section className="nav-footer col-4">
                    <ul className="nav flex-column flex-md-row justify-content-around">
                        <li className="nav-item">
                            <Link to={`/`} className='link-offset-2 link-underline link-underline-opacity-0'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={``} className='link-offset-2 link-underline link-underline-opacity-0'>Agente</Link>
                        </li>
                        <li className="nav-item">
                            <a href="https://bio.site/unidev" target='blank' className='link-offset-2 link-underline link-underline-opacity-0'>Contato</a>
                        </li>
                        <li className="nav-item">
                            <a href="https://bio.site/unidev" target='blank' className='link-offset-2 link-underline link-underline-opacity-0'>Blog</a>
                        </li>
                    </ul>
                </section>
                <section className=" col-lg-4 ">
                    <ul className="nav justify-content-center justify-content-lg-around">
                        <li className="nav-item">
                            <a href="https://www.facebook.com/unidevti/?locale=pt_BR" target='blank' className='link-offset-2 link-underline link-underline-opacity-0'> 
                                <i className="fa-brands fa-facebook nav-link fs-4"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="https://www.instagram.com/unidev.ti/" target='blank' className='link-offset-2 link-underline link-underline-opacity-0' >
                                <i className="fa-brands fa-instagram nav-link fs-4"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            {/* nao achei conta no X */}
                            <a href="https://www.facebook.com/unidevti/?locale=pt_BR" target='blank' className='link-offset-2 link-underline link-underline-opacity-0'>
                                <i className="fa-brands fa-x-twitter nav-link fs-4"></i>
                            </a>
                        </li>
                    </ul>
                </section>
            </div>

            <p className="font-white-escuro copyright-footer">© Copyright 2001-2022 Copyright.com.br - All Rights Reserved</p>
        </footer>
    )
}

export default Footer
