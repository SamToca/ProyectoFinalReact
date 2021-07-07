import React from "react";
import './NavBarEstilo.css';
import Card from "../Cart/Cart";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
    return(
        <div className="noMeLaConteiner">
            <h1>Militac</h1>
            <ul className="lista">
                <li className="lista__item"><a href="">Home</a> </li>
                <li className="lista__item"><a href="">Productos</a> </li>
                <li className="lista__item"><a href="">Preguntas Frecuentes</a> </li>
                <li className="lista__item"><a href="">Contacto</a> </li>
            </ul>
            <div className="contenedorCarrito">
               <Card/>
            </div>
        </div>
    );
};

export default NavBar;
