'use client';
import '../styles/globals.css';

import Background from '../component/Background';
import RsvpModal from '../component/RsvpModal';
import { useContext } from 'react';
import { AppContext } from './layout';

export default function HomePage() {
  const { setIsOpen } = useContext(AppContext);

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <RsvpModal />
      <Background />
      <button className="text-3xl mt-5" onClick={openModal}>RSVP</button>
    </>
  )
}
