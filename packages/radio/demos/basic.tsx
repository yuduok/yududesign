import React from 'react';
import { Radio } from '@yududesign/components';
import { Space } from 'antd';

export default () => (
  <Space direction="vertical" size="middle">
    <Radio>单选按钮</Radio>
    <Radio.Group defaultValue="a">
      <Radio value="a">选项A</Radio>
      <Radio value="b">选项B</Radio>
      <Radio value="c">选项C</Radio>
      <Radio value="d">选项D</Radio>
    </Radio.Group>
    <Radio.Group defaultValue="1" buttonStyle="solid">
      <Radio.Button value="1">按钮A</Radio.Button>
      <Radio.Button value="2">按钮B</Radio.Button>
      <Radio.Button value="3">按钮C</Radio.Button>
    </Radio.Group>
  </Space>
);