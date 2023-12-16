import React from 'react';
import { useNavigate } from "react-router-dom";

export function ChangerDePage({ location, message }) {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(location);
  };

  return (
    <button className='btn btn-primary' onClick={handleClick}> {message} </button>
  );
}
