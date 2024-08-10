import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  useFetchDeviceDetails,
  useFetchDeviceVulnerabilities,
} from '../../api/devices';
import { ErrorMsg, LoadingMsg, EmptyMsg } from '../../components/messages';
import Table from '../../components/table/Table';
import Button from '../../components/Button/Button';
import { columns } from '../commons/columns'; // Import column config
import DeviceProperties from './DeviceProperties'; // Import the new component

const DeviceDetails: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const deviceId = Number(id);

  const {
    data: device,
    isLoading: isLoadingDevice,
    isError: isErrorDevice,
  } = useFetchDeviceDetails(deviceId);

  const { data: vulnerabilities, isLoading: isLoadingVulnerabilities } =
    useFetchDeviceVulnerabilities(deviceId);

  if (isLoadingDevice || isLoadingVulnerabilities) return <LoadingMsg />;
  if (isErrorDevice) return <ErrorMsg />;
  if (!device) return <EmptyMsg />;

  return (
    <>
      <section className="p-4 bg-white rounded shadow">
        <Button onClick={() => navigate('/devices')} text="Back" />
        <h2 className="text-xl font-bold mb-4">Device Details</h2>
        <DeviceProperties />
      </section>

      {vulnerabilities && vulnerabilities.length > 0 ? (
        <section className="p-4 bg-white rounded shadow mt-4">
          <h2 className="text-xl font-bold mb-4">Vulnerabilities</h2>
          <Table
            data={
              Array.isArray(vulnerabilities)
                ? vulnerabilities
                : [vulnerabilities]
            }
            columns={columns}
            rowKey="CVE"
          />
        </section>
      ) : (
        <EmptyMsg />
      )}
    </>
  );
};

export default DeviceDetails;
