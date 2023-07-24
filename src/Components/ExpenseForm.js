import React, { useState } from "react";

const ExpenseForm = () => {
  const [expenseData, setExpenseData] = useState({
    name: "",
    date: "",
    price: "",
    type: "",
    repurchase: false,
  });
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setExpenseData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    setExpenseData({
      name: "",
      date: "",
      price: "",
      type: "",
      repurchase: false,
    });
  };
  return (
    <div className="ExpenseForm">
      <form onSubmit={handleSubmit}>
        <label>
          이름:
          <input
            type="text"
            name="name"
            value={expenseData.name}
            onChange={handleChange}
          />
        </label>

        <label>
          <input
            type="date"
            name="date"
            value={expenseData.date}
            onChange={handleChange}
          />
        </label>

        <label>
          가격:
          <input
            type="number"
            name="price"
            value={expenseData.price}
            onChange={handleChange}
          />
        </label>

        <label>
          품목:
          <input
            type="text"
            name="type"
            value={expenseData.type}
            onChange={handleChange}
          />
        </label>

        <label>
          재구매:
          <input
            type="radio"
            name="repurchase"
            checked={expenseData.repurchase}
            onChange={handleChange}
          />
        </label>

        <button type="submit">저장</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
