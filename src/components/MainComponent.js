import React, {Component} from "react";
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import DishDetail from './DishdetailComponent';
import Header from "./Header";
import Footer from "./Footer";
import Home from "./HomeComponent";
import { Redirect, Route, Switch } from "react-router-dom";

class MainComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            dishes: DISHES
        }
    }
    render(){
        const HomePage = () => (<Home/>);
        return(
            <div>
                <Header/>
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}/>} />
                    <Redirect to="/home" />
                    <Home/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default MainComponent;
