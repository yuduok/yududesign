import React from 'react';
import { Checkbox } from '@yududesign/components';
import { Space } from 'antd';

export default () => (
  <Space direction="vertical">
    <Checkbox bordered>Bordered Checkbox</Checkbox>
    <Checkbox color="primary">Primary</Checkbox>
    <Checkbox color="secondary">Secondary</Checkbox>
    <Checkbox color="success">Success</Checkbox>
    <Checkbox color="warning">Warning</Checkbox>
    <Checkbox color="danger">Danger</Checkbox>
  </Space>
);
