import React from "react";
import image1 from "../assests/cardimage.png";
export default function ProductCard() {
  return (
    <div>
      <div className="product-card-container">
        <img src={image1} alt="" width="100%" />
        <div className="product-card-body">
          <div className="body-wrap">
            <div className="product-card-header">Seat Cover</div>
            <div className="product-card-arrow">
              <i class="fas fa-angle-right"></i>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            assumenda.
          </p>
        </div>
      </div>
    </div>
  );
}
