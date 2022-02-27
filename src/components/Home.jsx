import React, { useEffect } from 'react';
import './Home.css'

import Typed from 'react-typed';

import bg from '../imgs/bg.svg';
import logo from '../imgs/logo512.png';
import JSLogo from '../imgs/js-logo.png';
import HMTLLogo from '../imgs/html-logo.png';
import CSSLogo from '../imgs/css-logo.png';
import DjangoLogo from '../imgs/django-logo.png';
import MongoLogo from '../imgs/mongo-logo.png';
import MySQLLogo from '../imgs/mysql-logo.png';
import TSLogo from '../imgs/ts-logo.png';
import NodeLogo from '../imgs/node-logo.png';


import gsap from 'gsap';

function Home() {

    const timeline = gsap.timeline();

    useEffect(() => {
        const lines = document.querySelectorAll('.lines');
        const logos = document.querySelectorAll('.logos');
        timeline
            .from(lines, { opacity: 0, x: -300, duration: 1, ease:"block", stagger: 0.2 })
            .from(logos, { opacity: 0, y: 400, duration: 1, ease:"block", stagger: 0.2 }, "-=1");
    }, [timeline])

    return (
        <div className="home" id="inicio" >
            {<img src={bg} alt="" id="bg"/>}
            <div className="home_left" >
                <span className="line_1 lines">Hola, mi nombre es</span>
                <span className="line_2 lines">Alex Arroyo</span>
                <span className="line_3 lines">y soy un estudiante de</span>
                <Typed
                className="line_4 lines"
                strings={["Programación", "Desarrollo web", "Ing. de Sistemas"]}
                typeSpeed={70}
                backSpeed={40}
                loop/>
                <div className="btn_contrato">
                    <a href="#contacto" className="line_5 lines">Contrátame</a>
                </div>
            </div>
            <div className="home_right">
                <img src={JSLogo} alt="JS" className="js_img logos"/>
                <img src={HMTLLogo} alt="HTML" className="html_img logos"/>
                <img src={CSSLogo} alt="CSS" className="css_img logos"/>
                <img src={NodeLogo} alt="NODE" className="node_img logos"/>
                <img src={logo} alt="React" className="react_img logos"/>
                <img src={MySQLLogo} alt="MySql" className="mysql_img logos"/>
                <img src={TSLogo} alt="TS" className="ts_img logos"/>
                <img src={MongoLogo} alt="MongoDB" className="mongo_img logos"/>
                <img src={DjangoLogo} alt="Django" className="django_img logos"/>
            </div>
            <div className="home_right_movil">
                <img src={JSLogo} alt="JS"  className="js_img_m"/>
                <img  src={HMTLLogo} alt="HTML" className="html_img_m"/>
                <img src={CSSLogo} alt="CSS" className="css_img_m"/>
                <img  src={NodeLogo} alt="NODE" className="node_img_m"/>
                <img src={logo} alt="" className="react_img_m"/>
                <img  src={MySQLLogo} alt="MySql" className="mysql_img_m"/>
                <img  src={TSLogo} alt="TS" className="ts_img_m"/>
                <img  src={MongoLogo} alt="MongoDB" className="mongo_img_m"/>
                <img  src={DjangoLogo} alt="Django" className="django_img_m"/>
            </div>
        </div>
    );
}

export default Home
