import React, { useState } from 'react'
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

export default function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("2020")

    const filterSelectHandler = (selectedYear) => {
        console.log("Year selected = " + selectedYear);
        setFilteredYear(selectedYear)
    }

    return (
        <Card className='expenses'>
            <ExpensesFilter filterValue={filteredYear} onFilterSelect={filterSelectHandler} />
            {props.expArr.map((expense) => <ExpenseItem title={expense.title} price={expense.amount} date={expense.date} /> )}

            {/* <ExpenseItem title={props.expArr[0].title} price={props.expArr[0].amount} date={props.expArr[0].date} />
            <ExpenseItem title={props.expArr[1].title} price={props.expArr[1].amount} date={props.expArr[1].date} />
            <ExpenseItem title={props.expArr[2].title} price={props.expArr[2].amount} date={props.expArr[2].date} />
            <ExpenseItem title={props.expArr[3].title} price={props.expArr[3].amount} date={props.expArr[3].date} /> */}
        </Card>
    );
}
