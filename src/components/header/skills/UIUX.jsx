import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

const FEFrameworks = () => {
  return (
    <motion.div
      variants={fadeIn("right", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="skills__content"
    >
    <h3 className="skills__title">UI/UX Design</h3>

    <div className="skills__box">
      <div className="skills__group">
        <div className="skills__data">
          <i className="bx bxs-badge-check"></i>

          <div>
            <h3 className="skills__name">Figma</h3>
            <span className="skills__level">Advanced</span>
          </div>
        </div>

        <div className="skills__data">
          <i className="bx bxs-badge-check"></i>

          <div>
            <h3 className="skills__name">Sketch</h3>
            <span className="skills__level">Intermediate</span>
          </div>
        </div>

        <div className="skills__data">
          <i className="bx bxs-badge-check"></i>

          <div>
            <h3 className="skills__name">Zeplin</h3>
            <span className="skills__level">Intermediate</span>
          </div>
        </div>
      </div>

      <div className="skills__group">
        <div className="skills__data">
          <i className="bx bxs-badge-check"></i>

          <div>
            <h3 className="skills__name">AdobeXD</h3>
            <span className="skills__level">Advanced</span>
          </div>
        </div>

        <div className="skills__data">
          <i className="bx bxs-badge-check"></i>

          <div>
            <h3 className="skills__name">InVision</h3>
            <span className="skills__level">Intermediate</span>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
  )
}

export default FEFrameworks