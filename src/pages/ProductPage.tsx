import React from "react";
import { useParams } from "react-router";
import locations from "../../data.json";
import Collapse from "../components/Collapse/Collapse";
import NotFound from "./NotFound";
import Slideshow from "../components/Slideshow/Slideshow";
import '../style/ProductPage.scss'

function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const location = locations.find((item) => item.id === id);

  if (!location) {
    return <NotFound />;
  }

  return (
    <div className="product">
      <Slideshow pictures={location.pictures} title={location.title} />

      <div className="product__top">
        <div className="product__infos">
          <h1 className="product__title">{location.title}</h1>
          <p className="product__location">{location.location}</p>
          <div className="product__tags">
            {location.tags.map((tag) => (
              <span key={tag} className="product__tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="product__host-section">
          <div className="product__host">
            <p className="product__host-name">{location.host.name}</p>
            <img
              className="product__host-picture"
              src={location.host.picture}
              alt={location.host.name}
            />
          </div>
          <div className="product__rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={
                  star <= parseInt(location.rating)
                    ? "star filled"
                    : "star"
                }
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="product__collapses">
        <Collapse title="Description" content={location.description} />
        <Collapse title="Équipements" content={location.equipments} />
      </div>
    </div>
  );
}

export default ProductPage;