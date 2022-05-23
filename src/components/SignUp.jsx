import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../assets/images/logos/Motorcycle.svg';

function SignUp() {
  // States
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Context
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  // Sign up user
  async function handleSubmit(e) {
    e.preventDefault();

    // Set loading to true to prevent user from submitting form again
    setLoading(true);
    setError('');

    // Validate form
    if (
      !usernameRef.current.value ||
      !emailRef.current.value ||
      !passwordRef.current.value ||
      !confirmPasswordRef.current.value
    ) {
      setError('Please fill in all fields');
      setLoading(false);

      return;
    }
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setError('Passwords do not match');
      setLoading(false);

      return;
    }
    if (passwordRef.current.value.length < 6) {
      setError('Password must be at least 6 characters');
      setLoading(false);

      return;
    }

    // Create user
    await axios
      .post('http://localhost:8080/register', {
        username: usernameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then(() => {
        notifySuccess();
        e.target.reset();
        console.log(error);
        setTimeout(() => {
          window.location = '/';
        }, 2000);
      })
      .catch((error) => {
        setError('An error occurred, please try again');
        setLoading(false);
      });
  }

  // Error Toast
  const notifyError = () =>
    toast.error(error, {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  // Success Toast
  const notifySuccess = () =>
    toast.success('Successfully signed up!', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <section className='flex flex-wrap w-full h-full bg-gray-900'>
      {/* Display Toast error */}
      <div className='absolute z-20 text-transparent'>{error && notifyError()}</div>
      <div className='flex flex-col w-full md:w-1/2'>
        <div className='flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-10 md:ml-16'>
          <a href='/' className='py-2 px-4 text-2xl font-bold text-white bg-quinary font-dancing'>
            RideOn.
          </a>
        </div>
        <div className='flex justify-center items-center align-middle pt-14 md:w-10 md:absolute md:ml-16 '>
          <img src={logo} alt='logo' className='w-36' />
        </div>
        <div className='flex flex-col justify-center items-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32'>
          <p className='text-3xl text-center text-textColor md:pt-8'>Welcome</p>
          {/* Form */}
          <form className='flex flex-col pt-3 md:pt-8' onSubmit={handleSubmit}>
            {/* Username */}
            <div className='flex flex-col'>
              <div className='flex relative '>
                <span className=' inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm'>
                  <svg width='15' height='15' fill='currentColor' viewBox='0 0 1792 1792'>
                    <path d='M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z'></path>
                  </svg>
                </span>
                <input
                  type='text'
                  id='username'
                  name='username'
                  className=' flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:secondary focus:border-transparent'
                  placeholder='Username'
                  ref={usernameRef}
                  autoComplete='off'
                />
              </div>
            </div>
            {/* Email */}
            <div className='flex flex-col pt-4'>
              <div className='flex relative '>
                <span className=' inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm'>
                  <svg
                    width='15'
                    height='15'
                    fill='currentColor'
                    viewBox='0 0 1792 1792'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z'></path>
                  </svg>
                </span>
                <input
                  type='text'
                  id='email'
                  name='email'
                  className=' flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:secondary focus:border-transparent'
                  placeholder='Email'
                  ref={emailRef}
                  autoComplete='off'
                />
              </div>
            </div>
            {/* Password */}
            <div className='flex flex-col pt-4'>
              <div className='flex relative '>
                <span className=' inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm'>
                  <svg
                    width='15'
                    height='15'
                    fill='currentColor'
                    viewBox='0 0 1792 1792'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z'></path>
                  </svg>
                </span>
                <input
                  type='password'
                  id='password'
                  name='password'
                  className=' flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:secondary focus:border-transparent'
                  placeholder='Password'
                  ref={passwordRef}
                />
              </div>
            </div>
            {/* Confirm Password */}
            <div className='flex flex-col pt-4 mb-12'>
              <div className='flex relative '>
                <span className=' inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm'>
                  <svg
                    width='15'
                    height='15'
                    fill='currentColor'
                    viewBox='0 0 1792 1792'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z'></path>
                  </svg>
                </span>
                <input
                  type='password'
                  id='confirmPassword'
                  name='confirmPassword'
                  className=' flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:secondary focus:border-transparent'
                  placeholder='Confirm Password'
                  ref={confirmPasswordRef}
                />
              </div>
            </div>
            {/* Register Button */}
            <button
              disabled={loading}
              className='w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-quinary shadow-md hover:text-black hover:bg-quinaryDark focus:outline-none focus:ring-2'
            >
              <span className='w-full text-textColor'>Register</span>
            </button>
          </form>
          <div className='pt-12 pb-12 text-center'>
            <p className='text-textColor'>
              Already have an account?
              <Link to='/login' className='font-semibold underline ml-3 text-quinary hover:text-quinaryDark'>
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/* Aside image */}
      <div className='w-1/2 shadow-2xl'>
        <img
          alt='pic'
          className='hidden object-cover w-full h-screen md:block'
          src='https://images.pexels.com/photos/1887195/pexels-photo-1887195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        />
      </div>

      {/* Toast Values */}
      <ToastContainer
        position='top-center'
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
  );
}

export default SignUp;
