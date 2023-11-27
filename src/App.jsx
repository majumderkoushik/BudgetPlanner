import { useState } from 'react'
import './App.css'
import { ExpenseProvider } from './Components/ExpenseContext'
import Balance from './Components/Balance'
import ExpenseList from './Components/ExpenseList'
import ExpenseForm from './Components/ExpenseForm'


function App() {
  

  return (
    <>
      <div className="px-4 md:px-8 lg:px-16 xl:px-24 flex justify-center flex-col bg-slate-400">
  <ExpenseProvider>
    <h1 className="text-5xl font-semibold mb-8">My Budget Planner</h1>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="col-span-2">
        <Balance />
      </div>
      <div className="col-span-1">
        <ExpenseForm />
      </div>
      <div className="col-span-3">
        <ExpenseList />
      </div>
    </div>
  </ExpenseProvider>
</div>

    </>
  )
}

export default App
