import React, {Component} from "react";
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';
import DishDetail from './DishdetailComponent';
import Header from "./Header";
import Footer from "./Footer";
import Home from "./HomeComponent";
import { Redirect, Route, Switch } from "react-router-dom";
import Contact from "./ContactComponent";

class MainComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            leaders: LEADERS,
            promotions: PROMOTIONS
        }
    }
    render(){
        const HomePage = () => (
            <Home 
                dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                leader={this.state.leaders.filter((leader) => leader.featured)[0]}
            />
        );
        const DishWithID = ({match})=>(
            <DishDetail 
                dish={this.state.dishes.filter( dish=>dish.id === parseInt(match.params.dishId, 10) )[0]}
                comments={this.state.comments.filter( comment=>comment.dishId === parseInt(match.params.dishId, 10) )}
            />
        );
        return(
            <div>
                <Header/>
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}/>} />
                    <Route path="/menu/:dishId" component={DishWithID} />
                    <Route exact path="/contactus" component={Contact} />
                    <Redirect to="/home" />
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default MainComponent;