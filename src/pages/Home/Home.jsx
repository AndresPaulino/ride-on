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
      <HeroBanner />
      <CardList />
      <Footer />
    </div>
  );
}

export default Home;
