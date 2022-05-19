import { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function SideNav() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <div
        className={`sm:hidden p-3 ml-2 text-primary cursor-pointer absolute z-10 transition-all ease-in delay-200 ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <MenuIcon fontSize='large' onClick={handleClick} />
      </div>
      <div
        className={`sm:hidden p-3 ml-2 text-primary cursor-pointer absolute z-10 transition-all ease-in delay-200 ${
          open ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <CloseIcon fontSize='large' onClick={handleClick} />
      </div>
      <div className={`absolute transition-all ease-in delay-200 ${open ? '-left-[15rem]' : 'left-0'}`}>
        <div className='container flex-col justify-center items-center align-middle max-w-[15rem] py-10 bg-white h-100v'>
          {/* Profile Picture */}
          <div className='flex items-center justify-center p-3'>
            <img
              className='w-10 rounded-full'
              src='https://avatars0.githubusercontent.com/u/1299233?s=400&v=4'
              alt='profile'
            />
            <div className='p-3'>
              <h3 className='text-2xl font-bold text-primary'>John Doe</h3>
              <p className='text-sm'>@johndoe</p>
            </div>
          </div>
          {/* Navbar */}
          <div className='flex flex-col p-3 ml-2'>
            <h2 className='px-1'>Menu</h2>
            <div className='my-5'>
              <div className='py-4 hover:border-r-4 cursor-pointer border-primary text-gray-600 hover:text-gray-900 hover:font-semibold'>
                <a href='/' className='text-sm '>
                  <HomeIcon className='ml-2' />
                  <span className='ml-3'>Home</span>
                </a>
              </div>
              <div className='py-4 hover:border-r-4 cursor-pointer border-primary text-gray-600 hover:text-gray-900 hover:font-semibold'>
                <a href='/' className='text-sm '>
                  <TwoWheelerIcon className='ml-2' />
                  <span className='ml-3'>My Rides</span>
                </a>
              </div>
              <div className='py-4 hover:border-r-4 cursor-pointer border-primary text-gray-600 hover:text-gray-900 hover:font-semibold'>
                <a href='/' className='text-sm '>
                  <SettingsIcon className='ml-2' />
                  <span className='ml-3'>Settings</span>
                </a>
              </div>
              <div className='py-4 hover:border-r-4 cursor-pointer border-primary text-gray-600 hover:text-gray-900 hover:font-semibold'>
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
