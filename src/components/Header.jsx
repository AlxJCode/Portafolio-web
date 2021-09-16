import React, { useState, useEffect } from 'react';
import './Header.css';

import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import gsap from 'gsap';

function Header() {

    const logo = "<AlxCode/>";

    const timeline = gsap.timeline();

    const animationMenu = () => {
        const menu = document.querySelectorAll('.item_h');
        timeline
            .from(menu, { opacity:0, y:-100, duration: 2, ease:"elastic", stagger: 0.3 });
    };

    useEffect(animationMenu, [timeline])


    const [btnShow, setBtnShow] = useState(true);

    const showMenu = () => {
        setBtnShow(false);
        let menu = document.querySelector('.header_responsive');
        if (menu) {
            menu.classList.toggle('h_r_s');
        }
    };

    const HiddeMenu = () => {
        setBtnShow(true);
        let menu = document.querySelector('.header_responsive');
        if (menu) {
            menu.classList.toggle('h_r_s');
        }
    };

    return (
        <div className="header">
            <div className="header-left">
                <h4 className="item_h">{logo}</h4>
            </div>
            <div className="header-right">
                <ul>
                    <li><a href="#inicio" className="item_h">Inicio<div className="underline_m"></div></a></li>
                    <li><a href="#acerca" className="item_h">Acerca de<div className="underline_m"></div></a></li>
                    <li><a href="#servicios" className="item_h">Servicios<div className="underline_m"></div></a></li>
                    <li><a href="#habilidades" className="item_h">Habilidades<div className="underline_m"></div></a></li>
                    <li><a href="#contacto" className="item_h">Contacto<div className="underline_m"></div></a></li>
                </ul>
            </div>
            <div className="buttons">
                {btnShow ? (
                    <button className="menu_btn" onClick={showMenu}><MenuIcon className="menu_icon"/></button>
                ): (
                    <button className="close_menu_btn" onClick={HiddeMenu}><CloseIcon className="close_icon"/></button>
                )}
                
            </div>
            <div className="header_responsive">
                <ul>
                    <li><a href="#inicio" onClick={HiddeMenu}>Inicio</a></li>
                    <li><a href="#acerca" onClick={HiddeMenu}>Acerca de</a></li>
                    <li><a href="#servicios" onClick={HiddeMenu}>Servicios</a></li>
                    <li><a href="#habilidades" onClick={HiddeMenu}>Habilidades</a></li>
                    <li><a href="#contacto" onClick={HiddeMenu}>Contacto</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header
