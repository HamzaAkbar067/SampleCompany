import React from 'react';
import { TableBodyProps } from './types';

const TableBody: React.FC<TableBodyProps> = ({
  data,
  columns,
  rowKey,
  selectedRows,
  onCheckboxChange,
  onRowClick,
}) => {
  return (
    <tbody>
      {data.map((row) => (
        <tr
          key={row[rowKey] as React.Key}
          className={`${
            selectedRows.includes(row[rowKey] as string) ? 'bg-gray-200' : ''
          } ${onRowClick ? 'cursor-pointer' : ''}`}
          onClick={() =>
            onRowClick ? onRowClick(row[rowKey] as string) : undefined
          }
        >
          <td className="border px-4 py-2">
            <input
              type="checkbox"
              checked={selectedRows.includes(row[rowKey] as string)}
              onClick={(e) => e.stopPropagation()}
              onChange={(e) =>
                onCheckboxChange(row[rowKey] as string, e.target.checked)
              }
              data-testid={`checkbox-${row[rowKey]}`}
            />
          </td>
          {columns.map((column) => (
            <td key={column.key} className="border px-4 py-2">
              {column.format ? column.format(row[column.key]) : row[column.key]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
