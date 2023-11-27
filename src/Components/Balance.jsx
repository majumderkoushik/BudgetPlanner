import React from 'react'
import { useExpense } from './ExpenseContext';

function Balance() {
    const { state } = useExpense();
  
    return (
      <div className="flex mt-12 space-x-4">
        <div className="flex-1">
          <h3 className="border-2 p-2 text-xl font-medium text-gray-600 bg-gray-100 rounded-lg border-gray-300">
            Budget: Rs {state.totalMoney}
          </h3>
        </div>
        <div className="flex-1">
          <h3 className="border-2 p-2 text-xl font-medium text-green-700 bg-gray-100 rounded-lg border-gray-300">
            Spent so far: Rs {state.spent}
          </h3>
        </div>
        <div className="flex-1">
          <h3 className="border-2 p-2 text-xl font-medium text-gray-600 bg-blue-200 rounded-lg border-gray-300">
            Remaining: Rs {state.saving}
          </h3>
        </div>
      </div>
    );
  }
  
 
  

export default Balance;