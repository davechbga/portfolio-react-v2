import React from "react";
import Frontend from "./Frontend";
import Backend from "./Backend";
import UIUX from "./UIUX";
import GraphicDesign from "./GraphicDesign";
import "./skills.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <motion.h2
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="section__title"
      >
        Skills
      </motion.h2>
      <motion.span
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="section__subtitle"
      >
        My technical level
      </motion.span>

      <div className="skills__container container grid">
        <Frontend />

        <Backend />
        <UIUX />
        <GraphicDesign />
      </div>
    </section>
  );
};

export default Skills;
