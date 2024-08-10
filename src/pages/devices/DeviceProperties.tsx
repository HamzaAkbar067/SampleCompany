import React from 'react';
import { DeviceProperty } from './types';

const DeviceProperties: React.FC = () => {
  const deviceProperties: DeviceProperty[] = [
    { label: 'ID', value: 'some-id' },
    { label: 'IPv4', value: '192.168.1.1' },
    { label: 'Hostname', value: 'hostname' },
    { label: 'MAC', value: '00:1A:2B:3C:4D:5E' },
    { label: 'Operating System', value: 'OS Name' },
    { label: 'Manufacturer', value: 'Manufacturer Name' },
    { label: 'Model', value: 'Model Name' },
    { label: 'Open Ports', value: '80, 443' },
  ];

  return (
    <div className="flex flex-wrap">
      {deviceProperties.map(({ label, value }) => (
        <div key={label} className="w-1/2">
          <strong>{label}:</strong> {value}
        </div>
      ))}
    </div>
  );
};

export default DeviceProperties;
