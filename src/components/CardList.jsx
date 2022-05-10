import Card from './Card';

function CardList() {
  const popularCities = ['Miami', 'California', 'Toronto']
  return (
      <section className='py-10 bg-gray-300'>
          <div className="flex justify-center center ">
                <h2 className='pb-10 font-bold text-5xl'>Popular Cities</h2>
          </div>
      <div className='cards flex justify-between px-10 flex-col md:flex-row'>
        {popularCities.map((city, index) => (
          <Card key={index} city={city} />
        ))}
      </div>
    </section>
  );
}

export default CardList;
