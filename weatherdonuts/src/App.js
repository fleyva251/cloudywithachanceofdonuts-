import React from 'react';
import './App.css';


// All the donuts
// http://localhost:3000/donuts

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      donuts: []
    }
    fetch('http://localhost:3000/donuts')
      .then(data => data.json())
      .then(donutData => {
        this.setState({donuts: donutData})
      })
  }
   
  render(){
    return(  
      <div className = 'App'>
        <h1>Donut Land UwU</h1>
        <p>
        {this.state.donuts.map((donut, index) => (
          <p key={index}> {donut.filling}</p>
        )
        )}
        </p>
      </div>
    )
  }                     
}          

export default App;