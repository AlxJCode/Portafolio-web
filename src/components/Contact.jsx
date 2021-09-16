import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="contact" id="contacto">
            <div className="component_top_m">
                <h5>Contáctame</h5>
                <h4>Contactar</h4>
                <div className="backline_m"></div>
            </div>
            <div className="contact_body">
                <div className="contact_top">
                    <p>
                        Aquí tengo algunas de mis redes y puedes ponerte en contacto conmigo por correo o por whatsapp.
                    </p>
                </div>
                <div className="contact_bottom">
                    <div className="item_contact">
                        <i className="fas fa-user"></i>
                        <p>Victor Alex Arroyo Parado</p>
                    </div>
                    <div className="item_contact">
                        <i className="fas fa-map-marker-alt"></i>
                        <p>Lima - Perú</p>
                    </div>
                    <a className="item_contact" href="mailto:alexarroyop31@gmail.com">
                        <i className="fas fa-envelope"></i>
                        <p>alexarroyop31@gmail.com</p>
                    </a>
                    <a className="item_contact" href="https://wa.me/+51918957307" target="__blank">
                        <i className="fab fa-whatsapp"></i>
                        <p>+51 918 957 307</p>
                    </a>
                    <a className="item_contact" href="https://github.com/AlxJCode" target="__blank">
                        <i className="fab fa-github"></i>
                        <p>AlxJCode</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact
