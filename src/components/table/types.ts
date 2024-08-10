export interface Column {
  key: string;
  header: string;
  format?: (value: string | number | string[]) => string;
}

export interface TableProps {
  data: { [key: string]: string | number | string[] }[];
  columns: Column[];
  rowKey: string;
  onRowClick?: (id: string | number) => void;
}

export interface TableHeaderProps {
  columns: Column[];
  sortedColumn: string | null;
  sortOrder: 'asc' | 'desc';
  onHeaderClick: (columnKey: string) => void;
}

export interface TableBodyProps {
  data: { [key: string]: string | number | string[] }[];
  columns: Column[];
  rowKey: string;
  selectedRows: (string | number)[];
  onCheckboxChange: (key: string | number, isChecked: boolean) => void;
  onRowClick?: (id: string | number) => void;
}
