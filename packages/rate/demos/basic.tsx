import React from 'react';
import { Rate } from '@yududesign/components';
import { Space } from 'antd';

export default () => (
  <Space direction="vertical" size="middle">
    <Rate defaultValue={3} />
    <Rate allowHalf defaultValue={2.5} />
    <Rate disabled defaultValue={3} />
  </Space>
);