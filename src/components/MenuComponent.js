import React from 'react'
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Loading } from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl';

function RenderMenuItem(props){
    const menu = props.dishes.dishes.map( dish => (
        <div key={dish.id} className="col-12 col-md-5 m-1">
            <Card>
                <Link to={`/menu/${dish.id}`} >
                    <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name}/>
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>
        </div>
    ));
    if(props.dishes.isLoading){
        return(
            <div className="container">
                <div className="row">
                    <Loading/>
                </div>
            </div>
            
        );
    }else if(props.dishes.errorMessage){
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.dishes.errorMessage}</h4>
                </div>
            </div>
        );
    }
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/home">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active >Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr/>
                </div>
            </div>
            <div className="row">
                {menu}
            </div>
        </div>
    );
}
export default RenderMenuItem;