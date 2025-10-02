import React from 'react';
import Input from '@yududesign/input';
import { Space } from 'antd';

export default () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Input placeholder="Basic input" />
    <Input placeholder="Input with allowClear" allowClear />
    <Input placeholder="Disabled input" disabled />
    <Input placeholder="Password" type="password" />
  </Space>
);