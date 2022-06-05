import { useStateContext } from '../../context/StateContext';
import NavigationBar from '../../components/NavigationBar';
import HeroBanner from '../../components/HeroBanner';
import CardList from '../../components/CardList';
import Footer from '../../components/Footer';

function Home() {
  const { user, failedAuth } = useStateContext();

  if (failedAuth) {
    window.location = '/';
  }

  return (
    <div>
      <NavigationBar userName={user.user_name} />
      <div className='max-w-[100rem] mx-auto'>
        <HeroBanner />
        <CardList />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
