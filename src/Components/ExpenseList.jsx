import React from "react";
import { useExpense } from "./ExpenseContext";

function ExpenseList() {
    const { state, dispatch } = useExpense();
  
    const handleDelete = (id) => {
      dispatch({
        type: 'DELETE_EXPENSE',
        payload: id,
      });
    };
  
    return (
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Expense List</h2>
        <ul>
          {state.transaction.map((expense) => (
            <li
              key={expense.id}
              className="border-2 px-6 py-4 rounded-md bg-blue-50 flex justify-between items-center mb-4 shadow-md"
            >
              <span className="text-blue-600">{expense.description}</span>
              <span className="text-green-600 font-semibold">Rs {expense.amount}</span>
              <button
                onClick={() => handleDelete(expense.id)}
                className="text-red-600 hover:text-red-800 focus:outline-none"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
 
  
  export default ExpenseList;
  
  
  