import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import { ReactNode } from 'react';
import { vi } from 'vitest';
import DevicesList from './DevicesList';

const mockUseFetchDeviceDetails = vi.fn();

vi.mock('../api/devices', async (importOriginal) => {
  return {
    ...(await importOriginal<typeof import('../../api/devices')>()),
    useFetchDevices: () => mockUseFetchDeviceDetails(),
  };
});

vi.mock('react-router-dom', async (importOriginal) => {
  return {
    ...(await importOriginal<typeof import('react-router-dom')>()),
    useNavigate: () => vi.fn(),
    useLocation: () => ({ pathname: '/' }),
  };
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('DevicesList', () => {
  it('should render loading message', () => {
    mockUseFetchDeviceDetails.mockReturnValue({
      isLoading: true,
    });

    render(<DevicesList />, { wrapper });

    expect(screen.getByText('Loading...')).toBeVisible();
  });
});
