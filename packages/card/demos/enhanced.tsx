import React from 'react';
import { Card } from '@yududesign/components';
import { Avatar, Space } from 'antd';

const { Meta } = Card;

export default () => (
  <Space direction="vertical" size={16} style={{ width: '100%' }}>
    <Card 
      title="Hoverable Card" 
      style={{ width: 300 }}
      hoverable
    >
      <p>Hover me to see the effect!</p>
    </Card>
    
    <Card 
      title="Gradient Border Card" 
      style={{ width: 300 }}
      gradientBorder
    >
      <p>Card with beautiful gradient border</p>
    </Card>
    
    <Card 
      title="Shadow Card" 
      style={{ width: 300 }}
      shadow="large"
    >
      <p>Card with large shadow effect</p>
    </Card>
    
    <Card 
      title="Collapsible Card" 
      style={{ width: 300 }}
      collapsible
    >
      <p>This content can be collapsed!</p>
      <p>Click the arrow to hide/show content.</p>
    </Card>
    
    <Card 
      title="All Enhanced Features" 
      style={{ width: 300 }}
      hoverable
      gradientBorder
      shadow="medium"
      collapsible
    >
      <Meta
        avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?id=3" />}
        title="Enhanced Card"
        description="This card has all enhanced features enabled"
      />
    </Card>
  </Space>
);