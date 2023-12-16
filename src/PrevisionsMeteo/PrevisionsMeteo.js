import React from "react";
import { BsSun } from 'react-icons/bs'
import {Table} from "react-bootstrap";
import { BsBootstrap } from "react-icons/bs";
import 'react-bootstrap';
const previsions = [
  {
    'jour': 'Lundi',
    'tempMin': -5,
    'tempMax': 0,
    'condition': 'soleil'
  }, {
    'jour': 'Mardi',
    'tempMin': 5,
    'tempMax': 8,
    'condition': 'soleil'
  }, {
    'jour': 'Mercredi',
    'tempMin': 10,
    'tempMax': 15,
    'condition': 'averse'
  }, {
    'jour': 'Jeudi',
    'tempMin': -5,
    'tempMax': 0,
    'condition': 'nuageux'
  }, {
    'jour': 'Vendredi',
    'tempMin': -10,
    'tempMax': -8,
    'condition': 'partiel'
  }, {
    'jour': 'Samedi',
    'tempMin': -12,
    'tempMax': -5,
    'condition': 'averse'
  }, {
    'jour': 'Dimanche',
    'tempMin': -5,
    'tempMax': 0,
    'condition': 'soleil'
  }
];

export function PrevisionsMeteo() {

  const Conditions = ({condition}) =>
  {
    if(condition === 'soleil'){
      return(
        <BsSun size={32} />
      )
    }
    
    
  }
  return (
    <Table>
      <thead>
        <tr>
          <th>Jour</th>
          <th>Température minimale</th>
          <th>Température maximale</th>
          <th>Condition</th>
          <th>Température moyenne</th>
        </tr>
      </thead>
      <tbody>
        {
          previsions.map((journee) =>{
            return(
            <tr>
              <td>{journee.jour}</td>
              <td>{journee.tempMin}</td>
              <td>{journee.tempMax}</td>
              <td><Conditions condition={journee.condition}/></td>
              <td>{journee.tempMax - journee.tempMin}</td>
            </tr>)
          })
        }
      </tbody>
    </Table>
  );
}