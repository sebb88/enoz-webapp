import React from 'react';

const Contacto = () => {
    return (
        <div className="container-fluid">
            <div className="row center-align">
                <div className="row">
                    <div className="col-lg-12 col-md-10 col-sm-10 col-xs-10">
                        <h1>Lo que principalmente juego es al GTA V RP en <a className="white-text" href="https://despistaos.es/" >Despistaos RP</a></h1>
                    </div>
                    <div className="col-lg-12 col-md-10 col-sm-10 col-xs-10">
                        <h2 className="light-blue-text">Tambien viciamos al FIFA, Fall Guys, Among Us, Rust.</h2>
                    </div>
                    <div className="col-lg-12 col-md-10 col-sm-10 col-xs-10">
                        <h3>Inicia sesion con Twitter para disfrutar de todo el contenido.</h3>
                    </div>
                </div>
                <div className="col-lg-6 col-md-10 col-sm-10 col-xs-10 box-shadow contactos">
                    <div className="card">
                        <div className="card-image">
                            <img className="img-thumbnail" src="../pics/marketing.png" alt="Logo" />
                            <span className="card-title">¿Quieres publicitar en la web?</span>
                        </div>
                        <div className="card-content purple-text text-darken-4">
                            <p>Si desea promocionar su negocio para apoyar al canal, estará ayudando tanto como a Enoz y a su Staff. Enviá un mail, y serás informado a la brevedad de como funciona.</p>
                        </div>
                        <div className="card-action">
                            <a href="mailto:sebastian.upe@gmail.com" >
                                <span className="red-text">Enviar mail</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-10 col-sm-10 col-xs-10 contactos">
                    <div className="card">
                        <div className="card-image">
                            <img className="img-thumbnail" src="../pics/virus.png" alt="Logo" />
                            <span className="card-title">¿Aún no tenes tu Banner?</span>
                        </div>
                        <div className="card-content purple-text text-darken-4">
                            <p>Si deseas realizar tu banner para publicitar en nuestra Web, contamos con diseñadores gráficos que podrán elaborar este trabajo por vos. Enviando un mail, el diseñador se pondra en contacto en cuanto este disponible.</p>
                        </div>
                        <div className="card-action">
                            <a href="mailto:Editionsroy@gmail.com" >
                                <span className="red-text">Enviar mail</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6 clearfix affix redes">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 right">
                                <a className="btn-floating btn-large waves-effect waves-light transparent"
                                    href="https://twitter.com/Enozidio" >
                                    <img className="img-responsive" src="/pics/logotw.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 right">
                                <a className="btn-floating btn-large waves-effect waves-light transparent"
                                    href="https://www.instagram.com/enoz_tw/?hl=es-la">
                                        <img className="img-responsive" src="pics/logoig.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 right">
                                <a className="btn-floating btn-large waves-effect waves-light transparent"
                                    href="https://www.youtube.com/channel/UCsYWD_3oNML6225SJcQOb8w">
                                        <img className="img-responsive" src="/pics/logoyt.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 right">
                                <a className="btn-floating btn-large waves-effect waves-light transparent"
                                    href="https://new.loots.com/c/enoz">
                                        <img className="img-responsive" src="/pics/loots.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 right">
                                <a className="btn-floating btn-large waves-effect waves-light transparent"
                                    href="https://www.streamloots.com/enoz" >
                                        <img className="img-responsive" src="/pics/streamloots-logo.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Contacto