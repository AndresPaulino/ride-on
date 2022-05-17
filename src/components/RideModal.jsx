import { useState } from 'react';
import ModalForm from './ModalForm';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

export default function RideModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const style = {
    position: 'absolute',
    top: '25rem',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    zIndex: 100,
  };

  return (
    <div className='relative'>
      <button
        className='bg-quinary py-2 px-4 transition-all rounded hover:bg-quinaryDark hover:text-textColor'
        onClick={handleOpen}
      >
        Create a Ride
      </button>
      {open && (
        <Modal open={open} onClose={handleOpen}>
        <Box sx={style}>
            <ModalForm onClose={handleOpen}/>
          </Box>
        </Modal>
      )}
    </div>
  );
}
