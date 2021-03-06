import React from 'react'
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';
import {FadeTransform} from 'react-animation-components';
function RenderCard({item, isLoading, errorMessage}){
    if(isLoading){
        return(
            <Loading/>
        );
    }else if(errorMessage){
        return <h4>{errorMessage}</h4>;
    }else
        return(
            <FadeTransform in transformProps={{exitTransform: 'scale(0.5) translateY(-50%)'}}>
                <Card>
                    <CardImg src={baseUrl + item.image} alt={item.name} />
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                            {item.designation ? 
                                <CardSubtitle>{item.designation}</CardSubtitle>
                                : null
                            }
                        <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        );
}

const Home = (props) => {
    if (!props.leader || !props.dish || !props.promotion){
        return null;
    }
    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} isLoading={props.dishesLoading} errorMessage={props.dishesErrorMessage}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} isLoading={props.promosLoading} errorMessage={props.promosErrorMessage} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader}  isLoading={props.leaderLoading} errorMessage={props.leaderError}/>
                </div>
            </div>
        </div>
    )
}

export default Home
