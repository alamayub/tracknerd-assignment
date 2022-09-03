import { useEffect, useState } from 'react';
import { Space } from 'antd';
import { getUsersList } from '../config/firestore';
import DataTable from './DataTable'
import DeleteModal from './DeleteModal';
import AddModal from './AddModal';
import { getDate } from '../config/helper'

const GetUsers = () => {

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name', sorter: true, },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Mobile', dataIndex: 'mobile', key: 'mobile' },
    { title: 'Address', dataIndex: 'address', key: 'address' },
    { 
      title: 'Created Date', dataIndex: 'createdAt', key: 'createdAt',
      render: (_, record) => <small>{getDate(record.createdAt)}</small>,
    },
    { 
      title: 'Updated Date', dataIndex: 'updatedAt', key: 'updatedAt',
      render: (_, record) => <small>{getDate(record.updatedAt)}</small>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <AddModal id={record.id} data={record} />
          <DeleteModal id={record.id} />
        </Space>
      ),
    },
  ];

  const [data, setData] = useState([]);
  useEffect(() => {
    getUsersList(setData)
  }, []);
  return (
    <DataTable columns={columns} data={data} rowKey={(record) => record.id} />
  );
}
 
export default GetUsers;