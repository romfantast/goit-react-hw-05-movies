import React from 'react';
import { BiHome, BiMoviePlay } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import css from './Appbar.module.css';

const navItems = [
  { href: '/', text: 'Home', icon: BiHome },
  { href: 'movies', text: 'Movies', icon: BiMoviePlay },
];

export const Appbar = () => {
  return (
    <header className={css.header}>
      <nav className={css.navigation}>
        {navItems.map(({ href, text, icon: Icon }) => (
          <NavLink key={href} to={href} className={css.navLink}>
            <Icon />
            {text}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};
