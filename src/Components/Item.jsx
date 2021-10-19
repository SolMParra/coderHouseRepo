import React from "react";
import { Card } from 'react-bootstrap';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom'

const Item = ({ id, image, name, precio, stock }) => {
  const onAdd = () => { }
  return (
    <Card style={{ width: "25rem" }}>
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Link to={`/${id}`}><Card.Title>{name}</Card.Title></Link>
        <Card.Text>
          ${precio} Stock:{stock}
        </Card.Text>
        <div>
          <ItemCount stock={stock} onAdd={onAdd} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default Item;