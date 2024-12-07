import './InputWorker.css'
import { SendHorizontal} from "lucide-react";

export default function InputWorker ({ inputedWorker, handleChange }) {
  return (
    <div className="inputContainer">
        <h1>Advinhe o funcionário de hoje</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            className="inputWorker"
            value={inputedWorker}
            onChange={handleChange}
            type="text"
            placeholder="Comece digitando um funcionário"
          />
          <button className="sendButton">
            <SendHorizontal color="#fff" />
          </button>
        </form>
      </div>
  )
}