import './ExpenseItems.css';

function ExpenseItem(props) {
    // const expenseDate = new Date(2022, 4, 10);
    // const expenseTitle = 'First Book - The Anthem of My Heart';
    // const expenseAmount = 150;

    return (
        <div className="expense-item">
            <div>{props.date.toDateString()}</div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
