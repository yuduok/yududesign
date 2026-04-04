import React from 'react';
import { Form } from '@yududesign/components';
import { Input } from '@yududesign/components';

export default () => (
  <Form
    layout="vertical"
    onFinish={(values) => console.log(values)}
  >
    <Form.Item label="Name" name="name">
      <Input placeholder="Enter your name" />
    </Form.Item>
    <Form.Item label="Email" name="email">
      <Input placeholder="Enter your email" />
    </Form.Item>
  </Form>
);
