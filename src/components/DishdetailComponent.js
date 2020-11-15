import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

function DishDetail(props){
    function renderDish(dish){
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
    function renderComments(commentsArray){
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
                        {renderComments(props.comments)}
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