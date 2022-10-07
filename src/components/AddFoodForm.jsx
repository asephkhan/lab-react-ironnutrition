/* import { form } from 'antd'; */
import { useState } from 'react';

function AddFoodForm(props) {
  // states
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState(1);

  // functions to handle input
  const handleName = (e) => setName(e.target.value);
  const handleImage = (e) => setImage(e.target.value);
  const handleCalories = (e) => setCalories(e.target.value);
  const handleServings = (e) => setServings(e.target.value);

  // function to handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const newDish = { name, image, calories, servings };

    console.log('new dish', newDish);
    props.addDish(newDish);

    // Reset the states
    setName('');
    setImage('');
    setCalories('');
    setServings(1);
  };

  return (
    <div>
      <h1>Add Item</h1>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={name} onChange={handleName} />

        <label>Image:</label>
        <input type="text" name="image" value={image} onChange={handleImage} />

        <label>Calories:</label>
        <input
          type="number"
          name="calories"
          value={calories}
          onChange={handleCalories}
        />

        <label>Servings:</label>
        <input
          type="number"
          name="servings"
          value={servings}
          onChange={handleServings}
        />
        <button type="submit">Add a Dish</button>
      </form>
    </div>
  );
}

export default AddFoodForm;
