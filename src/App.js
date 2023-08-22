import { Component } from 'react';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import Content from './components/Content/Content';
import './App.css';

class App extends Component {

  render(){
    return (
      <div className="App">
        <Logo/>
        <Navigation/>
        <Content/>
      </div>
    );
  } 
}

export default App;
