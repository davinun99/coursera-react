import React, { Component } from 'react';
import {  Button, Label, Modal, ModalBody, ModalHeader, Row, Col, Breadcrumb, BreadcrumbItem, Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, Errors, LocalForm } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import {FadeTransform, Fade, Stagger} from 'react-animation-components';

const minlength = (len)=>(val)=> (val) && val.length >= len;
const maxLength = (len)=>(val)=> !(val) || val.length <= len;

class CommentForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(values){
        this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
    }
    toggleModal(){
        this.setState({
            modalIsOpen: !this.state.modalIsOpen
        })
    }
    render(){
        return(
            <>
                <div className="row">
                    <button className="btn btn-secondary" onClick={this.toggleModal}>
                        <span className="fa fa-comment"></span> Comment
                    </button>
                </div>
                <Modal isOpen={this.state.modalIsOpen} toggle={this.toggleModal}>
                    <ModalHeader isOpen={this.state.modalIsOpen} toggle={this.toggleModal}>
                        Submit Comment
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Col xs="12">
                                    <Label htmlFor="rating">Rating</Label>
                                </Col>
                                <Col xs="12">
                                    <Control.select
                                        model=".rating"
                                        name="rating"
                                        className="form-control"
                                        id="rating"
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col xs="12">
                                    <Label htmlFor="author">Your Name</Label>
                                </Col>
                                <Col xs="12">
                                    <Control.text
                                        placeholder="Your Name"
                                        model=".author"
                                        name="author"
                                        className="form-control"
                                        id="author"
                                        validators={{
                                            minlength: minlength(3),
                                            maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            minlength:"Must be greater than 2 characters",
                                            maxLength:"Must be 15 characters or less"
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col xs="12">
                                    <Label htmlFor="comment">Comment</Label>
                                </Col>
                                <Col xs="12">
                                    <Control.textarea
                                        rows="6"
                                        model=".comment"
                                        name="comment"
                                        className="form-control"
                                        id="comment"
                                    />
                                </Col>
                            </Row>
                            <Button type="submit" color="primary"> 
                                Submit
                            </Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

function DishDetail(props){
    function renderDish(dish){
        return(
            <FadeTransform in transformProps={{exitTransform: 'scale(0.5) translateY(-50%)'}}>
                <Card>
                    <CardImg top src={baseUrl + dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        );
    }
    function renderComments(commentsArray, dishId){
        if(commentsArray){
            return(
                <div className="row">
                    <h4 className="ml-4">Comments</h4>
                    <ul>
                        <Stagger in>
                            {commentsArray.map(comment=>(
                                <Fade in>
                                    <li className="list-unstyled" key={comment.id}>
                                        <p>{comment.comment}</p>
                                        <p>-- {comment.author}, {new Date(comment.date).toDateString()}</p>
                                    </li>
                                </Fade>
                            ))}
                        </Stagger>
                    </ul>
                    <div className="col-12">
                        <CommentForm postComment={props.postComment}
                            dishId={dishId}
                        />
                    </div>
                </div> 
            );
        }else{
            return(
                <div></div>
            )
        }
    }
    if(props.dishesLoading){
        return(
            <div className="container">
                <div className="row">
                    <Loading/>
                </div>
            </div>
        );
    }else if(props.dishesErrorMessage){
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.dishesErrorMessage}</h4>
                </div>
            </div>
        );
    }
    if(props.dish){
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/menu">Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active >{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {renderDish(props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {renderComments(props.comments, props.dish.id)}
                    </div>
                </div>
            </div>
        );
    }else{
        return(
            <div></div>
        );
    }
    
}
export default DishDetail;