import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';


class DishDetail extends Component {
  
  renderDish(dish) {
    // if we have dish selected, return
    if (dish != null)
        return(
          <Card>
          <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
          <CardBody>
            <CardTitle>{this.props.dish.name}</CardTitle>
            <CardText>{this.props.dish.description}</CardText>
          </CardBody>
        </Card>
        );
    // or return empty div's
    else
        return(
            <div></div>
        );
  }
// I need to find a way to map() comments
  renderComments(dish) {
    if (dish != null)
        return(
          <div className="comments">
          <h4>Comments</h4>
            {this.props.dish.comments.map((comment1) => (
              <p>

              {comment1.comment} <br/>
              
              -- {comment1.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment1.date)))} 

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
  render() {
    return (
      <div className="row">
      <div  className="col-12 col-md-5 m-1">
      {this.renderDish(this.props.dish)}
      </div>
      <div  className="col-12 col-md-5 m-1">
      {/* {this.renderComments(this.props.dish)} */}
      {this.renderComments(this.props.dish)}
      </div>
    </div>


    );
  }
}

export default DishDetail;