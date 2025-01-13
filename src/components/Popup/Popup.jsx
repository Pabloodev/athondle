import { useState } from "react";
import styles from './Popup.module.css'
import { useEffect } from "react";

const Popup = () => {
  const [popupOn, setPopUpOn] = useState(false);

  useEffect(() => {
    setPopUpOn(true)
    setTimeout(() => {
      setPopUpOn(false)
    }, 3500);

  },[])

  

  return (
    popupOn && (
      <div className={styles.popup}>
        <p>Este jogo está sempre sendo atualizado para melhorar a experiência do jogador. Seu feedback é valioso para nós!</p>
      </div>
    )
  );
};

export default Popup;
