import "./App.css";
import ExpenseForm from "./Components/ExpenseForm";
import ExpenseList from "./Components/ExpenseList";
import FilterForm from "./Components/FilterForm";

function App() {
  const expenses = [
    {
      id: 1,
      name: "chocolate",
      price: 2660,
      type: "food",
      date: new Date(),
      memo: "hoooha",
      repurchase: true,
    },
    {
      id: 2,
      name: "candy",
      price: 3000,
      type: "food",
      date: new Date(),
      memo: "hoooha",
      repurchase: false,
    },
  ];
  return (
    <div className="App">
      <div className="title">
        <div>돼지 가계부</div>
        <div className="pig-img"></div>
      </div>

      <ExpenseForm />
      <FilterForm />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
