import React from 'react'
import  Locationdisplay from './locationdisplay'
// import './loc.css'
class App extends React.Component{
constructor(props){
  super(props)
  this.state = {latitude : null,errorMessage:''}

  window.navigator.geolocation.getCurrentPosition(
    (position) =>{this.setState({latitude :position.coords.latitude})},
    (error) => {this.setState({errorMessage :error.message})},
  );
}
// componentDidUpdate(){  
//   console.log('update method')
// }
// componentWillUnmount(){
//   console.log('clear method')
// }
  render(){
   
    if(this.state.errorMessage && !this.state.latitude){
      return <div> Error: {this.state.errorMessage} </div>
}
if(!this.state.errorMessage && this.state.latitude){
  return <div> <Locationdisplay latitude={this.state.latitude} /> </div>
    }
    else{
      return <div> waiting for user permission </div>
    }


      {/* my latitude is{this.state.latitude}
my error message is{this.state.errorMessage} */}
  
  
}
}

export default App


