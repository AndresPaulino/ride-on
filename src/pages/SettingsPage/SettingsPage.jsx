import React from 'react';
import SettingsForm from '../../components/Dashboard/SettingsForm';
import SideNav from '../../components/Dashboard/SideNav';

function SettingsPage() {
  return (
    <div>
      <SideNav />
      <div className=''>
        <SettingsForm />
      </div>
    </div>
  );
}

export default SettingsPage;
