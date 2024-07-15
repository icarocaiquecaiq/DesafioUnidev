import React from "react" 

const BemVindo = () => {
    return(
        <div className=" col-sm-12 col-md-5 col-lg-4  text-center font p-4">
            <section className="bem_vindo row gap-5 justify-content-center">
                <h2 className="fw-bold fs-1">Bem vindo</h2>
                <div className="main-icon fw-bold fs-3">
                    <div className="icon-container">
                        <img src="" alt="" />
                    </div>
                    <div className="desc_icon_container">
                        <h2 className='text-uppercase'>unidev</h2>
                    </div>
                </div>
                <div className="texto_bemVindo_container">
                    <p className="text-center lh-base fs-6"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nemo, praesentium? Repellat voluptate ipsam, sit, odit amet reprehenderit.</p>
                </div>
            </section>
        </div>
    )
}

export default BemVindo