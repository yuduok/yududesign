import React from 'react';
import { Card } from '@yududesign/components';
import { Space, Typography } from 'antd';

const { Text } = Typography;

export default () => (
  <Space direction="vertical">
    <Card hoverable title="Hoverable Card" style={{ width: 300 }}>
      <Text>Raise on hover</Text>
    </Card>

    <Card gradientBorder title="Gradient Border" style={{ width: 300 }}>
      <Text>Card with gradient border effect</Text>
    </Card>

    <Card shadow="small" title="Small Shadow" style={{ width: 300 }}>
      <Text>Card with small shadow</Text>
    </Card>

    <Card shadow="medium" title="Medium Shadow" style={{ width: 300 }}>
      <Text>Card with medium shadow</Text>
    </Card>

    <Card shadow="large" title="Large Shadow" style={{ width: 300 }}>
      <Text>Card with large shadow</Text>
    </Card>

    <Card collapsible title="Collapsible Card" style={{ width: 300 }}>
      <Text>This content can be collapsed</Text>
    </Card>
  </Space>
);
