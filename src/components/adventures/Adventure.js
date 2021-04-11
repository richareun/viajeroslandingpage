import React, { Component } from 'react';
import Resort1 from '../../images/banner4.jpg';
import Resort2 from '../../images/banner5.jpg';
import Resort3 from '../../images/banner8.jpg';
import { HashLink as Link } from 'react-router-hash-link';


export default class Adventure extends Component {
    render() {
        return (
            <section id="adventure" className="section section-adventure scrollspy">
                <div className="container">
                    <div className="row">
                        <h4 className="center">
                            <span className="red-text darken-1">Lugares</span> Turísticos
                        </h4>
                        <div className="col s12 m4">
                            <div className="card">
                                <div className="card-image">
                                    <img src={Resort1} alt="Cancun" />
                                    <span className="card-title">Cancún</span>
                                    <Link className="btn-floating activator halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></Link>
                                </div>
                                <div className="card-content">
                                    <p>Cancún es reconocido en todo el mundo por sus espectaculares playas de arena blanca y su fascinante mar en tonos azul turquesa</p>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">Cancún<i className="material-icons right">close</i></span>
                                    <p>Disfruta de Cancún a los mejores precios. Consigue los mejores y más baratos Hoteles, Vuelos, Paquetes y Tours a Cancún y la Riviera Maya </p>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m4">
                            <div className="card">
                                <div className="card-image">
                                    <img src={Resort2} alt="Loscabos" />
                                    <span className="card-title">Los cabos</span>
                                    <Link className="btn-floating activator halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></Link>
                                </div>
                                <div className="card-content">
                                    <p>Es uno de los cinco municipios del estado de Baja California Sur, México, y se localiza en el extremo Sur del Estado.</p>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">Los Cabos<i className="material-icons right">close</i></span>
                                    <p>Bañada por Océano Pacífico y el Mar de Cortés, es un destino turístico a nivel mundial.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m4">
                            <div className="card">
                                <div className="card-image">
                                    <img src={Resort3} alt="puertovallarta" />
                                    <span className="card-title">Puerto Vallarta</span>
                                    <Link className="btn-floating activator halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></Link>
                                </div>
                                <div className="card-content">
                                    <p>Es una ciudad y puerto mexicano ubicado en el estado de Jalisco, en la Región Costa Sierra Occidental de la entidad</p>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">Puerto Vallarta<i className="material-icons right">close</i></span>
                                    <p>Te recibe con la pintoresca autencidad de la <b>cultura mexicana</b> presente en su calles y arquitectura, en su gastronomía y tradiciones.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
