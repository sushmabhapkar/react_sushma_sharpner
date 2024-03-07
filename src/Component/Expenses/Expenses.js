import React,{ useState } from "react";
//import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";


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



     
     return(
        <div>
    <Card className="expenses">
    
          <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
          
          
    
           
    
           <ExpenseList items={filteredExpenses}/>
    
    </Card>
         </div>
    );
}
export default Expenses;