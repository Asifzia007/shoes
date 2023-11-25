import React from 'react';
import Card from 'react-bootstrap/Card';

const Footer = () => {
  return (
    <div className='mt-6'>
        <Card style={{background:"black", borderRadius:0, color:"white", textAlign:"center"}}>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.{' '}
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>

    </div>
  )
}

export default Footer