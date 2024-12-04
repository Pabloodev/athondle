import './SelectWorker.css'

export default function SelectWorker ({filtredWorker, handleClick}) {
  return (
    <div className="selectWorker">
          <ul>
            {filtredWorker.map((worker) => (
              <li key={worker.id}>
                <button onClick={() => handleClick(worker)}>
                  <img src={worker.img} alt="" />
                  <span>{worker.nome}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
  )
}