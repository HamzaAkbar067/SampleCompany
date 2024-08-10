import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from './components/navigation/NavBar';
import HomePage from './pages/home/HomePage';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/devices', label: 'Devices' },
  { path: '/vulnerabilities', label: 'Vulnerabilities' },
];

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div>
      <header>
        <NavBar items={navItems} />
      </header>
      <main>{location.pathname === '/' ? <HomePage /> : <Outlet />}</main>
    </div>
  );
};

export default App;
