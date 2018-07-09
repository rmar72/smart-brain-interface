import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
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
      imgUrl : '',
      box: {},
      route: 'signin'
    }
  }

  faceLocation = (data) => {
    console.log(data)
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }
  
  faceBox = (box) => {
    this.setState({box: box}, console.log(this.state.box));
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = (event) => {
    this.setState({imgUrl: this.state.input});
    clarifaiApp.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input
    )
    .then( response => this.faceBox(this.faceLocation(response)))
    .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  render() {
    return (
      <div className='App'>
        <Particles className='particles'
          params = {particleOptions}
        />
        <Navigation onRouteChange={this.onRouteChange} />
        { this.state.route === 'signin' ? <SignIn onRouteChange ={this.onRouteChange} /> :
          <div>
            <Logo />
            <Rank />
            <ImageLinkForm 
              onInputChange={this.onInputChange} 
              onButtonSubmit={this.onButtonSubmit}/>
            <FaceRecognition box={this.state.box} imgUrl={this.state.imgUrl} />
          </div>
        }
      </div>
    );
  }
}

export default App;
