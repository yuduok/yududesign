import React from 'react';
import DatePicker from '@yududesign/datepicker';
import { Space } from 'antd';

export default () => (
  <Space direction="vertical" size="middle">
    <DatePicker placeholder="选择日期" />
    <DatePicker.RangePicker placeholder={['开始日期', '结束日期']} />
  </Space>
);