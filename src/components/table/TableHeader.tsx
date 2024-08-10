import React from 'react';
import { TableHeaderProps } from './types';

const TableHeader: React.FC<TableHeaderProps> = ({
  columns,
  sortedColumn,
  sortOrder,
  onHeaderClick,
}) => {
  return (
    <thead>
      <tr>
        <th className="px-4 py-2">Select</th>
        {columns.map((column) => (
          <th
            key={column.key}
            className="px-4 py-2 cursor-pointer"
            onClick={() => onHeaderClick(column.key)}
          >
            {column.header}
            {sortedColumn === column.key && (
              <span>{sortOrder === 'asc' ? '▲' : '▼'}</span>
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
