import React, { useState } from 'react';
import { useExpense } from './ExpenseContext';


function ExpenseForm() {
    const { dispatch } = useExpense();
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
  
    const handleSubmit = (e) => {
        e.preventDefault();
      
        console.log('Submitting form with values:', description, amount);
      
        if (description.trim() === '' || isNaN(amount) || amount <= 0) {
          return;
        }
      
        dispatch({
          type: 'ADD_EXPENSE',
          payload: {
            description: description,
            amount: parseFloat(amount),
          },
        });
      
        
        setDescription('');
        setAmount('');
      };
     
  
    return (
      <div className="mt-9 bg-gray-100 my-div bg-gradient-to-br from-purple-400 to-pink-500 p-6 rounded-md shadow-lg hover:shadow-xl">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <label className="flex flex-col">
            <span className="mb-2 text-gray-700">Name:</span>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border-2 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-2 text-gray-700">Cost:</span>
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border-2 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
            />
          </label>
          <button
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-6 py-3 rounded-full transition-transform transform hover:scale-105 hover:shadow-md"
            type="submit"
          >
            Save
          </button>
        </form>
      </div>
    );
  }
  
  export default ExpenseForm;
  