import React from 'react';
import { Slider } from '@yududesign/components';
import { Space } from 'antd';

export default () => (
  <Space direction="vertical" size="large" style={{ width: '100%' }}>
    <div>
      <h4>渐变滑块</h4>
      <Slider defaultValue={40} gradient animated showValue />
    </div>
    
    <div>
      <h4>成功主题</h4>
      <Slider defaultValue={60} colorTheme="success" gradient animated />
    </div>
    
    <div>
      <h4>警告主题</h4>
      <Slider defaultValue={80} colorTheme="warning" gradient animated />
    </div>
    
    <div>
      <h4>危险主题</h4>
      <Slider defaultValue={30} colorTheme="danger" gradient animated showValue />
    </div>
  </Space>
);