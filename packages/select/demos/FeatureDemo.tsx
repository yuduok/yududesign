import React from 'react';
import { Select } from '@yududesign/components';
import { Space } from 'antd';

export default () => (
  <Space direction="vertical">
    <Select showOptionCount placeholder="With Option Count">
      <Select.Option value={1}>Option 1</Select.Option>
      <Select.Option value={2}>Option 2</Select.Option>
      <Select.Option value={3}>Option 3</Select.Option>
    </Select>

    <Select taggedMode placeholder="Tagged Mode">
      <Select.Option value="react">React</Select.Option>
      <Select.Option value="vue">Vue</Select.Option>
      <Select.Option value="angular">Angular</Select.Option>
    </Select>

    <Select showSearch placeholder="Search Mode">
      <Select.Option value={1}>Apple</Select.Option>
      <Select.Option value={2}>Banana</Select.Option>
      <Select.Option value={3}>Cherry</Select.Option>
    </Select>

    <Select borderAnimation placeholder="Border Animation">
      <Select.Option value={1}>Option 1</Select.Option>
      <Select.Option value={2}>Option 2</Select.Option>
    </Select>
  </Space>
);
