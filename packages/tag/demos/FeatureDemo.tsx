import React from 'react';
import { Tag } from '@yududesign/components';
import { Space } from 'antd';

export default () => (
  <Space direction="vertical">
    <Space wrap>
      <Tag gradient>Gradient Tag</Tag>
      <Tag glow>Glow Tag</Tag>
      <Tag pulse>Pulse Tag</Tag>
    </Space>
    <Space wrap>
      <Tag theme="success">Success</Tag>
      <Tag theme="warning">Warning</Tag>
      <Tag theme="error">Error</Tag>
      <Tag theme="info">Info</Tag>
    </Space>
    <Space wrap>
      <Tag closable>Closable Tag</Tag>
      <Tag closable>Can Be Closed</Tag>
    </Space>
  </Space>
);
