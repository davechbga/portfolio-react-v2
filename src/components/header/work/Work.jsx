import React from "react";
import Works from "./Works";
import "./work.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

const Work = () => {
  return (
    <section className="work section" id="portfolio">
      <motion.h2
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="section__title"
      >
        Portfolio
      </motion.h2>
      <motion.span
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="section__subtitle"
      >
        Most recent work
      </motion.span>
      <Works />
    </section>
  );
};

export default Work;
