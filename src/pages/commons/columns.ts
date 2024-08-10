import { Column } from './types';

export const columns: Column[] = [
  { key: 'CVE', header: 'CVE' },
  { key: 'Name', header: 'Name' },
  { key: 'Severity', header: 'Severity' },
  { key: 'Description', header: 'Description' },
  { key: 'Solution', header: 'Solution' },
  { key: 'CVSSVector', header: 'CVSS Vector' },
  {
    key: 'AffectedSoftware',
    header: 'Affected Software',
    format: (value: string | number | string[]): string =>
      Array.isArray(value) ? value.join(', ') : String(value),
  },
  { key: 'ExploitPresent', header: 'Exploit Present' },
];
