import React from 'react';
import { Slider } from '@yududesign/components';
import { Space } from 'antd';

const marks = {
  0: '0',
  25: '25',
  50: '50',
  75: '75',
  100: '100',
};

export default () => (
  <Space direction="vertical" style={{ width: 300 }}>
    <Slider gradient />
    <Slider colorTheme="success" />
    <Slider colorTheme="warning" />
    <Slider colorTheme="danger" />
    <Slider range defaultValue={[20, 80]} />
    <Slider marks={marks} />
    <Slider showValue />
  </Space>
);
