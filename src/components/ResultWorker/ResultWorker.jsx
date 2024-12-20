import "./ResultWorker.css";

export default function ResultWorker({ workerChoosed, checkAttributes, symbolAge }) {
  return (
    <div className="resultContainer">
      <ul className="resultListContainer">
        <li className="labelList">
          <span className="boxLabel">Funcionário</span>
          <span className="boxLabel">Sexo</span>
          <span className="boxLabel">Setor</span>
          <span className="boxLabel">Idade</span>
          <span className="boxLabel">Cargo</span>
        </li>
      </ul>
      <ul className="resultListContainer containerResultList">
        {workerChoosed.map((worker) => {
          const result = checkAttributes(worker);
          return (
            <li className="resultList" key={worker.id}>
              <img className="boxImg" src={worker.img} alt="" />
              <span className={result.sexo ? "correct box" : "incorrect box"}>
                {worker.sexo}
              </span>
              <span className={result.setor ? "correct box" : "incorrect box"}>
                {worker.setor}
              </span>
              <span className={result.idade ? "correct box" : "incorrect box"}>
                {worker.idade + symbolAge}
              </span>
              <span className={result.cargo ? "correct box" : "incorrect box"}>
                {worker.cargo}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
