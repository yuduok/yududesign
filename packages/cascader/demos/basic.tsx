import React from 'react';
import { Cascader } from '@yududesign/cascader';
import { Space } from 'antd';

const options = [
  {
    value: 'zhejiang',
    label: '浙江',
    children: [
      {
        value: 'hangzhou',
        label: '杭州',
        children: [
          {
            value: 'xihu',
            label: '西湖',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: '江苏',
    children: [
      {
        value: 'nanjing',
        label: '南京',
        children: [
          {
            value: 'zhonghuamen',
            label: '中华门',
          },
        ],
      },
    ],
  },
];

export default () => {
  const onChange = (value: string[]) => {
    console.log(value);
  };

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Cascader options={options} onChange={onChange} placeholder="请选择" />
      <Cascader 
        options={options} 
        onChange={onChange} 
        placeholder="默认值" 
        defaultValue={['zhejiang', 'hangzhou', 'xihu']} 
      />
      <Cascader 
        options={options} 
        onChange={onChange} 
        placeholder="禁用状态" 
        disabled 
      />
    </Space>
  );
};