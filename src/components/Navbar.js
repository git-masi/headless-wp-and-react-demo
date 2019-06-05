import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = props => {
  const { location: { pathname } } = props;

  return (
    <nav className={styles.nav}>
      <Link className={pathname === '/' ? styles.current : styles.navLink} to="/">Home</Link>
      <Link className={styles.navLink} to="/cities">Cities</Link>
      <Link className={styles.navLink} to="/bikes">Bikes</Link>
    </nav>
  )
}

export default withRouter(Navbar);