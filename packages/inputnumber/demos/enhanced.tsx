import React from 'react';
import { InputNumber } from '@yududesign/components';
import { Space } from 'antd';

export default () => (
  <Space direction="vertical" size="middle">
    <InputNumber 
      placeholder="千分位分隔符" 
      thousandSeparator
      defaultValue={1234567}
      animated
    />
    <InputNumber 
      placeholder="自定义分隔符" 
      thousandSeparator
      separator="."
      defaultValue={9876543}
      animated
    />
    <InputNumber 
      placeholder="动画效果" 
      animated
      size="large"
      prefix="￥"
    />
  </Space>
);