import { Card, Col,  Button } from 'antd';

function Foodbox(props) {
  const { name, image, calories, servings } = props.myDish;
  return (
    <div>
      <Col>
        <Card title={name} style={{ width: 300, height: 300, margin: 10 }}>
          <img src={image} width={100} height={70} alt="orange pic" />
          <p>Calories: {calories}</p>
          <p>Servings: {servings}</p>
          <p>
            <b>Total Calories: {calories * servings} </b> kcal
          </p>
          <Button type="primary" onClick={()=> props.deletedDish(name)}>Delete</Button>
        </Card>
      </Col>
    </div>
  );
}

export default Foodbox;
