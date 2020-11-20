import React, {Component} from "react";
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from "./Header";
import Footer from "./Footer";
import Home from "./HomeComponent";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import Contact from "./ContactComponent";
import About from "./AboutUs";
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return{
        dishes: state.dishes,
        comments: state.comments,
        leaders: state.leaders,
        promotions: state.promotions
    }           
}

class MainComponent extends Component {
    render(){
        const HomePage = () => (
            <Home 
                dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                leader={this.props.leaders.filter((leader) => leader.featured)[0]}
            />
        );
        const DishWithID = ({match})=>(
            <DishDetail 
                dish={this.props.dishes.filter( dish=>dish.id === parseInt(match.params.dishId, 10) )[0]}
                comments={this.props.comments.filter( comment=>comment.dishId === parseInt(match.params.dishId, 10) )}
            />
        );
        return(
            <div>
                <Header/>
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={()=><Menu dishes={this.props.dishes}/>} />
                    <Route path="/menu/:dishId" component={DishWithID} />
                    <Route exact path="/contactus" component={Contact} />
                    <Route path="/aboutus" component={()=><About leaders={this.props.leaders} />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(MainComponent));
