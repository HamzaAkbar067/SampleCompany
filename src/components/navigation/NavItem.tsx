import { NavLink } from 'react-router-dom';
import { NavItemProps } from './types';

const NavItem: React.FC<NavItemProps> = ({ path, label }) => {
  return (
    <li className="relative text-blue-700">
      <NavLink
        to={path}
        className={({ isActive }) =>
          `block px-4 py-2 ${isActive && 'border-b-4 border-blue-500'}`
        }
      >
        {label}
      </NavLink>
    </li>
  );
};

export default NavItem;
