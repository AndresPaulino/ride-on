import { useState, useEffect } from 'react';
import NavigationBar from '../../components/NavigationBar';
import HeroBanner from '../../components/HeroBanner';
import Card from '../../components/Card';
import axios from 'axios';

function Home() {
  const [data, setData] = useState(['Miami', 'California', 'Toronto']);
  const [loading, setLoading] = useState(true);

  console.log(data);

  // useEffect(() => {
  //     const fetchData = async () => {
  //         const result = await axios(

  //             'https://api.opendota.com/api/heroes'
  //         );
  //         console.log(result.data);
  //         setData(result.data);
  //         setLoading(false);
  //     }
  //     fetchData();
  // }, []);

  return (
    <div>
      <NavigationBar />

      <HeroBanner />
        <div className='cards flex justify-between px-10 flex-col md:flex-row'>
          {data.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
    </div>
  );
}

export default Home;
