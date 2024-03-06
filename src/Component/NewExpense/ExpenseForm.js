import React, { useState } from "react";
import './ExpenseForm.css';
const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');



    //function for the titleChangeHandler..............  
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

    };

    //function for the amountChangeHandler................
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);

    };

    //function for the dateChangeHandler

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);


    }

    const onSubmitHandler = (event) => {

        event.preventDefault();

        const ExpenseData =
        {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)

        };
        console.log(ExpenseData);
    };

    return <form onSubmit={onSubmitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text'
                    onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01"
                    onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min="2019-01-01" step="2022-12-31"
                    onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>

}
export default ExpenseForm;