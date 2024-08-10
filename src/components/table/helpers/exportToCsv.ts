import { saveAs } from 'file-saver';
import Papa from 'papaparse';
import { DataRow, Column } from './types';

/**
 * Exports selected rows of data to a CSV file.
 * @param selectedRowKeys - Array of keys identifying the selected rows.
 * @param columns - Array of column definitions for the table.
 * @param data - Array of data rows.
 * @param rowKey - Key used to identify unique rows in the data.
 */
export const exportSelectedRowsToCSV = (
  selectedRowKeys: (string | number)[],
  columns: Column[],
  data: DataRow[],
  rowKey: string
): void => {
  if (selectedRowKeys.length === 0) {
    alert('No rows selected. Please select at least one row to export.');
    return;
  }

  const filteredData = data.filter((row) =>
    selectedRowKeys.includes(row[rowKey])
  );

  const rowsToExport = filteredData.map((row) => {
    const rowToExport: { [key: string]: string | number } = {};
    columns.forEach((column) => {
      rowToExport[column.header] = column.format
        ? column.format(row[column.key])
        : row[column.key];
    });
    return rowToExport;
  });

  const csv = Papa.unparse(rowsToExport);

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  saveAs(blob, 'export.csv');
};
