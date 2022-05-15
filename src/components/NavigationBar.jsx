import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import logo from '../assets/images/logos/Motorcycle.svg';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', current: true },
  { name: 'Find Your Next Ride', href: '/login', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <Disclosure as='nav' className='bg-gray-900'>
      {({ open }) => (
        <>
          <div className='mx-auto px-2 sm:px-6 lg:px-8 shadow-lg z-10 w-full bg-gray-900 fixed'>
            <div className='relative flex items-center justify-between h-16'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-quinary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex-1 flex justify-center align-middle sm:items-stretch sm:justify-start items-center'>
                <div className='flex-shrink-0 flex-col items-center align-middle justify-center'>
                  <img
                    className='flex lg:hidden h-10 w-full fill-white align-middle justify-center items-center'
                    src={logo}
                    alt='logo'
                  />
                  <img
                    className='hidden lg:flex h-10 w-auto fill-white align-middle justify-center items-center'
                    src={logo}
                    alt='logo'
                  />
                  <span className='font-bold text-quinaryDark font-dancing flex justify-center'>RideOn</span>
                </div>
                <div className='hidden sm:flex sm:ml-6 justify-center items-center'>
                  <div className='flex space-x-4'>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-quinary hover:bg-quinaryDark text-white'
                            : 'text-gray-300 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                {/* Profile dropdown */}
                <Menu as='div' className='ml-3 relative z-50'>
                  <div>
                    <Menu.Button className='bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                      <span className='sr-only'>Open user menu</span>
                      {/* Profile picture */}
                      <img
                        className='h-8 w-8 rounded-full'
                        src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                        alt='profile'
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-350'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-350'
                    leaveFrom='transform opacity-100 scale-300'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10 duration-150 ease-in-out'>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='/'
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='/'
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='/'
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden transition ease-in-out duration-300'>
            <div className='px-2 pt-2 pb-3 space-y-1 fixed top-16 bg-gray-900 w-full z-10 shadow-xl'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-quinary hover:bg-quinaryDark text-white' : 'text-gray-300 hover:text-textColor',
                    'block px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
