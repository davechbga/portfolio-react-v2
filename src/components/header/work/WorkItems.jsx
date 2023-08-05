import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
const WorkItems = ({ item }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="work__card"
      key={item.id}
    >
      <img src={item.image} alt="" className="work__img" />

      <h3 className="work__title">{item.title}</h3>
      <a target="_blank" href={item.link} className="work__button">
        Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </motion.div>
  );
};

export default WorkItems;
