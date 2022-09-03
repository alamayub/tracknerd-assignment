import { Tooltip, Button, Modal } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { deleteUser } from '../config/firestore'

const DeleteModal = ({ id }) => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => setIsModalVisible(true);
  const handleCancel = () => setIsModalVisible(false);

  const delUser = async () => {
    await deleteUser(id).then(() => handleCancel());
  }

  return (
    <> 
      <Tooltip title='Delete'>
        <Button type="danger" size='small' shape="circle" icon={<DeleteOutlined />} onClick={showModal} />
      </Tooltip>
      <Modal title="Delete User?" visible={isModalVisible} onOk={delUser} onCancel={handleCancel}>
        <p>Are you sure youe want to delete this user? You won't be able to revert.</p>
      </Modal>
    </>
  );
};

export default DeleteModal;