import { Button, Form } from 'antd';

import React, { useState} from 'react'


function FoodForm(props) {

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState('');
    const [servings, setServings] = useState('');


    const handleNameInput = (e) => setName(e.target.value);
    const handleImageInput = (e) => setImage(e.target.value);
    const handleCaloriesInput = (e) => setCalories(e.target.value);
    const handleServingsInput = (e) => setServings(e.target.value);


    const handleSubmit = (e) => {
        console.log('bananas')
        e.preventDefault();
        const randomId = Math.random() * 1000000000;
        const newDish = { _id: randomId, name, image, calories, servings };

       props.addDish(newDish)
        setName('');
        setImage('');
        setCalories(0);
        setServings(0);
    };
  return (
    <div>
        <h2>Add Dish</h2>
        <form onSubmit={handleSubmit}>

        <label>Name:</label>
        <input value={name} type="text" onChange={handleNameInput} />
        
        <label>Image:</label>
        <input value={image} type="text" onChange={handleImageInput} />

        <label>Calories:</label>
        <input value={calories} type="number" onChange={handleCaloriesInput} />

        <label>Servings:</label>
        <input value={servings} type="number" onChange={handleServingsInput} />

       <button type='submit'> create </button> 
      </form>  
    </div>
  )
}

export default FoodForm;