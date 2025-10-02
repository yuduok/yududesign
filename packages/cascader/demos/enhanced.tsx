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
          {
            value: 'binjiang',
            label: '滨江',
          },
        ],
      },
      {
        value: 'wenzhou',
        label: '温州',
        children: [
          {
            value: 'lucheng',
            label: '鹿城',
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
      <Space>
        <Cascader 
          options={options} 
          onChange={onChange} 
          placeholder="支持搜索" 
          showSearch 
        />
        <Cascader 
          options={options} 
          onChange={onChange} 
          placeholder="主题色" 
          theme="primary" 
        />
      </Space>
      <Space>
        <Cascader 
          options={options} 
          onChange={onChange} 
          placeholder="成功主题" 
          theme="success" 
        />
        <Cascader 
          options={options} 
          onChange={onChange} 
          placeholder="警告主题" 
          theme="warning" 
        />
        <Cascader 
          options={options} 
          onChange={onChange} 
          placeholder="危险主题" 
          theme="danger" 
        />
      </Space>
    </Space>
  );
};