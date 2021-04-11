import React, { Component } from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';


const SmoothScroll = () => {
    return(
        <section>
            <div className="navbar-fixed">
                <nav className="red">
                    <div className="container">
                        <div className="nav-wrapper">
                            <AnchorLink href="!#" className="brand-logo"><a href="http://localhost:3000/">Viajeros</a></AnchorLink>
                            <AnchorLink href="!#" data-target="mobile-demo" className="sidenav-trigger right"><i className="material-icons">menu</i></AnchorLink>
                            <ul className="right hide-on-med-and-down">
                                <li><AnchorLink href="/home">Inicio</AnchorLink></li>
                                <li><AnchorLink href="/search">Buscar</AnchorLink></li>
                                <li><AnchorLink href="/explore">Explorar</AnchorLink></li>
                                <li><AnchorLink href="/adventure">Aventura</AnchorLink></li>
                                <li><AnchorLink href="/gallery">Galería</AnchorLink></li>
                                <li><AnchorLink href="/contact">Contacto</AnchorLink></li>
                                <li><a href="https://nervous-meninsky-1d3e40.netlify.app/">RESERVAR AHORA</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <ul class="sidenav" id="mobile-demo">
            <li><AnchorLink href="#home">Inicio</AnchorLink></li>
            <li><AnchorLink href="#search">Buscar</AnchorLink></li>
            <li><AnchorLink href="#explore">Explorar</AnchorLink></li>
            <li><AnchorLink href="#adventure">Aventura</AnchorLink></li>
            <li><AnchorLink href="#gallery">Galería</AnchorLink></li>
            <li><AnchorLink href="#contact">Contacto</AnchorLink></li>
            <li><a href="https://nervous-meninsky-1d3e40.netlify.app/">RESERVAR AHORA</a></li>
            </ul>
        </section>
    )
}

class Navbar extends Component {
    render(){
        return (
            <section>
                <SmoothScroll />
            </section>
        );
    }
}

export default Navbar;
