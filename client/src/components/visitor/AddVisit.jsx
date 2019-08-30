import React, { Component, Fragment } from 'react';
import StepWizard from 'react-step-wizard';
import {Container, Row, Col, Form, Button, FormGroup, Input, FormText, CustomInput} from 'reactstrap';
import CreateVisitor from './CreateVisitor';
import { Helmet } from 'react-helmet';

// Second Step
const FindVisitor = (props) =>
  <Container>
    <Helmet>
      <title>Agregar Visita</title>
    </Helmet>
    <Row>
      <h1 className="large text-primary">Elegir Visitante</h1>
    </Row>
    <Row>
      <h2>Buscar persona externa</h2>
    </Row>
    <Row>
      <Form className="container">
        <FormGroup>
          <Input type="text" name="visitor" id="exampleFile" placeholder="Nombre de persona externa"/>
          <FormText color="muted">
          This is some placeholder block-level help text for the above input.
          It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>
        <FormGroup>

        </FormGroup>
        <Button color="primary" onClick={() => props.nextStep()}>Continuar</Button>
      </Form>
    </Row>
    <Row>
      <h3>¿No encontraste a la persona?</h3>
      <Button color="primary" onClick={() => props.goToStep(1)}>Cr&eacute;alo aqui</Button>
    </Row>
</Container>

const Test2 = (props) =>
  <Container>
    <Row>
      <h1 className="large text-primary">Agregar datos de la visita</h1>
    </Row>
    <Row>
      <Form className="container">
        <FormGroup>
          <Input type="text" name="visitor" id="exampleFile" placeholder="Tipo de Financiamiento"/>
          <FormText color="muted">
          Como se financia el viaje del visitante externo.
          </FormText>
        </FormGroup>
        <FormGroup>
          <Input type="select" name="select" id="exampleSelect">
            <option>Instituci&oacute;n de Origen</option>
            <option>Universidad Austral</option>
            <option>Ecole Centrale de Nantes</option>
            <option>MIT</option>
            <option>NYU</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Input type="text" name="visitor" id="exampleFile" placeholder="Patrocinador"/>
          <FormText color="muted">
          Quien financia la visita.
          </FormText>
        </FormGroup>
        <FormGroup>
          <Input type="select" name="select" id="exampleSelect">
            <option>Rol de la visita</option>
            <option>Acad&eacute;mico</option>
            <option>Autoridad p&uacute;blica</option>
            <option>Directivo</option>
            <option>Estudiante</option>
            <option>Profesional</option>
            <option>Int&eacute;rprete</option>
            <option>Otro</option>
          </Input>
          <FormText color="muted">
          Cual es el cargo del visitante. Cual es el cargo que posee o funci&oacute;n que desempeña.
          </FormText>
        </FormGroup>
        <FormGroup>
          <Input type="select" name="select" id="exampleSelect">
            <option>Nivel de formaci&oacute;n</option>
            <option>Sin grado</option>
            <option>Licenciado</option>
            <option>Especialista M&eacute;dico</option>
            <option>Titulo profesional</option>
            <option>Magister o Master</option>
            <option>Doctorado (PhD, MD)</option>
          </Input>
          <FormText color="muted">
          Grado acad&eacute;mico al momento de la visita.
          </FormText>
        </FormGroup>
        <FormGroup>
          <CustomInput type="checkbox" id="exampleCustomCheckbox" label="Es Expositor" />
          <FormText color="muted">
          ¿Fue el expositor? Dejar vac&iacute;o si su participaci&oacute;n fue principalmente pasiva.
          </FormText>
        </FormGroup>
        <FormGroup>
          <CustomInput type="checkbox" id="exampleCustomCheckbox" label="Asistió al evento" />
          <FormText color="muted">
          Marcar si asistir&aacute; o si asisti&oacute; al evento.
          </FormText>
        </FormGroup>
        <Button color="success">Registrar</Button>
      </Form>
    </Row>
  </Container>

// Example nav from https://github.com/jcmcneal/react-step-wizard/blob/master/app/components/nav.js
const Nav = (props) => {
  const dots = [];
  for (let i = 1; i <= props.totalSteps; i += 1) {
      const isActive = props.currentStep === i;
      dots.push((
          <span
              key={`step-${i}`}
              style={isActive ? {...styles.dot, ...styles.active} : styles.dot }
              onClick={() => props.goToStep(i)}
          >&bull;</span>
      ));
  }

  return (
      <div style={styles.nav}>{dots}</div>
  );
};

// Step Control just in case
const StepController = ({ stepInstance }) => (
  <Fragment>
      <Button onClick={stepInstance.previousStep}>Atras</Button>
      &nbsp;
      <Button onClick={stepInstance.nextStep}>Siguiente</Button>
  </Fragment>
);

class AddVisit extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      formInfo: {},
      masterControl: false,
    };
  }

  // Debug?
  onStepChange = (stats) => {
    console.log(stats);
  }

  setInstance = instance => this.setState({instance});

  render() { 
    const { instance, masterControl } = this.state;
    
    return (
      <Container >
        <Row><h2 className={"text-primary"} style={{textAlign: "center", width: "100%"}}>Agregar Visita</h2></Row>
        <Row>
          <StepWizard
            className="stepContainer"
            isHashEnabled
            onStepChange={this.onStepChange}
            nav={<Nav />}
            initialStep={2}
            instance={this.setInstance}>
            <CreateVisitor />
            <FindVisitor />
            <Test2 />
          </StepWizard>
        </Row>
        <Row>
          {masterControl && instance ? <StepController stepInstance={this.state.instance}/> : null }
        </Row>
      </Container>
    );
  }
}

const styles = {
  nav : {
    marginBottom: "15px",
    textAlign: "center",
  },
  dot: {
    color: "black",
    cursor: "pointer",
    fontSize: "36px",
    lineHeight: "1",
    margin: "0 15px",
    opacity: ".4",
    textShadow: "none",
    transition: "opacity 1s ease, text-shadow 1s ease",
    willChange: "opacity, text-shadow"
  },
  active: {
    color: "blue",
    opacity: "1",
    textShadow: "0 0px 8px"
  }
}
 
export default AddVisit;