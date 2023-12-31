"use client"
import React, { useState } from 'react';
import { expenseType } from './types/expensTypes';
import ExpenseForm from './components/expenseForm';

const Expense = () => {
  const [expenses, setExpenses] = useState<expenseType[]>([]);
  const addExpense = (expense: expenseType) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
    console.log(expense);
  }
  return (
    <div>
      <h1 className='text-2xl font-bold mb-4 text-center pb-4 text-gray-500'>
      EXPENSE TRACKER
      </h1>
      <ExpenseForm onAddExpens ={addExpense}/>
    </div>
  );
};

export default Expense;