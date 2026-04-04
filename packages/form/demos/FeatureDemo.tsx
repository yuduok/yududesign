import React from 'react';
import { Form } from '@yududesign/components';
import { Input } from '@yududesign/components';
import { Space, Button } from 'antd';

export default () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Form
      layout="vertical"
      autoSave
      onAutoSave={(values) => console.log('Auto saved:', values)}
    >
      <Form.Item label="AutoSave Form" name="auto">
        <Input placeholder="Changes will auto save..." />
      </Form.Item>
    </Form>

    <Form
      layout="horizontal"
      validationAnimation={false}
      onFinish={(values) => console.log(values)}
    >
      <Form.Item label="Horizontal Layout" name="horizontal">
        <Input placeholder="Horizontal form" />
      </Form.Item>
      <Button type="primary" htmlType="submit">Submit</Button>
    </Form>

    <Form
      layout="inline"
      showSubmitButton={false}
    >
      <Form.Item label="Inline Layout" name="inline">
        <Input placeholder="Inline form" />
      </Form.Item>
    </Form>
  </Space>
);
