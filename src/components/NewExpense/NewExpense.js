import React from 'react'
import InputForm from './InputForm'
import './NewExpense.css'

export default function NewExpense(props) {
  const saveNewExpenseHandler = (expenseData) =>{
    console.log("in NewExpense.js -----" + expenseData);
    props.onAddExpense(expenseData);
  }

  return (
    <div className='new-expense'>
      <InputForm onSaveNewExpense = {saveNewExpenseHandler}/>
     </div>
  )
}
