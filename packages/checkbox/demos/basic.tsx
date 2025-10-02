import React from 'react';
import { Checkbox } from '@yududesign/checkbox';
import { Space } from 'antd';

export default () => {
  return (
    <Space direction="vertical">
      <Checkbox>默认多选框</Checkbox>
      <Checkbox defaultChecked>默认选中</Checkbox>
      <Checkbox disabled>禁用状态</Checkbox>
      <Checkbox disabled defaultChecked>禁用且选中</Checkbox>
    </Space>
  );
};