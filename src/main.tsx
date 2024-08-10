import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import DeviceDetails from './pages/devices/DeviceDetails.tsx';
import DeviceList from './pages/devices/DevicesList.tsx';
import VulnerabilitiesList from './pages/vulnerabilities/VulnerabilitiesList.tsx';
import './index.css';

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'devices',
        element: <DeviceList />,
      },
      {
        path: 'vulnerabilities',
        element: <VulnerabilitiesList />,
      },
      {
        path: 'devices/:id',
        element: <DeviceDetails />,
      },
    ],
  },
]);

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </React.StrictMode>
  );
} else {
  console.error('Failed to find the root element.');
}
