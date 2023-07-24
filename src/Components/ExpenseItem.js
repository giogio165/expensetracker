import React from "react";

const ExpenseItem = ({ expenses }) => {
  console.log(expenses);
  return (
    <div className="ExpenseItem">
      {expenses.map((item) => (
        <div className="item-box" key={item.id}>
          <div>{item.name}</div>
          <div className="repurchase">{item.type}</div>
          {item.repurchase === true ? (
            <div className="repurchase">재구매</div>
          ) : (
            ""
          )}
          <div>{item.price}원</div>
          <div>{item.date.toLocaleString()}</div>
        </div>
      ))}
    </div>
  );
};

export default ExpenseItem;
