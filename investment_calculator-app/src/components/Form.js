import React, { useState } from "react";

import styles from './Form.module.css'

const initialUserInput = {
  currentSavings: 10000,
  contribution: 1200,
  expectedInterest: 7,
  investmentDuration: 10,
};

const Form = (props) => {
  const [userInput, setUserInput] = useState(initialUserInput);

  const submitHandler = (event) => {
    event.preventDefault();
    props.onCalculate(userInput);
  };

  const resetHandler = (event) => {
    setUserInput(initialUserInput);
  };

  const inputChangeHandler = (input, value) => {
    setUserInput((pervInput) => {
      return {
        ...userInput,
        [input]: +value,
      };
    });
  };

  return (
    <form className={styles["form"]} onSubmit={submitHandler}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={userInput["currentSavings"]}
            onChange={(event) => {
              inputChangeHandler("currentSavings", event.target.value);
            }}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={userInput["contribution"]}
            onChange={(event) => {
              inputChangeHandler("contribution", event.target.value);
            }}
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={userInput["expectedInterest"]}
            onChange={(event) => {
              inputChangeHandler("expectedInterest", event.target.value);
            }}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={userInput["investmentDuration"]}
            onChange={(event) => {
              inputChangeHandler("investmentDuration", event.target.value);
            }}
          />
        </p>
      </div>
      <p className={styles["actions"]}>
        <button type="reset" className={styles["buttonAlt"]} onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className={styles["button"]}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
