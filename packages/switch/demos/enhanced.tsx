import React from 'react';
import { Switch } from '@yududesign/components';
import { Space } from 'antd';

export default () => (
  <Space direction="vertical">
    <div>
      <span style={{ marginRight: 8 }}>Gradient background:</span>
      <Switch defaultChecked gradient />
    </div>
    
    <div>
      <span style={{ marginRight: 8 }}>Pulse animation:</span>
      <Switch defaultChecked pulse />
    </div>
    
    <div>
      <span style={{ marginRight: 8 }}>With status text:</span>
      <Switch 
        defaultChecked 
        statusText={{ checked: 'ON', unchecked: 'OFF' }}
      />
    </div>
    
    <div>
      <span style={{ marginRight: 8 }}>All enhanced features:</span>
      <Switch 
        defaultChecked 
        gradient 
        pulse 
        statusText={{ checked: '开', unchecked: '关' }}
      />
    </div>
  </Space>
);