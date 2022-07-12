import { FC } from 'react';
import logo from '../images/logo.svg'

export const Header: FC = () => {
  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt='Логотип соцсети Mesto' />
    </header>
  )
};