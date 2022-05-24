function RemoveParticipant({ decriment, handleDelete }) {
  const handleClick = (e) => {
    decriment();
    handleDelete();
  };

  return (
    <div className='flex align-middle items-center justify-center z-30'>
      <div className='flex align-middle items-center justify-center'>
        <button onClick={handleClick} className='px-2 py-1 bg-quinaryDark text-textColor rounded hover:bg-quinary hover:text-primary'>
          Leave Ride
        </button>
      </div>
    </div>
  );
}

export default RemoveParticipant;
