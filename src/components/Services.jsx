import React from 'react';
import './Services.css';

import Slider from 'react-slick';
import DevicesIcon from '@material-ui/icons/Devices';

function Services() {

    const settings = {
        infinite: true,
        slidesToShow: 3,
        speed: 300,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="services" id="servicios">
            <div className="component_top_m">
                <h5>Mis servicios</h5>
                <h4>Lo que ofrezco</h4>
                <div className="backline_m"></div>
            </div>
            <div className="services_body">
                <div className="slider_container">
                    <Slider className="slider" {...settings}>
                        <div className="card">
                            <div className="box">
                                <DevicesIcon className="card_icon_ui"/>
                                <div className="card_text">Diseños web adaptativos</div>
                                <p>Páginas web con diseño adaptativo para cualquier dispositivo. Ya sea móvil first o desktop first</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <i className="fas fa-code card_icon"></i>
                                <div className="card_text">Páginas web</div>
                                <p>Creación y diseño de páginas web estáticas y/o dinámicas. Desde simples páginas para mostrar información hasta aplicaciones webs</p>
                            </div> 
                        </div>
                        <div className="card">
                            <div className="box">
                                <i className="fas fa-server card_icon"></i>
                                <div className="card_text">Servidor web</div>
                                <p>Creación de servidores web con base de datos relaciones o no relacionales. Servicios de API Rest</p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Services
