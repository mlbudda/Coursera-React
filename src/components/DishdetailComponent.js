import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, 
    ModalBody, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form'

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleComment = this.handleComment.bind(this);
  }
  
  toggleModal() {
    this.setState({
        isModalOpen: !this.state.isModalOpen
    });
  }
  
  handleComment(values) {
    console.log("Input values: " + JSON.stringify(values));
    alert("Input values: " + JSON.stringify(values));
    this.toggleModal();
  }

  render() {
    return (
      <div>
        <Button outline onClick={this.toggleModal}>
          <span className="fa fa-pencil-alt fa-lg "> Submit Comment</span>
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal} >Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleComment(values)}>
              <Row><Label htmlFor="rating" md={2}>Rating</Label></Row>
              <Row className="form-group">
                <Col>
                  <Control.select 
                    model=".rating"
                    name="rating"
                    className="form-control">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                  </Control.select>
                </Col>
              </Row>
              <Row><Label htmlFor="name" md={5}>Your Name</Label></Row>
              <Row className="form-group">
                <Col>
                  <Control.text 
                    model=".name"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15)
                    }} />
                  <Errors
                    className="text-danger"
                    model=".name"
                    show="touched"
                    messages={{
                      required: 'Required ',
                      minLength: 'Must be greater than 2 characters ',
                      maxLength: 'Must be 15 characters or less '
                    }} />
                </Col>
              </Row>
              <Row><Label htmlFor="comment" md={5}>Comment</Label></Row>
              <Row className="form-group">
                <Col>
                  <Control.textarea 
                    model=".comment" 
                    id="comment" 
                    name="comment"
                    row="6"
                    className="form-control" 
                    validators={{
                      required
                    }} />
                  <Errors
                    className="text-danger"
                    model=".comment"
                    show="touched"
                    messages={{
                      required: 'Required '
                    }} />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{size:10}}>
                  <Button type="submit" color="primary">
                    Submit
                  </Button>
                </Col>
              </Row>
            </LocalForm>


          </ModalBody>
        </Modal>
      </div>
    );
  };
}


  function RenderDish({ dish }) {
        return(
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg top src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
        );
  }

  function RenderComments({ comments }) {
    if (comments != null)
        return(
          <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <ul className="list-unstyled">
              {comments.map((comment) => {
                return (
                  <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', 
                { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                  </li>
                );
              })}
              </ul>
              <CommentForm />
          </div>
        );
    // or return empty div's
    else
        return(
          <CommentForm />
        );
  }
    const DishDetail = (props) => {
    if (props.dish != null)
      return (
        <div className="container">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
              <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>{props.dish.name}</h3>
              <hr />
            </div>
          </div>
          <div className="row">
            <RenderDish dish={props.dish} />
            <RenderComments comments={props.comments} />
          </div>
        </div>
      );
    else
        return (
          <div></div>
        );
    }



export default DishDetail;