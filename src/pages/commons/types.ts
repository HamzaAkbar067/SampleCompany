export interface Column {
  key: string;
  header: string;
  format?: (value: string | number | string[]) => string;
}
