import { useState } from 'react';
import FoodBox from './components/Foodbox.jsx';
import './App.css';
import foods from './foods.json';
import {Row} from 'antd';
import AddFoodForm from './components/AddFoodForm.jsx';

function App() {
  const [food, setFood] = useState(foods);

  // function to add a new dish
  // this function will be passed to the AddFoodForm to create a new dish
  const addNewDish = (dish) => {
    const updatedFoodArray = [...food, dish];

    setFood(updatedFoodArray);
  }

  return (
    <div className="App">
      <h1>Food List</h1>
      <AddFoodForm addDish={addNewDish}/>
      <Row>
      {food.map((dish) => {
        return <FoodBox dish={dish} />;
      })}
      </Row>
     
    </div>
  );
}

export default App;
