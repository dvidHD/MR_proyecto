import React, { Component } from 'react';


import Form from './Components/Form_component/form'
<<<<<<< HEAD
import NavBar from './Components/Form_component/navbar'
=======
import NavBar from './Components/NavBar_component/navbar'
import Admin from './Components/Admin_component/admin'
>>>>>>> bc3406e09f9e310fe328efb7d40db6e53545ff24



class App extends Component {
  render() {
    return (
     

      <div className="App">
       <NavBar/>
        <header className="App-header">
         
<<<<<<< HEAD
        <NavBar/> 
          <Form/>
=======
          
          <Admin/>
>>>>>>> bc3406e09f9e310fe328efb7d40db6e53545ff24
         
        </header>
      </div>
     
    );
  }
}

export default App;
