import { Button, Modal, Form, Input, Tooltip } from 'antd';
import React, { useEffect, useState } from 'react';
import { addUser, updateUser } from '../config/firestore'
import { EditOutlined } from '@ant-design/icons';

const AddModal = ({ id, data }) => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => setIsModalVisible(true);
  const handleCancel = () => setIsModalVisible(false);

  const onFinish = async (values) => {
    console.log(id)
    if(id) await updateUser(id, values).then(() => handleCancel());
    else await addUser(values).then(() => handleCancel());
  };

  const rules = (title) => {
    return {
      required: true,
      message: `Please input ${title}!`,
    }
  }
  

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState(''); 
  
  
  useEffect(() => {
    if(id && data) {
      setName(data.name);
      setEmail(data.email);
      setMobile(data.mobile);
      setAddress(data.address);
    }
  }, [id]);

  return (
    <>
      {id ? <Tooltip title='Edit'>
        <Button type="primary" size='small' shape="circle" icon={<EditOutlined />} onClick={showModal} />
      </Tooltip> : <Button type="primary" onClick={showModal}>{id ? 'Update User' : 'New User'}</Button>}
      <Modal title="New Tracking Info" visible={isModalVisible} onOk={handleCancel} onCancel={handleCancel} footer={null}>
        <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish} autoComplete="off">
          <Form.Item name="name" rules={[ rules('full name') ]}>
            <Input placeholder='Name*' value={name} onChange={e => setName(e.target.value)} />
          </Form.Item>
          <Form.Item name="email" rules={[ rules('email'), { type: 'email' } ]}>
            <Input placeholder='Email*' value={email} onChange={e => setEmail(e.target.value)} />
          </Form.Item>
          <Form.Item name="mobile" rules={[ rules('mobile number') ]}>
            <Input placeholder='Mobile Number*' value={mobile} onChange={e => setMobile(e.target.value)} />
          </Form.Item>
          <Form.Item name="address" rules={[ rules('address') ]}>
            <Input placeholder='Address*' value={address} onChange={e => setAddress(e.target.value)} />
          </Form.Item>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form>
      </Modal>
    </>
  );
};

export default AddModal;