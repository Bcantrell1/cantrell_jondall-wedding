'use client';
import '../styles/globals.css';

import Background from '../components/Background';
import RsvpModal from '../components/RsvpModal';
import Story from '../components/Story';
import Floral from '../components/Floral';

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
      <Story />
      <div classNameName='bg-orange-100 pb-16'>
        <Floral src="/images/floral3.png" />
        <div data-dial-init className="fixed right-6 bottom-6 group">
          <button type="button" onClick={openModal} className="text-white text-2xl bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br shadow-lg shadow-orange-500/50 rounded-lg px-5 py-2.5 text-center">
            RSVP
            <span className="sr-only">Open actions menu</span>
          </button>
        </div>
      </div>
    </>
  )
}
