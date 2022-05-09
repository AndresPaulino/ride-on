import React from 'react';
import NavigationBar from '../../components/NavigationBar';
import Card from '../../components/Card';

function Home() {
  return (
    <div>
      <NavigationBar />
      <div className='cards flex'>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Home;
