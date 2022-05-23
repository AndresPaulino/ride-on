import { useState } from 'react';
import DashboardMain from '../../components/Dashboard/DashboardMain';
import SideNav from '../../components/Dashboard/SideNav';
import Settings from '../../components/Dashboard/Settings';

function Dashboard() {
  const [settings, setSettings] = useState(false);
  const [profile, setProfile] = useState(false);


  return (
    <div>
      <SideNav settings={settings} profile={profile} />
      {settings ? <Settings open={settings} /> : null}
      <DashboardMain />
    </div>
  );
}

export default Dashboard;
