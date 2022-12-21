import React from "react";
import { Card, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const result = useSelector((state) => state.cartData);
  const amount = result.length && result.map((item)=>item.price).reduce((prev,next)=>prev+next)
  console.log(amount)
  return (
    <div>
      <Link to="/">
        <h1 className="backto">Back to product List</h1>
      </Link>
      <h1 style={{ textAlign: "center", fontWeight: "bold", marginTop: "5%" }}>
        Cart Page{" "}
      </h1>
      <div className="tabledata">
       <div className="row">
        <div className="col-md-8">
        <Table striped bordered hover size="sm" className="cartDataList">
          <thead>
            <tr>
              <th>S.no.</th>
              <th>Product name</th>
              <th>Description</th>

              <th>Price</th>
              <th>Category</th>
              <th>Brand</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {result.map((item, index) => {
              return (
                <>
                  <tr key={index}>
                    <td>{(index = index + 1)}</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.price}</td>
                    <td>{item.category}</td>
                    <td>{item.brand}</td>
                    <td>
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{
                          height: "100px",
                          width: "150px",
                          textAlign: "center",
                        }}
                      />
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>
        </div>
        <div className="col-md-4">
        <Card>
      <Card.Header>Details</Card.Header>
      <Card.Body>
        <div className="ProductCunter">
          <span className="title">Amount</span><span className="data">{amount}</span>
        </div>
        <div className="ProductCunter">
          <span className="title">Discount</span><span className="data">{amount/10}</span>
        </div>
        
        <hr/>
        <div className="ProductCunter">
          <span className="title">Total</span><span className="data">{amount-amount/10}</span>
        </div>
      </Card.Body>
    </Card>
        </div>
       </div>

       
      </div>
    </div>
  );
};

export default Cart;
