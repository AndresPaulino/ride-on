function AddParticipant({ increment, handleSave }) {

  const handleClick = (e) => {
    e.preventDefault();
    increment();
    handleSave();
  };

  return (
    <div className='flex align-middle items-center justify-center z-30'>
      <div className='flex align-middle items-center justify-center'>
        <button onClick={handleClick} className='px-2 py-1 bg-quinary rounded hover:bg-quinaryDark hover:text-textColor'>
          Join Ride
        </button>
      </div>
    </div>
  );
}

export default AddParticipant;
