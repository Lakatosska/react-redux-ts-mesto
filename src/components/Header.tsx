import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.svg';
import styles from './style.module.css';


export const Header: FC = () => {
  return (
    <header className='header'>
      <NavLink to='/' >
        <img className='header__logo' src={logo} alt='Логотип соцсети Mesto' />
      </NavLink>

      <nav>
        <ul className='header__nav'>
          <li className='header__link'>
            <NavLink to='/' 
              className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active_link : ''}`
              }>
              Главная
            </NavLink>
          </li>


          <li className='header__link'>
            <NavLink to='/about' 
              className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active_link : ''}`
              }>
              Обо мне
            </NavLink>
          </li>

          <li>
            <NavLink to='/places' className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active_link : ''}`
              }>
              Места
            </NavLink>
          </li>
        </ul>
      </nav>

    </header>
  )
};