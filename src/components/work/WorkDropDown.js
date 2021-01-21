import React, { useState, useRef } from "react";
import WorkNav from "./WorkNav.js";
import { motion, AnimatePresence } from "framer-motion";
import onClickOutside from "../../hooks/onClickOutside";

export default function WorkDropDown() {
  const ref = useRef();
  const [workMenu, setWorkMenu] = useState(false);
  onClickOutside(ref, () => setWorkMenu(false));
  const handleClick = () => {
    workMenu === false ? setWorkMenu(true) : setWorkMenu(false);
  };

  return (
    <div className="dropdown" onClick={handleClick} ref={ref}>
      <span className="hamburger">menu</span>
      {workMenu === true ? (
        <motion.div className="dropdownlinks">
          <WorkNav />
        </motion.div>
      ) : null}
    </div>
  );
}
