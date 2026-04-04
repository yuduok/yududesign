import React from 'react';
import { Input } from '@yududesign/components';
import { Space } from 'antd';

export default () => (
  <Space direction="vertical" style={{ width: 300 }}>
    <Input placeholder="With Clear Enhanced" clearEnhanced />
    <Input placeholder="Border Animation" borderAnimation />
    <Input prefix="User:" placeholder="With Prefix" />
    <Input suffix="@email.com" placeholder="With Suffix" />
    <Input prefix="$" suffix=".00" placeholder="Price" />
    <Input.Password placeholder="Password Input" />
    <Input showCount maxLength={50} placeholder="With Character Count" />
  </Space>
);
