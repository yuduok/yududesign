import React from 'react';
import { Form } from '@yududesign/components';
import { Input, Switch } from 'antd';

export default () => {
  const onFinish = (values: any) => {
    console.log('Received values:', values);
  };

  const onAutoSave = (values: any) => {
    console.log('Auto saved:', values);
  };

  return (
    <Form
      name="enhanced"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={onFinish}
      autoSave
      validationAnimation
      submitText="提交表单"
      onAutoSave={onAutoSave}
    >
      <Form.Item
        label="邮箱"
        name="email"
        rules={[
          { required: true, message: '请输入邮箱!' },
          { type: 'email', message: '请输入有效的邮箱地址!' }
        ]}
      >
        <Input placeholder="请输入邮箱" />
      </Form.Item>

      <Form.Item
        label="个人简介"
        name="bio"
        rules={[{ max: 100, message: '个人简介不能超过100字符!' }]}
      >
        <Input.TextArea placeholder="请输入个人简介" rows={4} />
      </Form.Item>

      <Form.Item
        label="接收通知"
        name="notification"
        valuePropName="checked"
      >
        <Switch />
      </Form.Item>
    </Form>
  );
};