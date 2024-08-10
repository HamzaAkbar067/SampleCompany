import { useNavigate } from 'react-router-dom';
import { useFetchDevices } from '../../api/devices';
import { ErrorMsg, LoadingMsg, EmptyMsg } from '../../components/messages';
import Table from '../../components/table/Table';

function DevicesList() {
  const { data, isLoading, isError } = useFetchDevices();
  const navigate = useNavigate();

  const handleRowClick = (id: string | number) => {
    navigate(`/devices/${id}`);
  };

  const columns = [
    { key: 'id', header: 'ID' },
    { key: 'IPv4', header: 'IPv4 Address' },
    { key: 'hostname', header: 'Hostname' },
    { key: 'OperatingSystem', header: 'Operating System' },
    { key: 'Manufacturer', header: 'Manufacturer' },
  ];

  if (isLoading) return <LoadingMsg />;
  if (isError) return <ErrorMsg />;
  if (!data || data.length === 0) return <EmptyMsg />;

  return (
    <Table
      data={data}
      columns={columns}
      rowKey="id"
      onRowClick={handleRowClick}
    />
  );
}

export default DevicesList;
