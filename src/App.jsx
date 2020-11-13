import './App.css';
import React, {Component} from "react";
import MainComponent from './components/MainComponent';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  render(){
    return(
      <div>
        <MainComponent/>
      </div>
    );
  }
}
export default App;
