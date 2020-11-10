import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        // pass props(dishes)
        super(props);
        
        // render with no details
        this.state = {
          selectedDish: null
        }
    }
        // when dish is selected
        onDishSelect(dish) {
          // update state
          this.setState({ selectedDish: dish});
        }

  renderDish(dish) {
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
  
  render() {
    // this is where props are passed
  const menu = this.props.dishes.map((dish) => {
      return (
        <div  className="col-12 col-md-5 m-1">
          {/* whenever this card is clicked onClick is triggered */}
          <Card key={dish.id}
            onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
  });

  return (
    <div className="container">
        <div className="row">
            {menu}
        </div>
        <div className="row">
          <div  className="col-12 col-md-5 m-1">
            {this.renderDish(this.state.selectedDish)}
          </div>
        </div>
    </div>
  );
  }
}



export default Menu;