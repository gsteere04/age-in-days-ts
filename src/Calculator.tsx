import React, { useState } from "react";
import "./Calculator.css";

/**
 * Calculator component for calculating the age in days based on the input of years
 */

const Calculator: React.FC = () => {
  // State to store the age input value
  const [age, setAge] = useState<number | string>("");
  // State to store the result, from the calculations
  const [result, setResult] = useState<number | string>("");

/**
 * Handles the change event for the age input. 
 * @param {React.ChangeEvent<HTMLInputElement>} event - The input change event
 */
  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    // Parses the input to be strictly a number.
    const value = event.target.valueAsNumber;
    // Sets the age state, if it is NaN, to be an empty string.  (This fixes NaN error)
    setAge(isNaN(value) ? "" : value);
  };

  /**
   * Handles the change event for the submit button.
   * @param {React.ChangeEvent<HTMLFormElement>} event - The submit change event
   */
  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
    // Prevents default form submit behavior, allowing our script to handle the form submission.
    event.preventDefault();
    // Simple log to log our age in days.
    console.log("Age in days:", age);
    // Checks to see if age is of type number
    if (typeof age === "number") {
      // Creates a year variable to multiply the age in years to get age in days.  (Might remove later)
      const year = 365
      // The math calculating the age in days.
      const ageInDays = age * year
      // Sets the result to be the variable ageInDays, and fixes the decimal to be 2 spaces.
      setResult(`Age in days: ${ageInDays.toFixed(2)} days.`)
    } else {
      // Catches invalid information and request it again
      setResult("Please enter valid information.  (Numbers for age)")
    }
  };

  return (
    <>{/* Form for age input and submission */}
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
      {/* An output box to display calculated results. */}
      <div className="output-box">
        {result}
      </div>
    </>
  );
};

// Exports the component to be used in App.tsx, then Main.tsx
export default Calculator;
