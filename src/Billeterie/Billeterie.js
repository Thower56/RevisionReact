import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { BsX } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';

const definitionUsagers = [
  { nom: "Jimmy Blux", age: 48 },
  { nom: "Goldoche", age: 8 },
  { nom: "Bob Poitras", age: 42 },
  { nom: "Robert-Denis Rheault", age: 10 },
  { nom: "Guy Guay", age: 3 }
];

const Usagers = ({definitionUsagers, functionOnClick}) =>{
  return(
      definitionUsagers.map((Usager, index) => 
        <h4 key={index}>
          <BsX onClick={() => functionOnClick(index)} className='bg-danger m-2 border border-dark rounded text-white' />
          {Usager.nom} ({Usager.age})
        </h4>
      )
  )
}

export function Billeterie() {
  const [listeUsager, setlisteUsager] = useState(definitionUsagers);
  const [nomUsager, setNom] = useState("");
  const [ageUsager, setAge] = useState(0);

  let boolAge = (/[0-9]/.test(ageUsager) && ageUsager > 0 && ageUsager < 150);
  let boolNom = (/[A-Za-z]/.test(nomUsager) && nomUsager.length > 0);

  console.log("Bool Nom: " + boolNom);
  console.log("Bool Age: " + boolAge);
  
  const ajoutUsager = (event) => {
    const nouvelleListeUsager = listeUsager.slice();
    let usager = {nom : nomUsager, age: ageUsager}
    nouvelleListeUsager.push(usager);
    setlisteUsager(nouvelleListeUsager);
    event.preventDefault();
  }

  const retirerUsager = (index) => {
    const nouvelleListeUsager = listeUsager.slice();
    nouvelleListeUsager.splice(index, 1);
    setlisteUsager(nouvelleListeUsager);
  }

  return (
    <Container>
      <Row>
        <Col>
          <Alert variant={'primary'} className="mt-3">
            <Alert.Heading>Billeterie</Alert.Heading>
            <hr />
          </Alert>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <Form>
            <Form.Group className="mb-3" controlId="nom">
              <Form.Label>Nom</Form.Label>
              <Form.Control type="text" placeholder="Entrez votre nom" onChange={nom => setNom(nom.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="age">
              <Form.Label>Âge</Form.Label>
              <Form.Control type="number" placeholder="Entrez votre âge" onChange={age => setAge(age.target.value)}/>
            </Form.Group>

            <Button variant="primary" type="submit" disabled={!(boolAge && boolNom)} onClick={ajoutUsager}>
              Ajouter
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col className="border border-dark rounded shadow my-3">
          <h2>Usagers</h2>
          <Usagers definitionUsagers={listeUsager} functionOnClick={retirerUsager}/>
        </Col>
      </Row>
      <Row>
        <Col className="border border-dark rounded shadow my-3 py-1">
          <h2>Total des achats</h2>
          <Table bordered striped>
            <thead>
              <tr>
                <th>Catégorie</th>
                <th>Prix unitaire</th>
                <th>Quantité</th>
                <th>Total</th>
              </tr>
            </thead>
            <GenerationTable definitionUsagers={listeUsager}/>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

const GenerationTable = ({definitionUsagers}) => {
  let Age15EtPlus = 0;
  let Age6A14 = 0;
  let Age5EtMoin = 0;

  definitionUsagers.map(Usager => {
    if(Usager.age <= 5) Age5EtMoin++;
    else if(Usager.age >= 6 && Usager.age <= 14 ) Age6A14++;
    else if(Usager.age >= 15) Age15EtPlus++;
  });

  return(
    <tbody>
        <tr>
          <td>15 ans et plus</td>
          <td>25.99 $</td>
          <td>{Age15EtPlus}</td>
          <td>51.98 $</td>
        </tr>
        <tr>
          <td>6 à 14 ans</td>
          <td>16.99 $</td>
          <td>{Age6A14}</td>
          <td>33.98 $</td>
        </tr>
        <tr>
          <td>5 ans et moins</td>
          <td>Gratuit</td>
          <td>{Age5EtMoin}</td>
          <td>0.00$</td>
        </tr>
        <tr>
          <th colspan={3} className="text-end">Total:</th>
          <td>{(Age15EtPlus * 25.99 + Age6A14 * 16.99).toFixed(2)}</td>
        </tr>
      </tbody>
  )
}