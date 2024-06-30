import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  // let foodItems = [];
  // let foodItems = ["Sabzi", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];
  // let [textToShow, setTextState] = useState();
  let [foodItems, setFoodItems] = useState([]);

  // const handleChange = (event) => {
  //   setTextState(event.target.value);
  // };

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      console.log(foodItems);
    }
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy food</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        {/* <p>{textToShow}</p> */}
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
    </>
  );
}

export default App;
