import React, { useState } from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]


  return (
    <header className='py-4 shadow-lg bg-gradient-to-r from-emerald-600 to-teal-500'>
      <Container>
        <nav className='flex flex-wrap items-center justify-between'>
          <div className='flex items-center'>
            <Link to='/'>
              <Logo width='70px' />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className='md:hidden p-2 text-white hover:bg-emerald-500 rounded-lg'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Navigation items */}
          <ul className={`${isMenuOpen ? 'block' : 'hidden'} md:flex w-full md:w-auto md:ml-auto mt-4 md:mt-0 md:items-center md:space-x-2`}>
            {navItems.map((item) => 
              item.active ? (
                <li key={item.name} className='mb-2 md:mb-0'>
                  <button
                    onClick={() => {
                      navigate(item.slug)
                      setIsMenuOpen(false)
                    }}
                    className='w-full md:w-auto inline-block px-6 py-2 duration-200 text-white hover:bg-emerald-500 rounded-lg font-medium'
                  >{item.name}</button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li className='mb-2 md:mb-0'>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header