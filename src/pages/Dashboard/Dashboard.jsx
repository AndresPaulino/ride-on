import { useState } from 'react';
import DashboardMain from '../../components/Dashboard/DashboardMain';
import SideNav from '../../components/Dashboard/SideNav';

function Dashboard() {
  return (
    <div>
      <SideNav />
      <DashboardMain />
    </div>
  );
}

export default Dashboard;
