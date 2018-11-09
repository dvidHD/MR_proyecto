import React, { Component } from 'react';


import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class form extends Component {
  state= { }
  render() {
    return(
    <Form>
    <FormGroup>
      <Label for="Nombre">Nombre </Label>
      <Input type="nombre" name="nombre" id="nombreInstructor" />
    </FormGroup>
    <FormGroup>
      <Label for="EscCenter">Escuela/Center</Label>
      <Input type="escuela" name="escuela" id="escuela" />
    </FormGroup>
    <FormGroup>
      <Label for="robot">Robot</Label>
      <Input type="robot" name="robot" id="robot">
        <option>Scribbler</option>
        <option>Ev3</option>
        <option>Frogduino</option>
        <option>Arduino</option>
        <option>Oruga</option>
        <option>Raton </option>
        <option>Sin Robots</option>
      </Input>
    </FormGroup>
    
    <FormGroup>
      <Label for="consumibles">Consumibles</Label>
      <Input type="consumibles" name="consumibles" id="consumible" placeholder="Foami,hojas,colores, etc ..."/>
    </FormGroup>
    
    
    
    <Button>Enviar Solicitud</Button>
  </Form>
     ); }
}

export default form;
