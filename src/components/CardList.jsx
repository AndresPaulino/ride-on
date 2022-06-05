import Card from './Card';

function CardList() {
  const blogs = [
    {
      title: 'What is RideOn?',
      background:
        'https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'Join your first ride',
      background:
        'https://images.pexels.com/photos/980382/pexels-photo-980382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'What to expect',
      background:
        'https://images.pexels.com/photos/163789/sky-road-travel-trip-163789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  return (
    <section className='py-10 mt-10 bg-[#1f2937]'>
      <div className='cards flex justify-between flex-col gap-5 md:flex-row'>
        {blogs.map((blog, index) => (
          <Card key={index} blog={blog} />
        ))}
      </div>
    </section>
  );
}

export default CardList;
