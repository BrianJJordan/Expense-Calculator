import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  // State to store expenses
  const [expenses, setExpenses] = useState([]);
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");

  // Handle form submission
  const addExpense = (e) => {
    e.preventDefault();
    if (!expenseName || !expenseAmount) return;

    // Add new expense to list
    setExpenses([...expenses, { name: expenseName, amount: parseFloat(expenseAmount) }]);

    // Clear input fields
    setExpenseName("");
    setExpenseAmount("");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h1>Expense Tracker</h1>
      
      {/* Expense Input Form */}
      <form onSubmit={addExpense} style={{ marginBottom: "20px" }}>
        <input 
          type="text" 
          placeholder="Expense Name" 
          value={expenseName} 
          onChange={(e) => setExpenseName(e.target.value)} 
          required
        />
        <input 
          type="number" 
          placeholder="Amount" 
          value={expenseAmount} 
          onChange={(e) => setExpenseAmount(e.target.value)} 
          required
        />
        <button type="submit">Add Expense</button>
      </form>

      {/* Expense List */}
      <h2>Expenses</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.name}: ${expense.amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
