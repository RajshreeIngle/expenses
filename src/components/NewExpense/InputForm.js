import React, { useState } from 'react'
import './InputForm.css'

export default function InputForm(props) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const enteredTitleHandler =(event) =>{
        setEnteredTitle(event.target.value);
    }
    const enteredAmountHandler =(event) =>{
        setEnteredAmount(event.target.value);
    }
    const enteredDateHandler =(event) =>{
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) =>{
        event.preventDefault();
        const expenseData ={
            title : enteredTitle,
            amount : +enteredAmount,
            date : new Date(enteredDate)
        };
        console.log(expenseData);
        props.onSaveNewExpense(expenseData);
        setEnteredAmount('');
        setEnteredTitle('');
        setEnteredDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value = {enteredTitle} onChange = {enteredTitleHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min='0.01' step='0.01' value={enteredAmount} onChange = {enteredAmountHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={enteredDateHandler}/>
                </div>
                <div className='new-expense__actions'>
                    <button type='button' onClick={props.onCancle}>Cancle</button>
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    )
}

