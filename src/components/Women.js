import React, { useState } from 'react';
import Cardsdata from './CardsData';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';

const Women = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState(Cardsdata);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);

  const send = (e) => {
    dispatch(ADD(e));
  };

  const handlePriceRangeClick = (min, max) => {
    const filtered = data.filter((item) => item.category === 'women' && item.price >= min && item.price <= max);
    setFilteredData(filtered);
    setSelectedPriceRange(`${min}-${max}`);
  };

  const resetFilter = () => {
    setFilteredData([]);
    setSelectedPriceRange(null);
  };


   
  return (
    <div className='mt-3 mb-3'>
      <h2 className='text-center' style={{ fontWeight: 800, fontFamily: 'serif', fontSize: '40px', textDecoration: 'underline' }}>
        Women <span style={{ color: 'red' }}>S</span>hoes
      </h2>
      <div className='d-flex mx-2'>
        <div className='filter-section'>
      <button onClick={() => resetFilter()}>
          All
        </button>
        <button  onClick={() => handlePriceRangeClick(5000, 6000)}>
          ₹5000-₹6000
        </button>
        <button  onClick={() => handlePriceRangeClick(6000, 7000)}>
          ₹6000-₹7000
        </button>
        <button  onClick={() => handlePriceRangeClick(7000, 8000)}>
          ₹7000-₹8000
        </button>
        <button  onClick={() => handlePriceRangeClick(8000, 9000)}>
         ₹8000-₹9000
        </button>
        <button  onClick={() => handlePriceRangeClick(9000, 50000)}>
         above ₹9000
        </button>
        </div>

        <div className='row d-flex align-items-center justify-content-center'>
          {filteredData.length > 0
            ? filteredData.map((element, id) => (
                <Card key={id} style={{ width: '22rem', border: 'none'}} className='mt-4 mx-2 card_style'>
                  <Card.Img variant='top' src={element.imgdata} style={{height:"18rem", width:"19rem"}} className='mt-3 p-3' />
                  <Card.Body>
                    <Card.Title style={{ color: 'red', fontSize: 20, textAlign: 'center' }}>{element.brand}</Card.Title>
                    <Card.Text style={{height:'40px', fontWeight:600}}>{element.rname}</Card.Text>
                    <Card.Text>Price: ₹{element.price}</Card.Text>
                    <Card.Text>Style: {element.Style}</Card.Text>
                    <div className='button_div d-flex align-items-center justify-content-center'>
                      <Button variant='primary' className='col-lg-12' onClick={() => send(element)}>
                        Add to cart
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              ))
            : data.map((element, id) => {
                if (element.category === 'women') {
                  return (
                    <Card key={id} style={{ width: '22rem', border: 'none' }} className='mt-4 mx-2 card_style'>
                      <Card.Img variant='top' src={element.imgdata} style={{ height: '18rem', width: '19rem' }} className='mt-3 p-3' />
                      <Card.Body>
                        <Card.Title style={{ color: 'red', fontSize: 20, textAlign: 'center' }}>{element.brand}</Card.Title>
                        <Card.Text style={{height:'40px', fontWeight:600}}>{element.rname}</Card.Text>
                        <Card.Text>Price: ₹{element.price}</Card.Text>
                        <Card.Text>Style: {element.Style}</Card.Text>
                        <div className='button_div d-flex align-items-center justify-content-center'>
                          <Button variant='primary' className='col-lg-12' onClick={() => send(element)}>
                            Add to cart
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  );
                }
              })}
        </div>
      </div>
    </div>
  );
};

export default Women