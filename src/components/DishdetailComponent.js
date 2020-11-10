import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
class DishDetail extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    renderDish(dish){
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }
    renderComments(commentsArray){
        console.log(commentsArray);
        if(commentsArray){
            return(
                <div className="row">
                    <h4 className="ml-4">Comments</h4>
                    <ul>
                        {commentsArray.map(comment=>(
                            <li className="list-unstyled" key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author}, {new Date(comment.date).toDateString()}</p>
                            </li>
                        ))}
                    </ul>
                </div>    
            );
        }else{
            return(
                <div></div>
            )
        }
    }
    render(){
        if(this.props.dish){
            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
            );
        }else{
            return(
                <div></div>
            );
        }
    }
}
export default DishDetail;