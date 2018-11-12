import React from 'react';

import '../Form_component/form.css';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup >
          <Label for="nombre"> Nombre </Label>
          <Input type="text" name="nombre" id="nombre" placeholder="Ingresa tu nombre" />
        </FormGroup>
        <FormGroup >
          <Label for="datosCurso"> Curso y hora </Label>
          <Input type="text" name="datosCurso" id="datosCurso" placeholder="Escuela/Center 00:00" />
        </FormGroup>
        <form class="listaRobots">
          <Label for="robotSelect">Robots </Label>
          <select id="robots" name="robots">
          <option value="sc">Screbbler</option>
          <option value="ev">Ev3</option>
    n     <option value="frog">Forgduino</option>
    n     <option value="ard">Arduino</option>
          </select>
        </form>
        <FormGroup >
        <form class="cantidad ">
          <Label for="cantidad"> Cantidad </Label>
          <Input type="text" name="cantidad" id="cantidad" placeholder="0" />
          
        </form>
        </FormGroup>
        <form class="matdidac">
        <FormGroup>
          <Label for="matdidac">Material Didactico </Label>
          <Input type="textarea" name="matdidac" id="matdidac" placeholder="Foami,Memorama,Tijeras, etc ..."/>
        </FormGroup></form>
        <fom class="compu">
        <FormGroup tag="fieldset">
          <legend>Computadoras</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              001
            </Label>
          </FormGroup>
          <fom></fom>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              002
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Label check>
              <Input type="radio" name="radio1" disabled />{' '}
             003
            </Label>
          </FormGroup>
        </FormGroup>
        </fom>
        <Button>Confirmar Solicitud</Button>
      
      </Form>
    );
  }
}