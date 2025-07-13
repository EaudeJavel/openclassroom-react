import React from "react";
import { Link } from "react-router";
import "./Gallery.scss";

type GalleryItem = {
  id: string;
  title: string;
  cover: string;
  location: string;
  tags: string[];
  host: {
    name: string;
    picture: string;
  };
  rating: string;
};

type GalleryProps = {
  locations: GalleryItem[];
};

const Gallery: React.FC<GalleryProps> = ({ locations }) => {
  return (
    <div className="gallery">
      {locations.map((item) => (
        <Link
          to={`/produit/${item.id}`}
          className="gallery__item"
          key={item.id}
        >
          <div
            className="gallery__image"
            style={{ backgroundImage: `url(${item.cover})` }}
          >
            <div className="gallery__overlay">
              <p className="gallery__title">{item.title}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Gallery;
