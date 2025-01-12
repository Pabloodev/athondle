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
        <p>Este jogo está sempre atualizando para melhorar a usuabilidade do jogador, seu feedback é valioso para nós!</p>
      </div>
    )
  );
};

export default Popup;
