import React from 'react';
import { Switch } from '@yududesign/components';
import { Space } from 'antd';

export default () => (
  <Space direction="vertical">
    <Switch defaultChecked />
    <Switch size="small" />
    <Switch loading defaultChecked />
    <Switch disabled />
    <Switch disabled defaultChecked />
  </Space>
);