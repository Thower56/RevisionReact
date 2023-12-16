import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';

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
            <ListGroup.Item>Dimanche</ListGroup.Item>
            <ListGroup.Item>Lundi</ListGroup.Item>
            <ListGroup.Item>Mardi</ListGroup.Item>
            <ListGroup.Item>Mercredi</ListGroup.Item>
            <ListGroup.Item active>Jeudi</ListGroup.Item>
            <ListGroup.Item>Vendredi</ListGroup.Item>
            <ListGroup.Item>Samedi</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <h3>Jeudi</h3>
          <Form>
            <Form.Group>
              <Form.Label>Activité</Form.Label>
              <Form.Control as="select" custom>
                <option>Course</option>
                <option>Vélo</option>
                <option>Natation</option>
                <option>Repos</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Minutes</Form.Label>
              <Form.Control type="number" value="20" />
            </Form.Group>
          </Form>
          <Button>
            Sauvegarder
          </Button>
        </Col>
      </Row>
    </Container>
  );
}