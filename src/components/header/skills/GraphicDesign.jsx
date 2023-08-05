import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

const BEFrameworks = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="skills__content"
    >
      <h3 className="skills__title">Graphic Design</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bxs-badge-check"></i>

            <div>
              <h3 className="skills__name">Photoshop</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxs-badge-check"></i>

            <div>
              <h3 className="skills__name">Illustrator</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxs-badge-check"></i>

            <div>
              <h3 className="skills__name">GIMP</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bxs-badge-check"></i>

            <div>
              <h3 className="skills__name">Affinity</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxs-badge-check"></i>

            <div>
              <h3 className="skills__name">CorelDRAW</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BEFrameworks;
