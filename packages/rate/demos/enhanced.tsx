import React from 'react';
import { Rate } from '@yududesign/components';
import { Space } from 'antd';

export default () => (
  <Space direction="vertical" size="large">
    <div>
      <h4>心形评分</h4>
      <Rate colorTheme="heart" defaultValue={3} animated />
    </div>
    
    <div>
      <h4>表情评分</h4>
      <Rate colorTheme="emoji" defaultValue={4} animated />
    </div>
    
    <div>
      <h4>显示文字</h4>
      <Rate 
        showText 
        defaultValue={3} 
        animated 
        textMap={['非常差', '差', '一般', '好', '非常好']}
      />
    </div>
  </Space>
);