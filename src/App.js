import foodsData from './foods.json';
import './App.css';
import React, { useState } from 'react';
import FoodBox from './Components/FoodBox/FoodBox';
import FoodForm from './Components/FoodForm/FoodForm';
import Search from './Components/Search/search';

function App() {
  const [foods, setFoods] = useState(foodsData);
  const [displayFood, setDisplayFood] = useState(foodsData)

  const addNewDish = (newDish) => {
    const updatedFoodList = [...foods, newDish];
    setFoods(updatedFoodList);
    setDisplayFood(updatedFoodList);
  };

  const searchFilter = (searchQuery) => {
    let filteredFood = foods.filter((dish) =>
    dish.name.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
    setDisplayFood(filteredFood);
  };

const deleteFood = (dishName) => {
  const filteredDish = foods.filter((dish) => {
    return dish.name !== dishName;
  });
  setDisplayFood(filteredDish);
};
  return (
    <div className="App">
      <h3>Food Items</h3>
      <Search search={searchFilter} />
      <FoodForm addDish={addNewDish} /> 
      {displayFood.map((dish) => {
        return <FoodBox dish={dish} clickToDelete={deleteFood} />;
      })}
    </div>
  );
}

export default App;
