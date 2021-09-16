import React, { useEffect } from 'react';
import './Home.css'

import Typed from 'react-typed';

import bg from '../imgs/bg.svg';
import logo from '../imgs/logo512.png';

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
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png" alt="" className="js_img logos"/>
                <img src="https://image.flaticon.com/icons/png/512/919/919827.png" alt="" className="html_img logos"/>
                <img src="https://image.flaticon.com/icons/png/512/919/919826.png" alt="" className="css_img logos"/>
                <img src="https://image.flaticon.com/icons/png/512/919/919825.png" alt="" className="node_img logos"/>
                <img src={logo} alt="" className="react_img logos"/>
                <img src="https://image.flaticon.com/icons/png/512/919/919836.png" alt="" className="mysql_img logos"/>
                <img src="https://image.flaticon.com/icons/png/512/919/919832.png" alt="" className="ts_img logos"/>
                <img src="http://cdn.app.compendium.com/uploads/user/e7c690e8-6ff9-102a-ac6d-e4aebca50425/f4a5b21d-66fa-4885-92bf-c4e81c06d916/Image/e5eee315a17de0d7f56117077eb71fa9/mongo.png" alt="" className="mongo_img logos"/>
                <img src="https://1000marcas.net/wp-content/uploads/2021/06/Django-Logo.png" alt="" className="django_img logos"/>
            </div>
            <div className="home_right_movil">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png" alt="" className="js_img_m"/>
                <img src="https://image.flaticon.com/icons/png/512/919/919827.png" alt="" className="html_img_m"/>
                <img src="https://image.flaticon.com/icons/png/512/919/919826.png" alt="" className="css_img_m"/>
                <img src="https://image.flaticon.com/icons/png/512/919/919825.png" alt="" className="node_img_m"/>
                <img src={logo} alt="" className="react_img_m"/>
                <img src="https://image.flaticon.com/icons/png/512/919/919836.png" alt="" className="mysql_img_m"/>
                <img src="https://image.flaticon.com/icons/png/512/919/919832.png" alt="" className="ts_img_m"/>
                <img src="http://cdn.app.compendium.com/uploads/user/e7c690e8-6ff9-102a-ac6d-e4aebca50425/f4a5b21d-66fa-4885-92bf-c4e81c06d916/Image/e5eee315a17de0d7f56117077eb71fa9/mongo.png" alt="" className="mongo_img_m"/>
                <img src="https://1000marcas.net/wp-content/uploads/2021/06/Django-Logo.png" alt="" className="django_img_m"/>
            </div>
        </div>
    );
}

export default Home
