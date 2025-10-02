import React from 'react';
import Tag from '@yududesign/tag';
import { Space } from 'antd';

export default () => (
  <Space direction="vertical" size={16}>
    <div>
      <h4>Gradient Background:</h4>
      <Space size={[0, 8]} wrap>
        <Tag gradient>Gradient Tag</Tag>
        <Tag gradient closable>Closable Gradient</Tag>
      </Space>
    </div>
    
    <div>
      <h4>Glow Effect:</h4>
      <Space size={[0, 8]} wrap>
        <Tag glow>Glow Tag</Tag>
        <Tag glow color="gold">Golden Glow</Tag>
      </Space>
    </div>
    
    <div>
      <h4>Pulse Animation:</h4>
      <Space size={[0, 8]} wrap>
        <Tag pulse>Pulse Tag</Tag>
        <Tag pulse color="red">Red Pulse</Tag>
      </Space>
    </div>
    
    <div>
      <h4>Theme Colors:</h4>
      <Space size={[0, 8]} wrap>
        <Tag theme="success">Success</Tag>
        <Tag theme="warning">Warning</Tag>
        <Tag theme="error">Error</Tag>
        <Tag theme="info">Info</Tag>
      </Space>
    </div>
    
    <div>
      <h4>Combined Effects:</h4>
      <Space size={[0, 8]} wrap>
        <Tag gradient glow>Gradient + Glow</Tag>
        <Tag theme="success" pulse>Success + Pulse</Tag>
        <Tag gradient pulse glow closable>
          All Effects
        </Tag>
      </Space>
    </div>
  </Space>
);