import React from 'react';
import { Card } from '@yududesign/components';
import { Avatar, Space } from 'antd';

const { Meta } = Card;

export default () => (
  <Space direction="vertical" size={16} style={{ width: '100%' }}>
    <Card 
      title="Default Card" 
      style={{ width: 300 }}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    
    <Card style={{ width: 300 }}>
      <Meta
        avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?id=1" />}
        title="Card title"
        description="This is the description"
      />
    </Card>
    
    <Card
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <span key="setting">Setting</span>,
        <span key="edit">Edit</span>,
        <span key="ellipsis">More</span>,
      ]}
    >
      <Meta
        avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?id=2" />}
        title="Card title"
        description="This is the description"
      />
    </Card>
  </Space>
);