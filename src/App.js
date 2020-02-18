import React from "react";
import "./styles.css";
import { FaArrowRight } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [bin, setBin] = React.useState("");
  const [response, setResponse] = React.useState(0);
  async function bin2Dec() {
    let index = 0;
    let decimalNumber = 0;
    let binValidation = new RegExp("^[0-1]{1,}$");

    //Verificando se o numero é binario
    if (!binValidation.test(bin)) {
      return toast.error("😔 Desculpa só aceitamos numeros 0 ou 1", {
        position: toast.POSITION.TOP_RIGHT
      });
    }

    for (let i = bin.length - 1; i >= 0; i--) {
      let n = parseInt(bin.charAt(i), 2) * Math.pow(2, index);
      index += 1;
      decimalNumber += n;
    }

    setResponse(decimalNumber);
  }
  return (
    <div className="container">
      <h1>Bin2Dec</h1>
      <div className="wrapper">
        <div>
          <textarea
            value={bin}
            onChange={e => setBin(e.target.value)}
            placeholder="Digite 0 ou 1"
          />
          <button onClick={bin2Dec}>
            <FaArrowRight size={16} />
          </button>
        </div>
        <div className="display">
          <p>{response}</p>
        </div>
      </div>
      <ToastContainer autoClose={2000} />
    </div>
  );
}
