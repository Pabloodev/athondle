import "./Athondle.css";
import Header from "./Header/Header";
import InputWorker from "./InputWorker/InputWorker";
import SelectWorker from "./SelectWorker/SelectWorker";
import ResultWorker from "./ResultWorker/ResultWorker";

import { useState, useEffect } from "react";
import { SquareChevronUp } from "lucide-react";

export default function Athondle() {
  const [data, setData] = useState([]);
  const [inputedWorker, setInputedWorker] = useState("");
  const [filtredWorker, setFiltredWorker] = useState([]);
  const [dailyWorker, setDailyWorker] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [workerChoosed, setWorkerChoosed] = useState([]);
  const [winMessage, setWinMessage] = useState("");


  useEffect(() => {
    const fetchWorkers = async () => {
      try {
        const response = await fetch("athondle/db.json");
        const data = await response.json();
        setData(data.workers);
        setDailyWorker(data.daily);
      } catch (error) {
        console.error("Erro ao carregar os dados:", error);
      }
    };
    fetchWorkers();
  }, []);


  const checkAttributes = (worker) => {
    if (!dailyWorker) return;

    return {
      nome: worker.nome === dailyWorker.nome,
      sexo: worker.sexo === dailyWorker.sexo,
      setor: worker.setor === dailyWorker.setor,
      idade: worker.idade === dailyWorker.idade,
      cargo: worker.cargo === dailyWorker.cargo,
    };
  };


  const checkIfCorrect = (worker) => {
    if (!dailyWorker) return false;

    return (
      worker.nome === dailyWorker.nome &&
      worker.sexo === dailyWorker.sexo &&
      worker.setor === dailyWorker.setor &&
      worker.idade === dailyWorker.idade &&
      worker.cargo === dailyWorker.cargo
    );
  };

  const handleChange = (e) => {
    const newInputedValue = e.target.value;
    setInputedWorker(newInputedValue);
    if (newInputedValue.trim() !== "") {
      setFiltredWorker(
        data.filter((worker) =>
          worker.nome.toLowerCase().startsWith(newInputedValue.toLowerCase())
        )
      );
    } else {
      setFiltredWorker([]);
    }
  };

  const handleClick = (worker) => {
    setIsClicked(true);

    if (!workerChoosed.includes(worker)) {
      setWorkerChoosed((prevChoosed) => [...prevChoosed, worker]);
    }

    if (checkIfCorrect(worker)) {
      setWinMessage("Vitória");
    }

    setInputedWorker("");
    setFiltredWorker([]);
  };

  return (
    <div className="gameContainer">
      <Header />
      <InputWorker inputedWorker={inputedWorker} handleChange={handleChange}/>
      {filtredWorker.length > 0 && (
        <SelectWorker filtredWorker={filtredWorker} handleClick={handleClick}/>
      )}
      {isClicked && (
        <ResultWorker workerChoosed={workerChoosed} checkAttributes={checkAttributes}/>
      )}
      
      {winMessage && (
        <div className="winMessage">
          <h2>Vitória</h2>
          <span>Você acertou!</span>
          <div className="titleWinMessage">
            <h3>{dailyWorker.nome}</h3>
            <img src={dailyWorker.img} alt="" />
          </div>
          <span className="tomorrowMessage">Jogue novamente amanhã</span>
        </div>
      )}

      <div>
        <button className="buttonUp">
          <a href="#">
            <SquareChevronUp color="#fff" />
          </a>
        </button>
      </div>

      <span className="footerMsg">code by pablodev &copy;</span>
    </div>
  );
}
