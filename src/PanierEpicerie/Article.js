import React from 'react';
import Button from 'react-bootstrap/Button';
import {
  FaChevronUp,
  FaChevronDown
} from 'react-icons/fa';

export const Article = ({ definitionArticles, Incrementer, Decrementer }) => {
  return (

    definitionArticles.map((article, key) => <tr>
      <td>{article.nom}</td>
      <td>{article.prix} $</td>
      <td>{article.quantite}
        <Button onClick={() => Incrementer(article.id)} size="sm" className="m-1 ml-3"><FaChevronUp /></Button>
        <Button onClick={() => Decrementer(article.id)} size="sm" className="m-1"><FaChevronDown /></Button>
      </td>
      <td>{(article.prix * article.quantite).toFixed(2)} $</td>
    </tr>
    )
  );
};




