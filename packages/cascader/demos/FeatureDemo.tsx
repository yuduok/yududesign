import React from 'react';
import { Cascader } from '@yududesign/components';
import { Space } from 'antd';

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      { value: 'hangzhou', label: 'Hangzhou' },
      { value: 'ningbo', label: 'Ningbo' },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      { value: 'nanjing', label: 'Nanjing' },
      { value: 'suzhou', label: 'Suzhou' },
    ],
  },
];

export default () => (
  <Space direction="vertical">
    <Cascader placeholder="With Search" options={options} showSearch />
    <Cascader placeholder="Primary Theme" options={options} theme="primary" />
    <Cascader placeholder="Success Theme" options={options} theme="success" />
    <Cascader placeholder="Warning Theme" options={options} theme="warning" />
    <Cascader placeholder="Danger Theme" options={options} theme="danger" />
    <Cascader placeholder="Loading..." options={[]} loading />
  </Space>
);
