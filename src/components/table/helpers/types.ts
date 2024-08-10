export interface DataRow {
  [key: string]: string | number;
}

export interface Column {
  header: string;
  key: string;
  format?: (value: string | number) => string;
}
