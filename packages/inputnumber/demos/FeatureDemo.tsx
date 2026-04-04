import React from 'react';
import { InputNumber } from '@yududesign/components';
import { Space } from 'antd';

export default () => (
  <Space direction="vertical">
    <InputNumber placeholder="With Thousand Separator" thousandSeparator />
    <InputNumber placeholder="Animated" animated />
    <InputNumber placeholder="Min 0 Max 1000" min={0} max={1000} />
    <InputNumber placeholder="Step 0.5" step={0.5} precision={1} />
    <InputNumber placeholder="Allow Clear" allowClear />
  </Space>
);
