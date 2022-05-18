import React from 'react';
import { useStateContext } from '../context/StateContext';
import axios from 'axios';

function AddParticipant({ participants, id }) {
    const { user } = useStateContext();
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            id,
            participants: participants
        };

        await axios.post('http://localhost:8080/rides/add-participants', data)
            .then(() => {
                window.location='/rides';
            }
        ).catch((err) => {
            console.log(err);
        }
        );
    }
        

  return (
    <div className='flex align-middle items-center justify-center'>
      <div className='flex align-middle items-center justify-center'>
        <button onClick={handleSubmit} className='px-2 bg-quinary rounded '>Join Ride</button>
      </div>
    </div>
  );
}

export default AddParticipant;
