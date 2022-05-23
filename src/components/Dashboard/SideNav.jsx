import { useState, useEffect } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useStateContext } from '../../context/StateContext';

function SideNav() {
  const { user } = useStateContext();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    
    window.addEventListener('resize', () => {
      if (window.innerWidth > 640) {
        setOpen(true);
      }
      if (window.innerWidth < 640) {
        setOpen(false);
      }
    });
  };

  const handleClick = () => {
    setOpen(!open);
  };

  const logout = () => {
    sessionStorage.removeItem('token');
    window.location = '/';
  };

  useEffect(() => { 
    if (window.innerWidth > 640) {
      setOpen(true);
    }
    if (window.innerWidth < 640) {
      setOpen(false);
    }
  });

  return (
    <>
      {/* Close Icon */}
      <div
        className={`sm:hidden p-3 ml-2 text-gray-400 cursor-pointer absolute z-20 transition-all ease-in delay-200 ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <CloseIcon fontSize='large' onClick={handleClick} />
      </div>
      {/* Menu Icon */}
      <div
        className={`sm:hidden p-3 ml-2 text-gray-400 cursor-pointer absolute z-20 transition-all ease-in delay-200 ${
          open ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <MenuIcon fontSize='large' onClick={handleClick} />
      </div>
      {/* Side Nav */}
      <div
        onChange={handleOpen()} // always display side nav on tablet + desktop
        className={`z-10 absolute transition-all ease-in delay-200 sm:block border-r-2 drop-shadow-right ${open ? 'left-0' : '-left-[15rem]'}`}
      >
        <div className='container flex-col justify-center items-center align-middle max-w-[15rem] py-10 bg-white h-screen'>
          {/* Profile Picture */}
          <div className='flex items-center justify-center p-3'>
            <img className='w-10 rounded-full' src={user.profile_img} alt='profile' />
            <div className='p-3'>
              <h3 className='text-2xl font-bold text-primary'>{user.user_name}</h3>
            </div>
          </div>
          {/* Navbar */}
          <div className='flex flex-col p-3 ml-2'>
            <h2 className='px-1 text-primary border-quinary border-b-2 w-fit font-semibold'>Menu</h2>
            <div className='my-5'>
              <div className='py-4 hover:border-r-4 cursor-pointer border-quinary text-primary hover:font-semibold'>
                <a href='/home' className='text-sm '>
                  <HomeIcon className='ml-2' />
                  <span className='ml-3 text-primary hover:text-primary'>Home</span>
                </a>
              </div>
              <div className='py-4 hover:border-r-4 cursor-pointer border-quinary text-primary hover:font-semibold'>
                <a href='/' className='text-sm '>
                  <TwoWheelerIcon className='ml-2' />
                  <span className='ml-3'>My Rides</span>
                </a>
              </div>
              <div className='py-4 hover:border-r-4 cursor-pointer border-quinary text-primary hover:font-semibold'>
                <a href='/' className='text-sm '>
                  <SettingsIcon className='ml-2' />
                  <span className='ml-3'>Settings</span>
                </a>
              </div>
              <div
                className='py-4 hover:border-r-4 cursor-pointer border-quinary text-primary hover:font-semibold'
                onClick={logout}
              >
                <a href='/' className='text-sm '>
                  <LogoutIcon className='ml-2' />
                  <span className='ml-3'>Log Out</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideNav;
