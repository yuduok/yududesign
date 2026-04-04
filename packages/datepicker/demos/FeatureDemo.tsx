import React from 'react';
import { DatePicker } from '@yududesign/components';
import { Space } from 'antd';

export default () => (
  <Space direction="vertical">
    <DatePicker placeholder="With Quick Select" quickSelect />
    <DatePicker placeholder="Animated" animated />
    <DatePicker.RangePicker placeholder={['Start Date', 'End Date']} />
    <DatePicker.RangePicker placeholder={['Start', 'End']} quickSelect />
  </Space>
);
