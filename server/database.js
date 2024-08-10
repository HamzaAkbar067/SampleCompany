// Devices Mock Data
export const devices = [
  {
    id: 1,
    IPv4: '192.168.1.1',
    hostname: 'device1',
    MAC: '00:0a:95:9d:68:16',
    OperatingSystem: 'Windows 10',
    Manufacturer: 'Microsoft',
    model: 'XPS100',
    OpenPorts: ['80', '443'],
  },
  {
    id: 2,
    IPv4: '192.168.1.2',
    hostname: 'device2',
    MAC: '00:0a:95:9d:68:17',
    OperatingSystem: 'macOS',
    Manufacturer: 'Apple',
    model: 'MacBook Pro',
    OpenPorts: ['80', '443'],
  },
  {
    id: 3,
    IPv4: '192.168.1.3',
    hostname: 'device3',
    MAC: '00:0a:95:9d:68:18',
    OperatingSystem: 'Ubuntu',
    Manufacturer: 'Dell',
    model: 'XPS',
    OpenPorts: ['80', '443'],
  },
  {
    id: 4,
    IPv4: '192.168.1.4',
    hostname: 'device4',
    MAC: '00:0a:95:9d:68:19',
    OperatingSystem: 'Windows 10',
    Manufacturer: 'Lenovo',
    model: 'ThinkPad',
    OpenPorts: ['80', '443'],
  },
];

// Vulnerabilities Mock Data
export const vulnerabilities = [
  {
    CVE: 'CVE-2021-1234',
    Name: 'Vulnerability 1',
    Severity: 'High',
    Description: 'This is a test vulnerability',
    Solution: 'Update to latest version',
    CVSSVector: 'AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H',
    AffectedSoftware: ['Software 1', 'Software 2'],
    ExploitPresent: true,
  },
  {
    CVE: 'CVE-2021-1235',
    Name: 'Vulnerability 2',
    Severity: 'Medium',
    Description: 'This is another test vulnerability',
    Solution: 'Update to latest version',
    CVSSVector: 'AV:N/AC:M/PR:N/UI:N/S:U/C:H/I:H/A:H',
    AffectedSoftware: ['Software 3', 'Software 4'],
    ExploitPresent: false,
  },
  {
    CVE: 'CVE-2021-1236',
    Name: 'Vulnerability 3',
    Severity: 'Low',
    Description: 'This is yet another test vulnerability',
    Solution: 'Update to latest version',
    CVSSVector: 'AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:H/A:H',
    AffectedSoftware: ['Software 5', 'Software 6'],
    ExploitPresent: true,
  },
];

// Device Vulnerabilities Mock Data
export const deviceVulnerabilities = [
  { deviceId: 1, vulnerabilities: ['CVE-2021-1234', 'CVE-2021-1235'] },
  { deviceId: 2, vulnerabilities: ['CVE-2021-1235'] },
  { deviceId: 3, vulnerabilities: ['CVE-2021-1236'] },
  { deviceId: 4, vulnerabilities: ['CVE-2021-1234', 'CVE-2021-1235'] },
];
