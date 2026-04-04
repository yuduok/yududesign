import React from 'react';
import { Cascader } from '@yududesign/components';

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
  <div>
    <Cascader placeholder="Basic Cascader" options={options} />
  </div>
);
