import './ExpenseItems.css';

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>10th April 2022</div>
            <div className="expense-item__description">
                <h2>First Book - The Anthem of My Heart</h2>
                <div className="expense-item__price">150 Rupees</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
