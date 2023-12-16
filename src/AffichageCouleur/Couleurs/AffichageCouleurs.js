import React from 'react';

import { Couleur } from './Couleur.js'

const COULEURS = [{
  codeHexadecimal: '#91A6FF',
  nomCouleur: 'Cornflower Blue'
},
{
  codeHexadecimal: '#FF88DC',
  nomCouleur: 'Persian Pink'
},
{
  codeHexadecimal: '#80FF72',
  nomCouleur: 'Screamin Green'
},
{
  codeHexadecimal: '#FF5154',
  nomCouleur: 'Tart Orange'
}];

export const AffichageCouleurs = () => {

  return (
    <>
    <h2>
      Utilisez le composant Couleur pour afficher
      dans la page chaque éléments du tableau COULEURS!
    </h2>
      {
        COULEURS.map((couleur) => 
          <Couleur codeHexadecimal={couleur.codeHexadecimal} nomCouleur={couleur.nomCouleur}/>)
      }
    </>
  )
}
