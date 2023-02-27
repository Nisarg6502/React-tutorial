import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

    const SubmitExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        // console.log(expenseData)
        props.onAddExpense(expenseData)//passing data from child to parent
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSubmitExpenseData={SubmitExpenseData} />
        </div>
    )
}

export default NewExpense;