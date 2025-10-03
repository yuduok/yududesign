import React from 'react';
import { DatePicker } from '@yududesign/components';
import { Space } from 'antd';

export default () => (
  <Space direction="vertical" size="middle">
    <DatePicker 
      placeholder="快速选择日期" 
      quickSelect 
      animated 
    />
    <DatePicker 
      placeholder="禁用今天按钮" 
      showToday={false} 
      animated
    />
  </Space>
);