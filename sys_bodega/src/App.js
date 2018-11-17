import React, { Component } from 'react';


import Form from './Components/Form_component/form'
import NavBar from './Components/Form_component/navbar'



class App extends Component {
  render() {
    return (
     

      <div className="App">
       
        <header className="App-header">
         
        <NavBar/> 
          <Form/>
         
        </header>
      </div>
     
    );
  }
}

export default App;
