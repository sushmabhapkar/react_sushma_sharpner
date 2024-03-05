import React,{useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
 const[isDelete,setIsDelete]=useState(false);

 const deleteHandler=()=>
 {

    setIsDelete(true);
 };
 if(isDelete)
 {
    return null;
 }
  

    return (
        <div>
        <Card className="expense-item" id={`expenses-${props.id}`}>
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
                <button onClick={deleteHandler}>Delete Expense</button>
            </div>
            
        </Card>
    </div>
    );
}
export default ExpenseItem;