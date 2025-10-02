import React from 'react';
import Select from '@yududesign/select';
import { Space } from 'antd';

const { Option } = Select;

export default () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Select 
      placeholder="With option count" 
      style={{ width: 200 }}
      showOptionCount
    >
      <Option value="apple">Apple</Option>
      <Option value="banana">Banana</Option>
      <Option value="orange">Orange</Option>
      <Option value="grape">Grape</Option>
    </Select>
    
    <Select 
      mode="multiple" 
      placeholder="Tagged mode" 
      style={{ width: 300 }}
      taggedMode
    >
      <Option value="react">React</Option>
      <Option value="vue">Vue</Option>
      <Option value="angular">Angular</Option>
      <Option value="svelte">Svelte</Option>
    </Select>
    
    <Select 
      placeholder="Border animation" 
      style={{ width: 200 }}
      borderAnimation
    >
      <Option value="option1">Option 1</Option>
      <Option value="option2">Option 2</Option>
      <Option value="option3">Option 3</Option>
    </Select>
    
    <Select 
      mode="multiple"
      placeholder="All enhanced features" 
      style={{ width: 300 }}
      showOptionCount
      taggedMode
      borderAnimation
    >
      <Option value="feature1">Enhanced Feature 1</Option>
      <Option value="feature2">Enhanced Feature 2</Option>
      <Option value="feature3">Enhanced Feature 3</Option>
      <Option value="feature4">Enhanced Feature 4</Option>
    </Select>
  </Space>
);