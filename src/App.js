import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import './App.css';

const clarifaiApp = new Clarifai.App({
  apiKey: 'e335640338224000ba3d1826e422aedb'
 });

const particleOptions = {
  particles: {
    number: {
      value: 50,
      density:{
        enable: true,
        value_area: 800
      }
    },
    color: {
      value:'#000'
    }
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imgUrl : ''
    }
  }

  onButtonSubmit = (event) =>{
    console.log(event)
  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }
  }

  render() {
    return (
      <div className='App'>
        <Particles className='particles'
          params = {particleOptions}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition imgUrl={this.state.imgUrl} />
      </div>
    );
  }
}

export default App;
