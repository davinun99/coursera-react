import './App.css';
import React, {Component} from "react";
import MainComponent from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  render(){
    return(
      <BrowserRouter>
        <div>
          <MainComponent/>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
