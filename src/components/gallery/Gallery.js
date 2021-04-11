import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './Gallery.css'

const Photo = ({ img, alt}) => {
    return(
        <div className="col s12 m3 marg">
            <img className="materialboxed responsive-img" src={img} alt={alt} />
        </div>
    );
}


class PhotoGallery extends Component {

    state = {
        photo: [
            {
                id: 1,
                img: "https://source.unsplash.com/1600x900/?hotel",
                alt: "hotel"
            },
            {
                id: 2,
                img: "https://source.unsplash.com/1600x900/?restaurant",
                alt: "restaurante"
            },
            {
                id: 3,
                img: "https://source.unsplash.com/1600x900/?nature",
                alt: "Naturaleza"
            },
            {
                id: 4,
                img: "https://source.unsplash.com/1600x900/?beach",
                alt: "playa"
            },
            {
                id: 5,
                img: "https://source.unsplash.com/1600x900/?travel",
                alt: "viajes"
            },
            {
                id: 6,
                img: "https://source.unsplash.com/1600x900/?city",
                alt: "ciudad"
            },
            {
                id: 7,
                img: "https://source.unsplash.com/1600x900/?adventure",
                alt: "aventura"
            },
            {
                id: 8,
                img: "https://source.unsplash.com/1600x900/?sea",
                alt: "oceano"
            },
            {
                id: 9,
                img: "https://source.unsplash.com/1600x900/?building",
                alt: "edificio"
            },
            {
                id: 10,
                img: "https://source.unsplash.com/1600x900/?climbing",
                alt: "escalada"
            },
            {
                id: 11,
                img: "https://source.unsplash.com/1600x900/?forest",
                alt: "bosque"
            },
            {
                id: 12,
                img: "https://source.unsplash.com/1600x900/?resort",
                alt: "recurso"
            },
            
        ]
    }

    render(){
        return(
            <div className="row">
                {this.state.photo.map(gal => (
                    <Photo key={gal.id}
                    img={gal.img} alt={gal.alt} />
                ))}
            </div>
        );
    }
}

export default class Gallery extends Component {
    render() {
        return (
            <section id="gallery" className="section section-gallery scrollspy">
                <div className="container">
                    <h4 className="center">
                        <span className="red-text text-darken-1">Galería d</span>e fotos
                    </h4>
                    <PhotoGallery />
                </div>
            </section>
        )
    }
}
