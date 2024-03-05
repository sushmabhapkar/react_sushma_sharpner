import React from "react";
import './ExpenseItem.css';
const ExpenseItem=()=>
{

    const ExpenseDate=new Date(28-3-2020);
    const ExpenseTitle="Car Insurances";
    const ExpenseAmount="294.67";

   return(
   <div className="expense-item">
    <div>{ExpenseDate.toISOString()}</div>
     <div className="expense-item__description">
       <h2>{ExpenseTitle}</h2>
    </div>
      <div className="expense-item__price">${ExpenseAmount}</div>

   </div>
   
   );

}
export default ExpenseItem;