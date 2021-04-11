import React, { Component } from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import  './Explore.css';

export default class Explore extends Component {
    render() {
        return (
            <section id="explore" className="section section-explore grey lighten-4 center">
                <div className="container">
                    <div className="row">
                        <h4 className="center">
                            <span className="red-text darken-1">Explorar</span> Viajeros
                        </h4>
                        <div className="col s6 m3">
                            <div className="card-panel">
                                <i className="material-icons medium red-text">hotel</i>
                                <h4>Hoteles</h4>
                                <p>Reserva tu hotel sin costo y ahorra. Próximo destino: tu establecimiento ideal. Gran variedad. Garantía de precio. Flexibilidad de pago.</p>
                            </div>
                        </div>
                        <div className="col s6 m3">
                            <div className="card-panel">
                                <i className="material-icons medium red-text">restaurant</i>
                                <h4>Comidas</h4>
                                <p>Restaurant & Bar. Mexican detail food. Seleccionamos cuidadosamente los ingredientes más frescos y de la más alta calidad para confeccionar todos nuestros servicios</p>
                            </div>
                        </div>
                        <div className="col s6 m3">
                            <div className="card-panel">
                                <i className="material-icons medium red-text">local_cafe</i>
                                <h4>Café</h4>
                                <p>Disfruta de los momentos más increibles con un rico café acompañándote en cada momento</p>
                            </div>
                        </div>
                        <div className="col s6 m3">
                            <div className="card-panel">
                                <i className="material-icons medium red-text">shopping_basket</i>
                                <h4>Comercial</h4>
                                <p>Marina Puerto Cancún es un destino insuperable, dónde encontrarás lo mejor en compras, gastronomía y estilo de vida de Cancún.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
