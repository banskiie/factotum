import React from 'react'
import logo from '../../assets/images/logo.png'

const PAGES = ['HOME', 'ABOUT', 'SERVICES', 'PORTFOLIO', 'CONTACT']

function NavBar() {
  return (
    <nav className='sticky flex flex-row items-center font-semibold justify-between bg-[#033760] text-slate-200 py-5 px-20'>
      <img src={logo} alt='logo' className='h-16'/>
      <ul className='flex flex-row'>
        {PAGES.map(page =>
          <li key={page} className='ml-8 text-xl'>
            {page}
          </li>
        )}
      </ul>
    </nav>
  )
}

export default NavBar