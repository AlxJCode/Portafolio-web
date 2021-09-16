import React, { useState } from 'react';
import './Skills.css';

import aulaVirtual from '../imgs/aulavirtual.png';
import appMusica from '../imgs/playlist.png';
import appGalery from '../imgs/appgalery.png';

import Modal from './Modal';

import VisibilityIcon from '@material-ui/icons/Visibility';


function Skills() {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };

    return (
        <div className="skills" id="habilidades">
            <div className="component_top">
                <h5>Mis Habilidades</h5>
                <h4>Lo que sé</h4>
                <div className="backline"></div>
            </div>
            <div className="skills_body">
                <div className="skills_txt">
                    <h5>Mis habilidades y experiencias</h5>
                    <p>
                        Los lenguajes de programación que sé son: Python, Java, SQL 
                        y Javascript que es el que más domino.
                        También tengo conocimientos en HTML y CSS. Las 
                        tecnologías que manejo son NodeJS, Express, React y Django.
                    </p>
                </div>
                <div className="galeria_container">
                    <div className="item_galeria">
                        <div className="item_img">
                            <img src={aulaVirtual} alt="" />
                            <div className="item_img_bg" onClick={() => {openModal(); setShowModal({src: aulaVirtual})}}>
                                <VisibilityIcon/>
                            </div>
                        </div>
                        <div className="item_txt">
                            <div className="item_title">
                                AULA VIRTUAL
                            </div>
                            <div className="item_description">
                                Aula virtual creada en Django y usando una base de datos SQL. 
                                Admite dos tipos de usuarios (docente y alumno). Tiene las funciones de 
                                crear y eliminar publicaciones con archivos, crear y calificar tareas.
                            </div>
                        </div>
                    </div>
                    <div className="item_galeria">
                        <div className="item_img">
                            <img src={appMusica} alt="" />
                            <div className="item_img_bg" onClick={() => {openModal(); setShowModal({src: appMusica})}}>
                                <VisibilityIcon/>
                            </div>
                        </div>
                        <div className="item_txt">
                            <div className="item_title">
                                APP DE MÚSICA
                            </div>
                            <div className="item_description">
                                Aplicación de Música creada con Express y MongoDB con implementación de la API de Youtube.
                            </div>
                        </div>
                    </div>
                    <div className="item_galeria">
                        <div className="item_img">
                            <img src={appGalery} alt="" />
                            <div className="item_img_bg" onClick={() => {openModal(); setShowModal({src: appGalery})}}>
                                <VisibilityIcon className="view_icon"/>
                            </div>
                        </div>
                        <div className="item_txt">
                            <div className="item_title">
                                GALERÍA DE IMÁGENES
                            </div>
                            <div className="item_description">
                                Galería creada con Express y MongoDB, diseñado con grid CSS.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal}/>
        </div>
    );
}

export default Skills;
