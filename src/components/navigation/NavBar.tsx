import NavItem from './NavItem';
import { NavBarProps } from './types';

const NavBar: React.FC<NavBarProps> = ({ items }) => (
  <nav className="bg-zinc-200 p-4 bg-sky-100">
    <ul className="flex space-x-4">
      {items.map((item) => (
        <NavItem key={item.path} path={item.path} label={item.label} />
      ))}
    </ul>
  </nav>
);

export default NavBar;
