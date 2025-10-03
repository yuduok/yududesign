import React from 'react';
import { Checkbox } from '@yududesign/components';
import { Space } from 'antd';

export default () => {
  return (
    <Space direction="vertical">
      <Checkbox bordered>带边框的多选框</Checkbox>
      <Checkbox bordered defaultChecked>带边框且选中</Checkbox>
      <Space>
        <Checkbox color="primary">主要</Checkbox>
        <Checkbox color="secondary">次要</Checkbox>
        <Checkbox color="success">成功</Checkbox>
        <Checkbox color="warning">警告</Checkbox>
        <Checkbox color="danger">危险</Checkbox>
      </Space>
    </Space>
  );
};