import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';

const entrainements = [
  {
    jour: "dimanche",
    sport: "velo",
    duree: 30
  },
  {
    jour: "lundi",
    sport: "course",
    duree: 20
  },
  {
    jour: "mardi",
    sport: "repos",
    duree: 0
  },
  {
    jour: "mercredi",
    sport: "natation",
    duree: 25
  },
  {
    jour: "jeudi",
    sport: "velo",
    duree: 60
  },
  {
    jour: "vendredi",
    sport: "course",
    duree: 40
  },
  {
    jour: "samedi",
    sport: "repos",
    duree: 0
  },
];



export function TempsEntrainement() {
  const [joursDentrainements, setJours] = useState(entrainements);
  const [Activite, setActivite] = useState(joursDentrainements[0].sport);
  const [Minutes, setMinutes] = useState(joursDentrainements[0].duree);
  const [selectedDay, setSelectedDay] = useState(joursDentrainements[0]);
  console.log({selectedDay});
  console.log(selectedDay.jour);
  const JourDeLaSemaine = () => {
    return(
      joursDentrainements.map((semaine) => 
        <ListGroup.Item
        onClick={() => 
          {
            setSelectedDay(semaine);
            setActivite(semaine.sport);
            setMinutes(semaine.duree);
          }}
        className={semaine.jour == selectedDay.jour ? 'active' : ''}
        >
          {semaine.jour}</ListGroup.Item>
      )
    )
  }

  const FormJourChoisie = () => {
    const entrainement = joursDentrainements.filter(entrainement => entrainement.jour == selectedDay.jour);
    return(
      <>
        <h3>{entrainement.jour}</h3>
          <Form>
            <Form.Group>
              <Form.Label>Activité</Form.Label>
              <Form.Control as="select" custom defaultValue={Activite} onChange={activite => setActivite(activite.target.value)}>
                <option value="course">Course</option>
                <option value="velo">Vélo</option>
                <option value="natation">Natation</option>
                <option value="repos">Repos</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Minutes</Form.Label>
              <Form.Control type="number" value={Minutes} onChange={minute => setMinutes(parseInt(minute.target.value))}/>
            </Form.Group>
          </Form>
      </>
    )
  }

  const Sauvegarder = (event) => {
    const nouvelleListeEntrainement = joursDentrainements.map(entraiment => {
      if (entraiment.jour == selectedDay.jour) {

        if(Activite == "repos"){
          return { ...entraiment, sport: Activite, duree: 0 };
        }
        else return { ...entraiment, sport: Activite, duree: Minutes };
        
      }
      
      else {
        return entraiment;
      }
    });
    setJours(nouvelleListeEntrainement);
    event.preventDefault();
  }

  return (
    <Container>
      <Row>
        <Col>
          <Alert variant="success" className="mt-3">
            <Alert.Heading>Bilan de la semaine</Alert.Heading>
            <p>Temps d'entraînement : 1h40</p>
          </Alert>
        </Col>
      </Row>
      <Row>
        <Col>
          <ListGroup>
            <JourDeLaSemaine entrainements={entrainements}/>
          </ListGroup>
        </Col>
        <Col>
          <FormJourChoisie/>
          <Button onClick={Sauvegarder}>
            Sauvegarder
          </Button>
        </Col>
      </Row>
    </Container>
  );
}