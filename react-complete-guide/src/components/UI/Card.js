import './Card.css'

const Card = (props) => {
    const classes = 'card ' + props.className //used so that children props' classes can be 
    //utilised by parent prop a.k.a these cards compistions. Here we have used classnames of 
    //Expense.js and ExpenseItems.js which is contained in props.classNames
    return (
        <div className={classes}>
            {props.children} {/*props.children is a special prop, automatically passed to every 
            component, that can be used to render the content included between the opening and 
            closing tags when invoking a component.  */}
        </div>
    )
}

export default Card;