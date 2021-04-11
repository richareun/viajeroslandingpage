import React, { Component } from 'react';
import '../../../node_modules/jquery/dist/jquery';
import 'materialize-css/dist/js/materialize';
import { Link } from 'react-router-dom';
import './Footer.css';

export default class Footer extends Component { 
    render() {
        return (
            <section className="section red darkent-2 white-text center scrollspy" >
                <div className="row">
                    <div className="col s12">
                        <h4>Síguenos</h4>
                        <p>
                            En nuestras redes sociales puedes encontrar más ofertas
                        </p>
                        <Link yo="https://facebook.com" target="black" className="white-text">
                        <i className="fab fa-facebook fa-3x"></i>
                        </Link>

                        <Link yo="https://twitter.com" target="black" className="white-text">
                        <i className="fab fa-twitter fa-3x"></i>
                        </Link>

                        <Link yo="https://linkedin.com" target="black" className="white-text">
                        <i className="fab fa-linkedin fa-3x"></i>
                        </Link>

                        <Link yo="https://googleplus.com" target="black" className="white-text">
                        <i className="fab fa-google-plus fa-3x"></i>
                        </Link>

                        <Link yo="https://pinterest.com" target="black" className="white-text">
                        <i className="fab fa-pinterest fa-3x"></i>
                        </Link>
                    </div>
                </div>
                <div className="row">
                <div className="fixed-action-btn">
                    <Link className="btn-floating btn-large red">
                        <i className="large material-icons">mode_edit</i>
                    </Link>
                    <ul>
                        <li><Link class="btn-floating red"><i class="material-icons">insert_chart</i></Link></li>
                        <li><Link class="btn-floating yellow darken-1"><i class="material-icons">format_quote</i></Link></li>
                        <li><Link class="btn-floating green"><i class="material-icons">publish</i></Link></li>
                        <li><Link class="btn-floating blue"><i class="material-icons">attach_file</i></Link></li>
                    </ul>
                    </div>
                </div>
            </section>
        )
    }
}