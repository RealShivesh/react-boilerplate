import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="nav">
      <NavLink className="nav-menu" to={'/'}>
        Home
      </NavLink>
      <NavLink className="nav-menu" to={'/about'}>
        About
      </NavLink>
    </div>
  );
};

export default Navbar;
