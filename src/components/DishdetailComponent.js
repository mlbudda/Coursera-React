import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';



  function RenderDish({ dish }) {
    // if we have dish selected, return
    if (dish != null)
        return(
          <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
        );
    // or return empty div's
    else
        return(
            <div></div>
        );
  }

  function RenderComments({ dish }) {
    if (dish != null)
        return(
          <div className="comments">
          <h4>Comments</h4>
            {dish.comments.map((comment1) => (
              <p id={comment1.id}>

              {comment1.comment} <br/>
              
              -- {comment1.author}, 
              {new Intl.DateTimeFormat('en-US', 
              { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment1.date)))} 

              </p>
              
            ))}
          </div>
        );
    // or return empty div's
    else
        return(
            <div></div>
        );
  }
    const DishDetail = (props) => {
    return (
        <div className="container">
          <div className="row">
            <div  className="col-12 col-md-5 m-1">
              <RenderDish dish={props.dish} />
            </div>
            <div  className="col-12 col-md-5 m-1">
              <RenderComments dish={props.dish} />
            </div>
          </div>
        </div>
    );
    }



export default DishDetail;