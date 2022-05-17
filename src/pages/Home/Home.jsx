import NavigationBar from '../../components/NavigationBar';
import HeroBanner from '../../components/HeroBanner';
import CardList from '../../components/CardList';
import Footer from '../../components/Footer';
import { user } from '../../context/StateContext';

function Home(props) {

  console.log(props);
  return (
    <div>
      <NavigationBar />
      <HeroBanner />
      <CardList />
      <Footer />
    </div>
  );
}

export default Home;
