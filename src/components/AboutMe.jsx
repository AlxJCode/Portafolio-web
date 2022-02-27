import React from 'react';
import './AboutMe.css';

import Typed from 'react-typed';

import cv from '../ArroyoCV.pdf';
import programmerImg from '../imgs/programmer.png';

function AboutMe() {

    return (
        <div className="aboutMe" id="acerca">
            <div className="component_top">
                <h5 className="about_lines">Acerca de mi</h5>
                <h4 className="about_lines">Quien soy</h4>
                <div className="backline"></div>
            </div>
            <div className="aboutMe_body">
                <div className="aboutMe_img">
                    <img src={programmerImg} alt="programador" />
                </div>
                <div className="aboutMe_txt">
                    <p className="aboutMe_txt1">
                        Mi nombre es Alex y soy un estudiante de&nbsp;
                        <Typed
                            className="aboutMe_txt1_5"
                            strings={["Programación", "Desarrollo web", "Ing. de Sistemas"]}
                            loop
                            typeSpeed={70}
                            backSpeed={40} />
                    </p>
                    <br />
                    <p className="aboutMe_txt2">
                        Actualmente curso el 7to semestre de la carrera
                        de Ingeniería de Sistemas en la UNTELS.
                        Me gusta mucho el desarrollo web y los gatos.
                        Si necesitas un sitio web puedes contar con mis servicios,
                        que tengas un bonito día.
                    </p>
                    <br /><br className="hid" />
                    <div>
                        <a href={cv}>Descargar CV</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
