import React from 'react';

import '../Form_component/form.css';

import {  Form, FormGroup, Label, Input} from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      
     <Form className="fondo" >
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
          <option value="frog">Forgduino</option>
          <option value="ard">Arduino</option>
          </select>
        </form>
        <FormGroup >
        <form class="cantidad ">
          <Label for="cantidad"> Cantidad </Label>
          <Input type="text" name="cantidad" id="cantidad" placeholder="0" />
          
        </form>
        </FormGroup>
         <fom class="mat">
        <FormGroup >
          <Label for="matdic"> Material Didactico</Label>
          <Input type="text" name="matdic" id="matdic" placeholder="Foami,memorama,tiejras,etc..." />
        </FormGroup></fom>

        <fom class="compu">
        <FormGroup tag="fieldset">
          <legend>Computadoras</legend>
          <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            001
          </Label>
        </FormGroup>
          
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            002
          </Label>
        </FormGroup>
          
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            003
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            004
          </Label>
        </FormGroup>
         
        </FormGroup>
        </fom>
        <button  type="submit" >Enviar Solicitud</button>
        
      </Form>
    );
  }
}