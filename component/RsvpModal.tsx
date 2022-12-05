import { useContext, useState } from 'react';
import Modal from 'react-modal';
import { AppContext } from '../app/layout';
import { db } from '../lib/pocketbase';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  }
};

export default function RsvpModal() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [completedRsvp, setCompletedRsvp] = useState(false);
  const { modalIsOpen, setIsOpen } = useContext(AppContext);

  const create = async (e: any) => {
    e.preventDefault();

    try {
      await db.collection('rsvps').create({
        fname,
        lname
      });
    } catch (err) {
      console.log('Error', err);
    }

    setFname('');
    setLname('');
    setCompletedRsvp(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >

      <button onClick={closeModal}>close</button>

      {
        !completedRsvp ?
          <form onSubmit={create}>
            <h3>Please RSVP</h3>

            <input
              type="text"
              placeholder="First Name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
            <input
              type="text"
              placeholder='Last Name'
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />

            <button type="submit">
              Create Rsvp
            </button>
          </form>
          :
          <div>Thanks for RSVPing to our wedding!</div>
      }
    </Modal>
  )
}
