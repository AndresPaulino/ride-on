import React from 'react';
import SettingsForm from '../../components/Dashboard/SettingsForm';
import SideNav from '../../components/Dashboard/SideNav';
import ProfilePicture from '../../components/Dashboard/ProfilePicture';

function SettingsPage() {
  return (
    <div>
      <SideNav />
      <div className='flex flex-col'>
        <SettingsForm />
        <ProfilePicture />
      </div>
    </div>
  );
}

export default SettingsPage;
