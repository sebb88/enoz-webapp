import React from "react";
import Publicidad from './dashboard/Publicidad';

const Inicio = () => {
    var frameHeight;
    
    function resizeFrame() {
        if(window.innerHeight !== frameHeight) {
            frameHeight = window.innerHeight - 300;
        }
    };
    
    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2 col-md-2 col-sm-3 col-xs-3">
                        <Publicidad></Publicidad>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                        <div className="page-wrapper">
                            <div className="blog-top">
                                <h3> Enoz: "Roleplayer top, cirujano y opinólogo conspiranoico"</h3>
                            </div>
                            <div className="blog-list clearfix">
                                <div className="blog-box row">
                                    <div className="video-container">
                                        <iframe title="ENOZ"
                                            id="tw-enoz"
                                            className="e-iframe"
                                            onLoad={resizeFrame()}
                                            src="https://player.twitch.tv/?channel=enoz&parent=enoz-78d3e.web.app" 
                                            parent="www.enoz-78d3e.web.app/inicio" 
                                            height={frameHeight} 
                                            width="100%"
                                            frameBorder="1" 
                                            scrolling="no" 
                                            allowFullScreen={true} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h1>Prueba</h1>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 hide-on-med-and-down">
                        <Publicidad></Publicidad>
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
        </section>
        
    );
};

export default Inicio;
