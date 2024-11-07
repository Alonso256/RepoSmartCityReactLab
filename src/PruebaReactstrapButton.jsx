import React from 'react';
import { Button } from 'reactstrap';

export default (props) => {

  const handleClick = (event) => {
    console.log("Botón click!!");
    // Por ejemplo, llamada a axis.post
  }

  return (
    <div>
      <Button onClick={handleClick} color="primary">primary</Button>{' '}
      <Button color="secondary">secondary</Button>{' '}
      <Button color="success">success</Button>{' '}
      <Button color="info">info</Button>{' '}
      <Button color="warning">warning</Button>{' '}
      <Button color="danger">danger</Button>{' '}
      <Button color="link">link</Button>
    </div>
  );
};