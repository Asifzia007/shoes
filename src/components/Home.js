import React from 'react';
import Card from 'react-bootstrap/Card';
import menshoes from "./menshoes.jpg"
import womenshoes from "./womenshoes.jpg"
import { Link } from 'react-router-dom';

const Home = () => {
  
  return (
    <div>
     <div className='bg-img'>
        <h1 style={{textAlign:"start"}}>Best in Style</h1>
        <h1 style={{color:"red", textAlign:"center"}}>Collection</h1>
        <h1 style={{textAlign:"end"}}>for You...</h1>

     </div>
     <div className='selection-section m-4 d-flex align-items-center justify-content-center'>
        <div className='men'>
          <Link to={`/men`}>
        <Card style={{width:"24rem", border:"none"}} className='card_style mx-4'>
        <Card.Img variant="top" src={menshoes} />
        <Card.Body>
          <Card.Title style={{textAlign:"center"}}>
          MEN
          </Card.Title>
        </Card.Body>
      </Card>
      </Link>
        </div>
        <div className='women'>
        <Link to={`/women`} >
        <Card style={{width:"24rem", border:"none"}} className='card_style mx-4'>
        <Card.Img variant="top" src={womenshoes} />
        <Card.Body>
          <Card.Title style={{textAlign:"center"}}>
           WOMEN
          </Card.Title>
        </Card.Body>
      </Card>
      </Link>
        </div>
    
     </div>
    </div>
  )
}

export default Home