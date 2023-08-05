import React, { useState, useRef } from "react";

import Card from "./UI/Card";
import Button from "./UI/Button";
import ErrorModal from "./UI/ErrorModal";
import Wrapper from "./Helpers/Wrapper";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age.'
      })
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age.'
      })
      return;
    }

    const newUser = {
      name: enteredName,
      age: enteredAge,
    };

    props.onSubmit(newUser);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null)
  }

  return (
    <Wrapper>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={styles.form}>
        <form onSubmit={submitHandler}>
          <div className={styles["form-control"]}>
            <p>
              <label htmlFor="name">Username</label>
              <input
                id="name"
                type="text"
                ref={nameInputRef}
              ></input>
            </p>
            <p>
              <label htmlFor="age">Age (Years)</label>
              <input
                id="age"
                type="number"
                ref={ageInputRef}
              ></input>
            </p>
          </div>
          <p className={styles["actions"]}>
            <Button type="Submit" >Add User</Button>
          </p>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;

