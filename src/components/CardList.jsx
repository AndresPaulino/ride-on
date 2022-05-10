import { useState, useEffect } from 'react';
import Card from './Card';

function CardList() {
  const [data, setData] = useState(['Miami', 'California', 'Toronto']);
  const [loading, setLoading] = useState(true);
  return (
    <div>
      <div className='cards flex justify-between px-10 flex-col md:flex-row'>
        {data.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default CardList;
