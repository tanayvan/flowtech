import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function Heading({ text }) {
  const { inView, ref } = useInView({
    threshold: 1,
  });

  return (
    <div
      ref={ref}
      style={{ display: "flex", justifyContent: "center", margin: "3rem 0" }}
    >
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        transition={{ duration: 0.4 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
        className="my"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="text-center category-header" style={{ maxLines: 1 }}>
          {text}
        </div>
      </motion.div>
    </div>
  );
}
