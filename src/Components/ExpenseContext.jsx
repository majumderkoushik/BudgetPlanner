import React,{createContext,useReducer,useContext}  from 'react'

const ExpenseContext = createContext();

const initialState = {
  totalMoney: 40000,
  spent: 0,
  saving: 40000,
  transaction: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      const newSpent = state.spent + action.payload.amount;
      const newSaving = state.saving - action.payload.amount;
      const newTransaction = {
        id: state.transaction.length + 1,
        description: action.payload.description,
        amount: action.payload.amount,
      };
      return {
        ...state,
        spent: newSpent,
        saving: newSaving,
        transaction: [...state.transaction, newTransaction],
      };
    
    case 'DELETE_EXPENSE':
      const deletedExpense = state.transaction.find(expense => expense.id === action.payload);
      if (!deletedExpense) {
        return state;
      }
      const updatedSpent = state.spent - deletedExpense.amount;
      const updatedSaving = state.saving + deletedExpense.amount;
      const updatedTransaction = state.transaction.filter(expense => expense.id !== action.payload);

      return {
        ...state,
        spent: updatedSpent,
        saving: updatedSaving,
        transaction: updatedTransaction,
      };
    
    default:
      return state;
  }
};

export const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ExpenseContext.Provider value={{ state, dispatch }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpense = () => {
  const context = useContext(ExpenseContext);
  if (!context) {
    throw new Error("useExpense must be used within an ExpenseProvider");
  }
  return context;
};
