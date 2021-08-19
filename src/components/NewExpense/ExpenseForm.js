import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {

//   const [userInput, setUserInput] = useState({
//     inputTitle: "",
//     inputAmount: "",
//     inputDate: "",
//   });
const [inputTitle, setInputTitle] = useState('');
  const titleChangeHandler = (event) => {
      setInputTitle(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   inputTitle: event.target.value,
    // });
  };
  const [inputAmount, setinputAmount] = useState('');
  const amountChangeHandler = (event) => {
    setinputAmount(event.target.value);
    // setUserInput({
    //   //setInputmount(event.target.value)//if you have different state  then this
    //   ...userInput,
    //   inputAmount: event.target.value,
    // });

    // if you want to use previous state while updating then use this
    // setUserInput((prevState)=>{
    //     return {...prevState,inputAmount:event.target.value}
    // })

  };
  const [inputDate, setinputDate] = useState('');
  const dateChangeHandler = (event) => {
      setinputDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   inputDate: event.target.value,
    // });
  };
  const onSubmitHandler=(event)=>{
    event.preventDefault();
    const expenseData={
        title:inputTitle,
        amount:+inputAmount,
        date:new Date(inputDate),
    }
    props.onSaveExpenseData(expenseData);
    
  }
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={inputTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="1.00"
            steps="1.00"
            value={inputAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2021-12-31"
            value={inputDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new_expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
