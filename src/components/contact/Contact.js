import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

export default class Contact extends Component {
    render() {
        return (
            <section id="contact" className="section section-contact scrollspy">
                <div className="container">
                    <div className="row">
                        <div className="col s12 m6">
                            <div className="card-panel red white-text center">
                                <i className="material-icons">mail</i>
                                <h5>Correo electrónico</h5>
                                <p>Mándanos un correo electrónico para más información</p>
                            </div>
                            <ul className="collection with-header">
                                <li className="collection-header">
                                    <h4>Oficina principal</h4>
                                </li>
                                <li className="collection-item">Reserva</li>
                                <li className="collection-item"><i class="fas fa-map-marker-alt"></i> Benito Juarez, Cancún, Q.roo</li>
                                <li className="collection-item"><i className="fas fa-phone">(998) 123-24-59</i></li>
                                <li className="collection-item"><i className="fas fa-envelope-square">Viajeros-lugares@gmail..com</i></li>
                            </ul>
                        </div>
                        <div className="col s12 m6">
                            <div className="card-panel grey lighten-3">
                                <h5>Rellena estos datos</h5>
                                <form>
                                    <div className="input-field">
                                        <input type="text" id="name" ClassName="validate"/>
                                        <label from="name" className="red-text">Nombre</label>
                                    </div>
                                    <div className="input-field">
                                        <input type="text" id="email" ClassName="validate"/>
                                        <label from="email" className="red-text">Correo</label>
                                    </div>
                                    <div className="input-field">
                                        <input type="text" id="phone" ClassName="validate"/>
                                        <label from="phone" className="red-text">Telefono</label>
                                    </div>
                                    <div className="input-field">
                                        <textarea type="text" id="mesage" ClassName="materialize-textarea" data-length="120"></textarea>
                                        <label from="mesage" className="red-text">Mensaje</label>
                                    </div>
                                    <input type="submit" value="Enviar" className="btn red"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
