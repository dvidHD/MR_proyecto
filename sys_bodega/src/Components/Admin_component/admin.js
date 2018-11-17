import React, { Component } from 'react';

import { CustomInput,Button, Form, FormGroup, Label, Input } from 'reactstrap';

import axios from 'axios'



     class Admin extends Component {
         state = {  }


         constructor(props){
              super(props);
        
              this.state={
                  nombre: '',
                  clsases: []
              }
        }

        onInputChange = (event) => {
          //console.log(event.target.value)
   
           switch (event.target.id) {
               case 'input-nombre':
                   
                   this.setState({
                       nombre: event.target.value
                   },/*()=>{console.log(this.state)}*/)
                   
                   break;
               
               case 'input-email':
                   this.setState({
                       email: event.target.value
                   })
                   break;
   
               case 'input-clase':
                   this.setState({
                       clase: event.target.value
                   })
                   break;
   
               default:
                   break;
           }
       }

       Enviar = ()=>{
        console.log(this.state)
        
        axios.post('https://floating-lowlands-26313.herokuapp.com/operacion/v1/instructor', {
            nombre: this.state.nombre,
            clase: this.state.cl
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        
    }


         render() { 
             return (  
                <Form>

                <FormGroup>
                  <Label for="Nombre">Nombre</Label>
                  <Input onChange= {this.onInputChange}  type="text" name="password" id="input-nombre" placeholder="Nombre" />
                </FormGroup>

                <FormGroup>
                  <Label for="Email">Email</Label>
                  <Input type="email" name="email" id="Email" placeholder="Correo @" />
                </FormGroup>

                  <FormGroup>
                    <Label for="Clase">Clases</Label>
                    <div>
                      <CustomInput type="checkbox" id="Clase" label="Creator 3" />
                      <CustomInput type="checkbox" id="Clase1" label="Or this one" />
                      <CustomInput type="checkbox" id="Clase2" label="But not this disabled one" disabled />
                    </div>
                  </FormGroup>
 
            

                <Button onClick= {this.Enviar} > Crear </Button>
              </Form>
             );
         }
     }
      
     export default Admin;
