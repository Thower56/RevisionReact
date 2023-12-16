import React from 'react';

export const Couleur =  ({ codeHexadecimal, nomCouleur }) => {
  return (
    <div
      className='couleur-carre' style={{ backgroundColor: codeHexadecimal }}
    >
      <h2>{nomCouleur}</h2>
    </div>
  )
}
