import React from 'react';
import { Rate } from '@yududesign/components';
import { Space } from 'antd';

export default () => (
  <Space direction="vertical">
    <Rate colorTheme="star" />
    <Rate colorTheme="heart" />
    <Rate colorTheme="emoji" />
    <Rate allowHalf />
    <Rate disabled />
    <Rate showText />
  </Space>
);
