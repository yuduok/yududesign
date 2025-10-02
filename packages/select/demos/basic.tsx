import React from 'react';
import Select from '@yududesign/select';
import { Space } from 'antd';

const { Option } = Select;

export default () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Select placeholder="Please select" style={{ width: 200 }}>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="tom">Tom</Option>
    </Select>
    
    <Select 
      mode="multiple" 
      placeholder="Multiple selection" 
      style={{ width: 300 }}
    >
      <Option value="red">Red</Option>
      <Option value="green">Green</Option>
      <Option value="blue">Blue</Option>
      <Option value="yellow">Yellow</Option>
    </Select>
    
    <Select 
      placeholder="Disabled" 
      style={{ width: 200 }} 
      disabled
    >
      <Option value="disabled">Disabled Option</Option>
    </Select>
  </Space>
);