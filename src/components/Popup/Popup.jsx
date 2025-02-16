import { useState } from "react";
import styles from "./Popup.module.css";
import { useEffect } from "react";

import { motion } from "motion/react";

const Popup = () => {
  const [popupOn, setPopUpOn] = useState(false);

  useEffect(() => {
    setPopUpOn(true);
    setTimeout(() => {
      setPopUpOn(false);
    }, 5500);
  }, []);

  return (
    popupOn && (
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 0.5, ease: "easeInOut" }}
        className={styles.popup}
      >
        <p>
          Algum dado está desatualizado? deixa no feedback que atualizo assim que der!
        </p>
      </motion.div>
    )
  );
};

export default Popup;
