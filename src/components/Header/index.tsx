import Link from 'next/link'

import WitrLogo from '@/icons/logoHeader.svg'
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
      <header className="flex justify-between items-center h-[100px] lg:w-lg md:w-md md:px-md">
        <nav className="flex justify-center items-center h-full md:space-x-[20px] lg:space-x-[30px]">
          <li className="list-none">
            <div className="flex cursor-pointer h-full items-center">
              <WitrLogo />
            </div>
          </li>

          {HeaderTexts.map((item, key) => (
            <li key={key} className="list-none">
              <Link
                href={'/'}
                className="font-black text-cblue md:text-h14 lg:text-h20"
              >
                {item}
              </Link>
            </li>
          ))}
        </nav>
        <nav className="flex justify-center items-center h-full md:space-x-[15px] lg:space-x-[30px]">
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
              text="Leave a request"
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
