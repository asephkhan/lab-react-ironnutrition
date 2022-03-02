import React from 'react';
import { Card, Col, Button } from 'antd';

/* import foodsData from '../../foods.json' */

function FoodBox(props) {
  const { dish } = props;
  return (
    <Col>
      <Card title={dish.name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={dish.image} height={60} alt="food" />
        <p>Calories: {dish.calories}</p>
        <p>Servings: {dish.servings}</p>

        <Button onClick={() => props.clickToDelete(dish.name)} type="primary"> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
