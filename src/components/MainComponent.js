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
import {actions} from 'react-redux-form';
import {postComment, fetchDishes, fetchComments, fetchPromos} from '../redux/ActionCreators';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
const mapStateToProps = state => {
    return{
        dishes: state.dishes,
        comments: state.comments,
        leaders: state.leaders,
        promotions: state.promotions
    }           
}
const mapDispatchToProps = (dispatch) => ({
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
    fetchDishes: () => { dispatch(fetchDishes()) },
    resetFeedBackForm: () => {dispatch(actions.reset('feedback'))},
    fetchComments: () => { dispatch(fetchComments()) },
    fetchPromos: () => { dispatch(fetchPromos()) },
});

class MainComponent extends Component {
    componentDidMount(){
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
    }
    render(){
        
        const HomePage = () => (
            <Home 
                dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
                promosLoading={this.props.promotions.isLoading}
                promosErrorMessage={this.props.promotions.errorMessage}
                leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                dishesLoading={this.props.dishes.isLoading}
                dishesErrorMessage={this.props.dishes.errorMessage}
            />
        );
        const DishWithID = ({match})=>(
            <DishDetail 
                dish={this.props.dishes.dishes.filter( dish=>dish.id === parseInt(match.params.dishId, 10) )[0]}
                comments={this.props.comments.comments.filter( comment=>comment.dishId === parseInt(match.params.dishId, 10) )}
                commentsLoading={this.props.comments.isLoading}
                commentsErrorMessage={this.props.comments.errorMessage}
                postComment={this.props.postComment}
                dishesLoading={this.props.dishes.isLoading}
                dishesErrorMessage={this.props.dishes.errorMessage}
            />
        );
        return(
            <div>
                <Header/>
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch>
                            <Route path="/home" component={HomePage} />
                            <Route exact path="/menu" component={()=><Menu dishes={this.props.dishes}/>} />
                            <Route path="/menu/:dishId" component={DishWithID} />
                            <Route exact path="/contactus" component={()=><Contact resetFeedBackForm={this.props.resetFeedBackForm}/>} />
                            <Route path="/aboutus" component={()=><About leaders={this.props.leaders} />} />
                            <Redirect to="/home" />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));
