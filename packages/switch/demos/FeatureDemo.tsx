import React from 'react';
import { Switch } from '@yududesign/components';
import { Space } from 'antd';

export default () => (
  <Space direction="vertical">
    <Switch gradient />
    <Switch pulse />
    <Switch
      statusText={{ checked: 'ON', unchecked: 'OFF' }}
    />
    <Switch size="small" />
    <Switch size="default" />
    <Switch size="large" />
  </Space>
);
