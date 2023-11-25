import React, { useState } from 'react'
import Cardsdata from './CardsData';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Men = () => {
  const [query, setQuery] = useState("");
  console.log(query.filter);

  const [data, setData] = useState(Cardsdata);

  return (
    <div className='mt-3 mb-3'>
      <h2 className='text-center' style={{ fontWeight: 800, fontFamily: "serif", fontSize: "40px", textDecoration:"underline" }}>Men <span style={{ color: "red" }}>S</span>hoes</h2>
      <div className='d-flex mx-2'>
        <button style={{ width: "25%", height: "30px" }} onClick={(e) => setQuery(e.target.value)}>5000-6000</button>
        <div className='row d-flex align-items-center justify-content-center'>
          {

            data.map((element, id) => {
              if (element.category === "men") {

                return (

                  <>

                    <Card style={{ width: '22rem', border: "none" }} className='mt-4 mx-2 card_style'>
                      <Card.Img variant="top" src={element.imgdata} style={{ height: "18rem", width: "19rem" }} className='mt-3 p-3' />
                      <Card.Body>
                        <Card.Title style={{ color: "red", fontSize: 18, textAlign: 'center' }}>{element.brand}</Card.Title>
                        <Card.Title>{element.rname}</Card.Title>
                        <Card.Text>
                          Price: ₹{element.price}
                        </Card.Text>
                        <Card.Text>
                          Style: {element.Style}
                        </Card.Text>
                        <div className='button_div d-flex align-items-center justify-content-center'>
                          <Button variant="primary" className='col-lg-12'>Add to cart</Button>
                        </div>

                      </Card.Body>
                    </Card>
                  </>
                )
              }
            })

          }
        </div>
      </div>
    </div>
  )
}

export default Men