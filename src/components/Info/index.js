import "./style.css"

import React from "react"

export default function Info() {
    return (
        <div>
            <img className="perfil-photo" src="../images/perfil-photo.jpg" />
            <h1 className="person-name">Matheus Benevides Militão</h1>
            <h3 className="profission">Junior Front-End Developer</h3>
            <h4 className="site">Coloque o site pessoal aqui</h4>
            <div className="websites">
                <a href="mailto:mbenemilitao@gmail.com" target="_blank" className="email">
                    <img src="../images/email-logo.png" />
                    <p>Email</p> 
                </a>
                <a href="https://www.linkedin.com/in/mbmilitao/" target="_blank" className="linkedin" >
                    <img src="../images/linkedin-logo.png" />
                    <p>Linkedin</p>            
                </a>
            </div>
        </div>
    )
}