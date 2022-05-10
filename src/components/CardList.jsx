import { useState, useEffect } from 'react';
import Card from './Card';

function CardList() {
  const popularCities = ['Miami', 'California', 'Toronto']
  return (
    <div>
      <div className='cards flex justify-between px-10 flex-col md:flex-row'>
        {popularCities.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default CardList;
