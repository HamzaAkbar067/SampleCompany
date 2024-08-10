export const sortData = (
  data: { [key: string]: string | number | string[] }[],
  sortColumn: string | null,
  sortDirection: 'asc' | 'desc'
): { [key: string]: string | number | string[] }[] => {
  if (sortColumn === null || data.length === 0) {
    return data;
  }

  return [...data].sort((a, b) => {
    const valueA = a[sortColumn];
    const valueB = b[sortColumn];

    if (valueA === undefined || valueB === undefined) {
      return 0;
    }

    let comparison = 0;

    if (typeof valueA === 'string' && typeof valueB === 'string') {
      comparison = valueA.localeCompare(valueB);
    } else if (typeof valueA === 'number' && typeof valueB === 'number') {
      comparison = valueA - valueB;
    } else if (Array.isArray(valueA) && Array.isArray(valueB)) {
      comparison = valueA.join(',').localeCompare(valueB.join(','));
    }

    return sortDirection === 'asc' ? comparison : -comparison;
  });
};
