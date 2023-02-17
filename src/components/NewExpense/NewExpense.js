import React,{useState} from 'react'
import InputForm from './InputForm'
import './NewExpense.css'

export default function NewExpense(props) {

  const[isEditing, setIsEditing] = useState(false);

  const saveNewExpenseHandler = (expenseData) => {
    // console.log("in NewExpense.js -----" + expenseData);
    props.onAddExpense(expenseData);
  }

  const showInputFormHandler=() =>{
    setIsEditing(true);
  }
  const stopEditingHandler=() =>{
    setIsEditing(false);
  }

  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={showInputFormHandler}>Add new expense</button>}
      {isEditing && <InputForm onSaveNewExpense = {saveNewExpenseHandler} onCancle={stopEditingHandler}/>}

    </div>
  )
}
