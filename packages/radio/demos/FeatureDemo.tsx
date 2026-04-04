import React from 'react';
import { Radio } from '@yududesign/components';
import { Space } from 'antd';

export default () => (
  <Space direction="vertical">
    <Radio.Group>
      <Radio.Button value={1}>Animated</Radio.Button>
      <Radio.Button value={2}>Option B</Radio.Button>
      <Radio.Button value={3}>Option C</Radio.Button>
    </Radio.Group>

    <Radio.Group colorTheme="success">
      <Radio value={1}>Success Theme</Radio>
      <Radio value={2}>Option B</Radio>
    </Radio.Group>

    <Radio.Group colorTheme="warning">
      <Radio value={1}>Warning Theme</Radio>
      <Radio value={2}>Option B</Radio>
    </Radio.Group>

    <Radio.Group colorTheme="danger">
      <Radio value={1}>Danger Theme</Radio>
      <Radio value={2}>Option B</Radio>
    </Radio.Group>

    <Radio.Group cardStyle>
      <Radio value={1}>Card Style Option A</Radio>
      <Radio value={2}>Card Style Option B</Radio>
      <Radio value={3}>Card Style Option C</Radio>
    </Radio.Group>
  </Space>
);
