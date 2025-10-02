import React from 'react';
import Radio from '@yududesign/radio';
import { Space } from 'antd';

export default () => (
  <Space direction="vertical" size="large">
    <div>
      <h4>颜色主题</h4>
      <Space>
        <Radio colorTheme="success" defaultChecked>成功</Radio>
        <Radio colorTheme="warning" defaultChecked>警告</Radio>
        <Radio colorTheme="danger" defaultChecked>危险</Radio>
      </Space>
    </div>
    
    <div>
      <h4>卡片样式</h4>
      <Radio.Group defaultValue="card1" cardStyle animated>
        <Radio value="card1">卡片选项 1</Radio>
        <Radio value="card2">卡片选项 2</Radio>
        <Radio value="card3">卡片选项 3</Radio>
      </Radio.Group>
    </div>

    <div>
      <h4>动画效果</h4>
      <Radio.Group defaultValue="anim1" animated>
        <Radio value="anim1">动画选项 1</Radio>
        <Radio value="anim2">动画选项 2</Radio>
        <Radio value="anim3">动画选项 3</Radio>
      </Radio.Group>
    </div>
  </Space>
);