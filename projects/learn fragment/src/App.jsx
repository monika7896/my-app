import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import React from 'react';
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput"

function App() {
  const Fooditems = ['Water', 'Fruits', 'Roti', 'Vegetables', 'Juice'];
  
  const handleOnChange =(event) =>{
    console.log(event.target.value)}
  return (
  <>
    <Container>
      <h1 className='food-heading'>Healthy Food </h1>
      <FoodInput handleOnChange={handleOnChange}></FoodInput>
      <FoodItems items={Fooditems}></FoodItems>
      <ErrorMessage items={Fooditems}></ErrorMessage>
    </Container>
    <Container>

    <p>Above is the list of healthy foods </p>
    </Container>

    </>
  );
}

export default App;
