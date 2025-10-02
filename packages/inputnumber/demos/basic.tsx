import React from 'react';
import InputNumber from '@yududesign/inputnumber';
import { Space } from 'antd';

export default () => (
  <Space direction="vertical" size="middle">
    <InputNumber placeholder="请输入数字" />
    <InputNumber 
      min={1} 
      max={10} 
      defaultValue={3} 
      placeholder="1-10之间" 
    />
    <InputNumber 
      step={0.1} 
      precision={2} 
      placeholder="小数点数字" 
    />
  </Space>
);