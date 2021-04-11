import React, { Component } from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import Imgone from '../../images/banner9.jpg';
import Imgtwo from '../../images/banner6.jpg';
import Imgthree from '../../images/banner7.jpg';
// import { Link } from 'react-router-dom';
import './Banner.css';



export default class Banner extends Component {
    render() {
        return (
            <section className="slider" id="home">
                <ul className="slides">
                    <li>
                        <img src={Imgone} alt="Vacaciones" />
                        <div className="caption center-align">
                            <h2>Elija su destino</h2>
                            <h5 className="light grey-text text-lighten-3 hide-on-small-only">
                            Viajar te deja sin palabras y después te convierte en un narrador de historias
                            </h5>
                            <a href ="https://nervous-meninsky-1d3e40.netlify.app/" className="btn btn-large red">Reservar ahora</a>
                        </div>
                    </li>
                    <li>
                        <img src={Imgtwo} alt="Presupuestos" />
                        <div className="caption left-align">
                            <h2>Reserve su viaje</h2>
                            <h5 className="light grey-text text-lighten-3 hide-on-small-only">
                            ¡Reserva ya tus boletos de avión con fechas flexibles y vive unas vacaciones inolvidables!
                            </h5>
                            <a href ="https://nervous-meninsky-1d3e40.netlify.app/" className="btn btn-large red">Reservar ahora</a>
                        </div>
                    </li>
                    <li>
                        <img src={Imgthree} alt="" />
                        <div className="caption right-align">
                            <h2>Relajarse y disfrutar</h2>
                            <h5 className="light grey-text text-lighten-3 hide-on-small-only">
                                Déjese llevar por el clima cálido y disfrute sus vacaciones como ninguna otra con nosotros.
                            </h5>
                            <a href ="https://nervous-meninsky-1d3e40.netlify.app/" className="btn btn-large red">Reservar ahora</a>
                        </div>
                    </li>
                </ul>
            </section>
        )
    }
}
