import { React, useState } from "react";
import "./App.css";
import validator from "validator";

function App() {
  const [errorMessage, setErrorMessage] = useState("");

  function validateCreditCard(value) {
    if (!validator.isCreditCard(value)) {
      setErrorMessage("Invalid Card Number");
    } else {
      setErrorMessage("");
    }
  }

  return (
    <div className="App">
      <h2>Validating Credit Card in ReactJS</h2>

      <label>Enter Credit Card Number</label>
      <input
        type="text"
        onChange={(e) => validateCreditCard(e.target.value)}
      ></input>
      <p>{errorMessage}</p>
    </div>
  );
}

export default App;
