import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Rating from './Rating'

const SingleProduct = ({prod}) => {
  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={prod.image} alt={prod.name} />
        <Card.Body>
          <Card.Title>{prod.name} </Card.Title>
          <Card.Subtitle>
            <span>RS- {prod.price.split(".")[0]}</span>
            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days Delivery </div>
            )}

            <Rating rating={prod.rating} />
          </Card.Subtitle>
          <Button variant="danger">Remove From cart</Button>
          <Button disabled={prod.inStock}>
            {!prod.inStock ? "Out of Stock" : "Add to cart"}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SingleProduct