import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Article } from './Article';
import { Total } from './Total';

const definitionArticles = [
  {
    id: "012345",
    nom: "Count Chocula",    
    prix: 4.79,
    quantite: 1
  }, {    
    id: "035486",
    nom: "Vitamines Pierrafeu",    
    prix: 7.99,
    quantite: 1
  }, {
    id: "794135",
    nom: "Oreo",    
    prix: 2.99,
    quantite: 1
  }, {
    id: "126546",
    nom: "Apple Jacks",    
    prix: 4.99,
    quantite: 1
  }, {
    id: "432184",
    nom: "Sunny Delight",    
    prix: 4.19,
    quantite: 1
  }, {
    id: "798254",
    nom: "Corn Pops",    
    prix: 4.99,
    quantite: 1
  }
];



export const PanierEpicerie = () => {
  const [articles, setArticle] = useState({definitionArticles});

  const onClickIncrementer = (id) =>{
    const nouvelleQuantiteArticle = Object.assign({}, articles);
    nouvelleQuantiteArticle.definitionArticles.filter(article => article.id === id).map(article => article.quantite++);
    setArticle(nouvelleQuantiteArticle);
    console.log(nouvelleQuantiteArticle);
  }

  const onClickDecrementer = (id) =>{
    const nouvelleQuantiteArticle = Object.assign({}, articles);
    nouvelleQuantiteArticle.definitionArticles.filter(article => article.id === id).map(article => article.quantite = article.quantite ? --article.quantite : article.quantite);
    setArticle(nouvelleQuantiteArticle);
    console.log(nouvelleQuantiteArticle);
  }
  return (
    <Container>
      <Row>
        <Col>
          <Alert variant={"primary"} className="mt-3">
            <h1>Révision 1</h1>
          </Alert>
          <Table bordered striped>
            <thead>
              <tr>
                <th>Article</th>
                <th>Prix unitaire</th>
                <th>Quantité</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <Article definitionArticles={definitionArticles} Incrementer={onClickIncrementer} Decrementer={onClickDecrementer}/>
            </tbody>            
          </Table>
        </Col>
      </Row>
      <Row>
        <Col>
          <Total definitionArticles={definitionArticles}/>
        </Col>
      </Row>
    </Container>
  );
}


