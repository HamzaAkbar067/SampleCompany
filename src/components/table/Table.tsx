// Table.tsx
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import { exportSelectedRowsToCSV } from './helpers/exportToCsv';
import { sortData } from './helpers/sortData';
import { DataRow } from './helpers/types';
import { TableProps } from './types';

const Table: React.FC<TableProps> = ({ data, columns, rowKey, onRowClick }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sortedColumn, setSortedColumn] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]);

  const handleCheckboxChange = (key: string | number, isChecked: boolean) => {
    setSelectedRows((prevSelectedRows) =>
      isChecked
        ? [...prevSelectedRows, key]
        : prevSelectedRows.filter((row) => row !== key)
    );
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const column = params.get('sortColumn');
    const direction = params.get('sortDirection');
    if (column) setSortedColumn(column);
    if (direction === 'asc' || direction === 'desc') setSortOrder(direction);
  }, [location.search]);

  const handleHeaderClick = (key: string) => {
    const newSortOrder: 'asc' | 'desc' =
      sortedColumn === key ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc';

    setSortedColumn(key);
    setSortOrder(newSortOrder);
    navigate(`?sortColumn=${key}&sortDirection=${newSortOrder}`);
  };

  const handleExportClick = () => {
    if (selectedRows.length === 0) {
      alert('No rows selected. Please select at least one row to export.');
      return;
    }

    try {
      exportSelectedRowsToCSV(selectedRows, columns, data as DataRow[], rowKey);
      alert('Export successful!');
    } catch (error) {
      console.error(error);
      alert('Export failed. Please try again.');
    }
  };

  const sortedData = sortData(data, sortedColumn, sortOrder);

  return (
    <section className="p-4 bg-white rounded shadow">
      <Button onClick={handleExportClick} text="Export Selected Rows" />
      <article>
        <table className="w-full text-left table-auto">
          <TableHeader
            columns={columns}
            sortedColumn={sortedColumn}
            sortOrder={sortOrder}
            onHeaderClick={handleHeaderClick}
          />
          <TableBody
            data={sortedData}
            columns={columns}
            rowKey={rowKey}
            selectedRows={selectedRows}
            onCheckboxChange={handleCheckboxChange}
            onRowClick={onRowClick}
          />
        </table>
      </article>
    </section>
  );
};

export default Table;
