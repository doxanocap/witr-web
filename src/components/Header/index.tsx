import Link from 'next/link'

import { hasCookie } from 'cookies-next'
import { useEffect, useState } from 'react'
import DefaultButton from '../Buttons/Default'
import SelectButton from '../Buttons/Select'

const HeaderTexts = ['ABOUT', 'SERVICES', 'PORTFOLIO', 'CONTACTS']

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
      <header className="flex justify-between items-center h-[100px] lg:w-lg md:w-md md:px-md lg:px-lg">
        <nav className="flex justify-center items-center h-full sm:space-x-[5px] md:space-x-[25px] lg:space-x-[30px]">
          <li className="list-none">
            <Link
              href={'/'}
              className="font-bold text-black text-h2 xs:text-h5 sm:text-h4 md:text-h3 lg:text-h2"
            >
              Witr.kz
            </Link>
          </li>
          {HeaderTexts.map((item, key) => (
            <li key={key} className="list-none">
              <Link
                href={'/'}
                className="font-black text-cblue sm:text-h5 md:text-h4 lg:text-h3"
              >
                {item}
              </Link>
            </li>
          ))}
        </nav>
        <nav className="flex justify-center items-center h-full sm:space-x-[5px] md:space-x-[15px] lg:space-x-[30px]">
          <li className="list-none">
            <SelectButton
              text="ENG"
              style="light"
              marginX="7.5px"
              onClick={() => {
                window.location.reload()
              }}
            />
          </li>
          <li className="list-none">
            <DefaultButton
              text="Get Started"
              style="dark"
              marginX="7.5px"
              onClick={() => {
                window.location.reload()
              }}
            />
          </li>
        </nav>
      </header>
    </div>
  )
}

export default Header
