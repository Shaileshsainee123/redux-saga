import React, { useEffect } from 'react'
import {AddToCart, emptyCart, RemoveFromCart} from '../redux/action'
import { useDispatch, useSelector } from 'react-redux';
import { productList } from '../redux/productAction';
import { Button, Card } from 'react-bootstrap';

const Main = () => {
    const dispatch = useDispatch();
  const data = useSelector((state) =>state.ProductData);
  console.log(data,"Main Pagedata")
  
useEffect(()=>{
dispatch(productList());
},[])

  return (
<>

    <div className="App">

      <div>
        <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>
    
    </div>
    <div className="row cardWrapper">
    {data.length !== 0 && data.map((item) => {

      return(<>
 <div className="col-md-4 cards" key={item.id}>
            
            <Card className='card' >
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
              {item.description}
              </Card.Text>
              <Card.Text>
                Price : ₹ {item.price}
              </Card.Text>
              <Button variant="primary" onClick={() => dispatch(AddToCart(item))}>Add To Cart</Button>
              <Button variant="danger" style={{marginLeft:"10px"}} onClick={() => dispatch(RemoveFromCart(item.id))}>Remove  from  Cart</Button>

            </Card.Body>
          </Card>
          
        </div>
      </>)
       
        })}
        {/* <div className="col-md-4 cards">
          <Card className='card'>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Text>
                Price : $2000
              </Card.Text>
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 cards">
          <Card className='card'>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Text>
                Price : $2000
              </Card.Text>
              <Button
               variant="primary">Add To Cart</Button>
            </Card.Body>
          </Card>
        </div> */}
      </div>

      </>
 
  );
}

export default Main