import React, { useState } from 'react'
import Home from './components/pages/Home'
import NavBar from './components/navbar/NavBar'
import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '2rem'
  },
};

Modal.setAppElement('body');

function App() {
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal)
  }

  return (
    <>
      <Modal
        isOpen={showModal}
        onRequestClose={toggleModal}
        style={customStyles}
        contentLabel='Form'
      >
        <form className='flex flex-col  bg-white text-xl px-12 w-[36rem] text-[#033760]'>
          <h1 className='mx-auto my-8 text-5xl font-extrabold'>Service Form</h1>
          <label className='text-2xl font-semibold'>Name</label>
          <input className='bg-slate-300 p-2 mb-3 rounded-lg focus:bg-transparent' type='text' />
          <label className='text-2xl font-semibold'>Email</label>
          <input className='bg-slate-300 p-2 mb-3 rounded-lg focus:bg-transparent' type='text' />
          <label className='text-2xl font-semibold'>Contact Number</label>
          <input className='bg-slate-300 p-2 mb-3 rounded-lg focus:bg-transparent' type='text' />
          <label className='text-2xl font-semibold'>Service</label>
          <input className='bg-slate-300 p-2 mb-3 rounded-lg focus:bg-transparent' type='text' />
          <label className='text-2xl font-semibold'>Date</label>
          <input className='bg-slate-300 p-2 mb-3 rounded-lg focus:bg-transparent' type='date' />
          <label className='text-2xl font-semibold'>Remarks</label>
          <textarea className='bg-slate-300 p-2 mb-3 rounded-lg focus:bg-transparent resize-none h-32' type='text' />
          <button className="btn btn-primary my-6 text-xl bg-[#033760]  hover:bg-[#0b60a1] hover:border-transparent">
            Book Now
          </button>
        </form>

      </Modal>
      <NavBar />
      <Home onClick={toggleModal} />
    </>
  )
}

export default App
