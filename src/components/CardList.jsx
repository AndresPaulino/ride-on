import Card from './Card';

function CardList() {
  const blogs = ['What is RideOn?', 'What to expect on your first ride', 'Staying connected']
  return (
      <section className='py-10 bg-gray-900'>
          
      <div className='cards flex justify-between px-10 flex-col md:flex-row'>
        {blogs.map((blog, index) => (
          <Card key={index} blog={blog} />
        ))}
      </div>
    </section>
  );
}

export default CardList;
