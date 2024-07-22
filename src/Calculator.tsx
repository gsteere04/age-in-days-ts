import React, { useState } from "react";
import "./Calculator.css";

const Calculator: React.FC = () => {
  const [age, setAge] = useState<number | string>("");
  const [result, setResult] = useState<number | string>("");

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.valueAsNumber;
    setAge(isNaN(value) ? "" : value);
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();

    console.log("Age in days:", age);

    if (typeof age === "number") {
      const year = 365
      const ageInDays = age * year
      setResult(`Age in days: ${ageInDays.toFixed(2)} days.`)
    } else {
      setResult("Please enter valid information.  (Numbers for age)")
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <section>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            placeholder="Enter age in years..."
            onChange={handleAgeChange}
          />
        </section>
        <button type="submit">Calculate</button>
      </form>
      <div className="output-box">
        {result}
      </div>
    </>
  );
};

export default Calculator;
