import './App.css';
import React, {Component} from "react";
import MainComponent from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

class App extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  render(){
    return(
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <MainComponent/>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
