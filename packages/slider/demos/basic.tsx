import React from 'react';
import { Slider } from '@yududesign/components';
import { Space } from 'antd';

export default () => (
  <Space direction="vertical" size="large" style={{ width: '100%' }}>
    <Slider defaultValue={30} />
    <Slider range defaultValue={[20, 50]} />
    <Slider defaultValue={30} disabled />
  </Space>
);