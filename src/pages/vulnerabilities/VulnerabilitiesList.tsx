import React from 'react';
import { useFetchVulnerabilities } from '../../api/vulnerabilities';
import { ErrorMsg, LoadingMsg, EmptyMsg } from '../../components/messages';
import Table from '../../components/table/Table';
import { columns } from '../commons/columns';

const Vulnerabilities: React.FC = () => {
  const { data, isLoading, isError } = useFetchVulnerabilities();

  if (isLoading) return <LoadingMsg />;
  if (isError) return <ErrorMsg />;
  if (!data || data.length === 0) return <EmptyMsg />;

  return <Table data={data} columns={columns} rowKey="CVE" />;
};

export default Vulnerabilities;
