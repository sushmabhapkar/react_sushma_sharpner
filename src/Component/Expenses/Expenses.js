import React,{ useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props)
{
   
    const [filteredYear,setfilteredYear]=useState('');
    const filterChangeHandler=selectedYear=>
{
    setfilteredYear(selectedYear);
}

const filteredExpenses=props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear;
});


     let expensesContent=<p style={{ color: 'white' }}>No Expenses found.</p>;

     if(filteredExpenses.length>0)
     {
        expensesContent=filteredExpenses.map((expense)=>(

            <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        />
        ))
     }


return(
    <div>
<Card className="expenses">

<ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>


{expensesContent}
    </Card>
    </div>
);
}
export default Expenses;