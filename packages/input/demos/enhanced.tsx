import React from 'react';
import { Input } from '@yududesign/components';
import { Space } from 'antd';

export default () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Input 
      placeholder="Enhanced clear button" 
      allowClear 
      clearEnhanced 
    />
    <Input 
      placeholder="Border animation effect" 
      borderAnimation 
    />
    <Input 
      placeholder="With character count" 
      showCount 
      maxLength={20} 
    />
    <Input 
      placeholder="All enhanced features" 
      allowClear 
      clearEnhanced 
      borderAnimation 
      showCount 
      maxLength={50} 
    />
  </Space>
);