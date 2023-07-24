import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses }) => {
  return (
    <div>
      <ExpenseItem expenses={expenses} />
    </div>
  );
};

export default ExpenseList;
