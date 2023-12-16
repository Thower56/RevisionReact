import React from 'react';

export const Total = ({ definitionArticles }) => {
  const resultat = () => {
    return definitionArticles.reduce((total, article) => total + (article.prix * article.quantite), 0);
  };

  return (
    <>
      <h3>Sous-total: {resultat().toFixed(2)}$</h3>
      <h3>TPS (5%): {(resultat() * 5 / 100).toFixed(2)}</h3>
      <h3>TVQ (9.975%): {(resultat() * 9.975 / 100).toFixed(2)}</h3>
      <h3>Total: {(115 * resultat() / 100).toFixed(2)} $</h3>
    </>
  );
};
