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
      route: 'signin',
      user: {
        id:'',
        name:'',
        email:'',
        entries:0,
        joined: ''
      }
    }
  }

  loadUser = (data) => {
    this.setState({ 
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data. entries,
        joined: data.joined
      }
    });
  }

  faceLocation = (data) => {
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
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onImageSubmit = (event) => {
    this.setState({imgUrl: this.state.input});
    clarifaiApp.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input
    )
    .then( response => this.faceBox( this.faceLocation(response) ))
    .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  render() {
    return (
      <div className='App'>
        <Particles
          className='particles'
          params = {particleOptions} />
        
        {
          this.state.route === 'home' ?
            <div>
              <Navigation
                onRouteChange={this.onRouteChange} />
              <Logo />
              <Rank
                name={this.state.user.name}
                entries={this.state.user.entries} />
              <ImageLinkForm
                onInputChange={this.onInputChange}
                onImageSubmit={this.onImageSubmit} />
              <FaceRecognition
                box={this.state.box}
                imgUrl={this.state.imgUrl} />
            </div>
          : (
              this.state.route === 'signin' ?
                <SignIn
                  onRouteChange={this.onRouteChange} />
                :
                <Register
                  onRouteChange={this.onRouteChange}
                  loadUser={this.loadUser} />
            )
        }
      </div>
    );
  }
}

export default App;
