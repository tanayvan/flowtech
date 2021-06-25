import React from "react";
import {motion} from "framer-motion"

export default function CategoryCard({ url, name ,CardInView}) {
  return (
    <motion.div  className="category-card-container">
      <div className="card-image-container">
        <img src={url} alt="" width="100%" />
      </div>
      <div className="card-bg-container"></div>
      <div className="card-caption-container">
        <div className="card-heading-1">{name}</div>
        <div className="button mt-3">View All</div>
      </div>
    </motion.div>
  );
}
