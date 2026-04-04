import React from 'react';
import { Card } from '@yududesign/components';
import { Typography } from 'antd';

const { Title, Text } = Typography;

export default () => (
  <Card title="Basic Card" style={{ width: 300 }}>
    <Text>Card content goes here.</Text>
  </Card>
);
