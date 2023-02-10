import ExpenseDate from './ExpenseDate';
import './ExpenseItems.css';
import Card from '../UI/Card';
import React, { useState } from 'react'

const ExpenseItem = (props) => {
    // const expenseDate = new Date(2022, 4, 10);
    // const expenseTitle = 'First Book - The Anthem of My Heart';
    // const expenseAmount = 150;

    // <div>{props.date.toLocaleString('en-us', { month: 'long' })}</div> not a clean code

    const [title, setTitle] = useState(props.title)
    /*
        The React useState Hook allows us to track state in a function component.
        State generally refers to data or properties that need to be tracking in an application.

        useState accepts an initial state and returns two values:
        --->The current state.
        --->A function that updates the state.

        A separate state is called each time it is called and these states are managed behind the scenes by React. 
    */

    const clickHandler = () => {
        //title = 'Updated!' ---> Doesn't actually update on the screen but updates the variable in memory
        setTitle('Updated!') //works because this causes the component to be re-evaluated and hence during re-evaluation, the newly assigned value is picked up.
        console.log(title)
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate> {/*props are used to send data to child nodes*/}
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;
