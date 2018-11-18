import React, { Component } from 'react';
import Form from './Components/Form_component/form'
import NavBar from './Components/NavBar_component/navbar'
import Admin from './Components/Admin_component/admin'



class App extends Component {
  render() {
    return (
     

      <div className="App">
       <NavBar/>
        <header className="App-header">
         
          
          <Admin/>
         
        </header>
      </div>
     
    );
  }
}

export default App;
