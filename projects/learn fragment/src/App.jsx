import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import React from 'react';
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const Fooditems = ['Water', 'Fruits', 'Roti', 'Vegetables', 'Juice'];
  return (
    <>
      <div className='food-heading'>Healthy Food </div>
      <FoodItems items={Fooditems}></FoodItems>
      <ErrorMessage items={Fooditems}></ErrorMessage>
    </>
  );
}

export default App;
