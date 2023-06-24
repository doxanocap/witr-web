import Link from 'next/link'

import { hasCookie } from 'cookies-next'
import { useEffect, useState } from 'react'
import DefaultButton from '../Buttons/Default'
import SelectButton from '../Buttons/Select'

// import { ROUTE_LOGIN, ROUTE_REGISTER } from '../../constants'

const Header = () => {
  const [auth, setAuth] = useState<boolean>(false)

  useEffect(() => {
    const isCookieExists = hasCookie('token')
    if (isCookieExists) {
      setAuth(true)
    }
    setAuth(false)
  }, [])

  const handleLogout = () => {
    console.log('log out button clicked')
  }

  return (
    <div className="flex justify-center bg-white">
      <header className="flex h-[100px]  sm:w-sm md:w-md justify-between px-cm items-center">
        <nav className="flex space-x-[30px] h-full justify-center items-center">
          <li className="list-none">
            <Link
              href={'/'}
              className="font-bold text-black text-h2 sm:text-h3 lg:text-h2"
            >
              Witr.kz
            </Link>
          </li>
          <li className="list-none">
            <Link
              href={'/'}
              className="font-black text-cblue text-h3 sm:text-h4 lg:text-h3"
            >
              ABOUT
            </Link>
          </li>
          <li className="list-none">
            <Link
              href={'/'}
              className="font-black text-cblue text-h3 sm:text-h4 lg:text-h3"
            >
              SERVICES
            </Link>
          </li>
          <li className="list-none">
            <Link
              href={'/'}
              className="font-black text-cblue text-h3 sm:text-h4 lg:text-h3"
            >
              PORTFOLIO
            </Link>
          </li>
          <li className="list-none">
            <Link
              href={'/'}
              className="font-black text-cblue text-h3 sm:text-h4 lg:text-h3"
            >
              CONTACTS
            </Link>
          </li>
        </nav>
        <div className="flex flex-row items-center">
          <SelectButton
            text={'ENG'}
            style={'light'}
            onClick={() => {
              window.location.reload()
            }}
          />
          <DefaultButton
            text={'Get Started'}
            style={'dark'}
            onClick={() => {
              window.location.reload()
            }}
          />
        </div>
      </header>
    </div>
  )
}

export default Header
