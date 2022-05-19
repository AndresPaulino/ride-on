function AddParticipant({ increment }) {

  return (
    <div className='flex align-middle items-center justify-center'>
      <div className='flex align-middle items-center justify-center'>
        <button onClick={increment} className='px-2 py-1 bg-quinary rounded hover:bg-quinaryDark hover:text-textColor'>
          Join Ride
        </button>
      </div>
    </div>
  );
}

export default AddParticipant;
