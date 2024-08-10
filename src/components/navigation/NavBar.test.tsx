import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from './NavBar';

describe('NavBar', () => {
  const items = [
    { path: '/', label: 'Home' },
    { path: '/devices', label: 'Devices' },
    { path: '/vulnerabilities', label: 'Vulnerabilities' },
  ];

  it('renders all navigation items correctly', () => {
    render(
      <MemoryRouter>
        <NavBar items={items} />
      </MemoryRouter>
    );

    items.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    });
  });
});
