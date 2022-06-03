import DashboardMain from '../../components/Dashboard/DashboardMain';
import SideNav from '../../components/Dashboard/SideNav';

function Dashboard() {
  return (
    <div className='h-full'>
      <div className='h-full bg-white'>
        <SideNav />
      </div>
      <DashboardMain />
    </div>
  );
}

export default Dashboard;
