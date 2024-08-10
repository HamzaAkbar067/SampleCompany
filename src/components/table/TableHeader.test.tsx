import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import TableHeader from './TableHeader';

describe('TableHeader', () => {
  const onHeaderClick = vi.fn();
  const columns = [
    { key: 'id', header: 'ID' },
    { key: 'name', header: 'Name' },
  ];

  it('renders the table headers', () => {
    render(
      <TableHeader
        columns={columns}
        sortedColumn="id"
        sortOrder="asc"
        onHeaderClick={onHeaderClick}
      />
    );

    columns.forEach((column) => {
      expect(screen.getByText(column.header)).toBeInTheDocument();
    });
  });

  it('calls onHeaderClick when a header is clicked', () => {
    render(
      <TableHeader
        columns={columns}
        sortedColumn="id"
        sortOrder="asc"
        onHeaderClick={onHeaderClick}
      />
    );

    fireEvent.click(screen.getByText('ID'));
    expect(onHeaderClick).toHaveBeenCalledWith('id');
  });

  it('displays the sort direction indicator for the sorted column', () => {
    render(
      <TableHeader
        columns={columns}
        sortedColumn="id"
        sortOrder="asc"
        onHeaderClick={onHeaderClick}
      />
    );

    const sortIndicator = screen.getByText('▲');
    expect(sortIndicator).toBeInTheDocument();
  });
});
