import React from 'react';
import Tag from '@yududesign/tag';
import { Space } from 'antd';

export default () => (
  <Space size={[0, 8]} wrap>
    <Tag>Tag 1</Tag>
    <Tag>
      <a href="https://github.com/ant-design/ant-design/issues/1862">
        Link
      </a>
    </Tag>
    <Tag closable onClose={(e) => console.log(e)}>
      Tag 2
    </Tag>
    <Tag closable onClose={(e) => e.preventDefault()}>
      Prevent Default
    </Tag>
    
    <div style={{ width: '100%', margin: '16px 0' }}>
      <h4>Presets:</h4>
      <Space size={[0, 8]} wrap>
        <Tag color="magenta">magenta</Tag>
        <Tag color="red">red</Tag>
        <Tag color="volcano">volcano</Tag>
        <Tag color="orange">orange</Tag>
        <Tag color="gold">gold</Tag>
        <Tag color="lime">lime</Tag>
        <Tag color="green">green</Tag>
        <Tag color="cyan">cyan</Tag>
        <Tag color="blue">blue</Tag>
        <Tag color="geekblue">geekblue</Tag>
        <Tag color="purple">purple</Tag>
      </Space>
    </div>
  </Space>
);