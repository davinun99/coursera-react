import React, {Component} from "react";
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import DishDetail from './DishdetailComponent';
import Header from "./Header";
import Footer from "./Footer";

class MainComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        }
    }
    onDishSelect(dish){
        this.setState({
            ...this.state,
            selectedDish: dish
        });
    }
    render(){
        return(
            <div>
                <Header/>
                <Menu 
                    dishes={DISHES} 
                    onClickFn={ (dishId)=>this.onDishSelect(dishId) } 
                />
                <DishDetail dish={
                    (this.state.dishes.filter(dish=>dish.id === this.state.selectedDish))[0]
                }/>
                <Footer/>
            </div>
        );
    }
}

export default MainComponent;
