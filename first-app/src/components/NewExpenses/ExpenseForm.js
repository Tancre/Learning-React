import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // MULTIPLE STATES APPROACH
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // SINGLE STATE APPROACH
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmound: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // setUserInput({                        // SINGLE STATE
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    // setUserInput((prevState) => {         // SINGLE STATE DEPENDENT ON PREVIOUS VALUES
    //   return {
    //     ...prevState,
    //     enteredAmount: event.target.value,
    //   };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  // SINGLE HANDLER
  // const inputChangeHandler = (identifier, value) => {
  //   if (identifier === 'title') {
  //     setEnteredTitle(event.target.value);
  //   } else if (identifier === 'Date') {
  //     setEnteredDate(event.target.value);
  //   } else {
  //     setEnteredAmount(event.target.value);
  //   }
  // }

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
          {/* Single Handler
          <input type="text" onChange={(event) => inputChangeHandler('title', event.target.value)} />   */}
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
