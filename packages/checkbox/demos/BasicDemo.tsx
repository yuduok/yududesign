import React from 'react';
import { Checkbox } from '@yududesign/components';
import { Space } from 'antd';

export default () => (
  <Space direction="vertical">
    <Checkbox>Basic Checkbox</Checkbox>
    <Checkbox checked>Checked</Checkbox>
    <Checkbox disabled>Disabled</Checkbox>
    <Checkbox disabled checked>Disabled Checked</Checkbox>
  </Space>
);
