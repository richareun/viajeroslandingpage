import React, { Component } from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import './Booking.css'

export default class Booking extends Component {
    render() {
        return (
            <section className="section section-book red darken-2 white-text center">
                <div className="container">
                    <div className="row">
                        <div className="col s12 center">
                            <a href="https://nervous-meninsky-1d3e40.netlify.app/" className="btn btn-large waves-effect white red-text text-darken-3">
                                <i className="material-icons left">send</i>Reserva Ahora
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
