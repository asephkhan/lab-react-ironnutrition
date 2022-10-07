import { useState } from 'react';
import FoodBox from './components/Foodbox.jsx';
import './App.css';
import foods from './foods.json';
import { Row } from 'antd';
import AddFoodForm from './components/AddFoodForm.jsx';
import Search from './components/Search';

function App() {
  const [food, setFood] = useState(foods);

  // function to add a new dish
  // this function will be passed to the AddFoodForm to create a new dish
  const addNewDish = (dish) => {
    const updatedFoodArray = [...food, dish];

    setFood(updatedFoodArray);
  };

  // function to filter a dish
  //this function will be passed to the search coponent to as prop
  const searchFilter = (searchQuery) => {
    let filteredFood = food.filter((dish) => {
      return dish.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setFood(filteredFood);
    console.log(filteredFood);
  };

  // function to delete a fooditem
  const deleteDish = (dishId) => {
    const filteredFoodArr = food.filter((dish) => {
      return dish.name !== dishId;
    });
    setFood(filteredFoodArr);
  };

  return (
    <div className="App">
      <h1>Food List</h1>
      <AddFoodForm addDish={addNewDish} />
      <Search search={searchFilter} />
      <Row>
        {food.map((dish) => {
          return <FoodBox myDish={dish} deletedDish={deleteDish} />;
        })}
      </Row>
    </div>
  );
}

export default App;
