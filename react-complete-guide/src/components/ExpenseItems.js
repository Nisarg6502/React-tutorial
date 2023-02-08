import ExpenseDate from './ExpenseDate';
import './ExpenseItems.css';

function ExpenseItem(props) {
    // const expenseDate = new Date(2022, 4, 10);
    // const expenseTitle = 'First Book - The Anthem of My Heart';
    // const expenseAmount = 150;

    // <div>{props.date.toLocaleString('en-us', { month: 'long' })}</div> not a clean code



    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate> {/*props are used to send data to child nodes*/}
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
