import React from 'react'

function Home(props) {

  return (
    <div className='max-w-screen max-h-screen flex flex-col justify-center items-center '>
      <div className='pt-36 pb-12'>
        <h1 className="text-9xl font-extrabold text-slate-900 text-center w-[70rem]">
          Delivering Reliable IT Services For You
        </h1>
      </div>
      <div>
        <p className='text-4xl w-[40rem] text-center text-slate-600'>
          We provide quality computer solutions for Northern Mindanao.
        </p>
      </div>
      <button onClick={props.onClick} className="btn btn-primary h-24 w-72 m-24 border-transparent bg-[#033760] hover:bg-[#0b60a1] hover:border-transparent text-2xl">
        Book Now
      </button>
    </div>
  )
}

export default Home
