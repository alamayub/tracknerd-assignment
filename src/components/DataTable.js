import { Table } from 'antd';

const DataTable = ({ columns, data }) => <Table columns={columns} size='small' dataSource={data} />;

export default DataTable;