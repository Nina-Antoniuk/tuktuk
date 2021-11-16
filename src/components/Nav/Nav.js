import { NavLink } from 'react-router-dom';
import s from './Nav.module.scss';

function Nav() {
  return (
    <nav className={s.Nav}>
      <ul className={s.NavList}>
        <li>
          <NavLink
            exact
            to="/"
            className={s.NavLink}
            activeClassName={s.activeLink}
          >
            News
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/profile/${'dave.xp'}`}
            className={s.NavLink}
            activeClassName={s.activeLink}
          >
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
