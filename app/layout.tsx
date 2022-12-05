'use client';
import { createContext, useState, ReactNode } from 'react';

import Modal from 'react-modal';
Modal.setAppElement('#main');

export const AppContext = createContext();

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  const [modalIsOpen, setIsOpen] = useState(false);
  return (
    <html>
      <head />
      <body id="main">
        <AppContext.Provider value={{ modalIsOpen, setIsOpen }}>
          {children}
        </AppContext.Provider>
      </body>
    </html>
  )
}
