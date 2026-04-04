import React from 'react';
import { Timeline } from '@yududesign/components';
import { Space } from 'antd';

export default () => (
  <Space direction="vertical">
    <Timeline>
      <Timeline.Item status="success">Task Completed</Timeline.Item>
      <Timeline.Item status="process">Task In Progress</Timeline.Item>
      <Timeline.Item status="error">Task Failed</Timeline.Item>
      <Timeline.Item>Pending Task</Timeline.Item>
    </Timeline>

    <Timeline theme="success">
      <Timeline.Item>Success Theme Item 1</Timeline.Item>
      <Timeline.Item>Success Theme Item 2</Timeline.Item>
    </Timeline>

    <Timeline theme="process">
      <Timeline.Item>Process Theme Item 1</Timeline.Item>
      <Timeline.Item>Process Theme Item 2</Timeline.Item>
    </Timeline>

    <Timeline showTime>
      <Timeline.Item time="2024-01-01">Item with time</Timeline.Item>
      <Timeline.Item time="2024-01-02">Another item with time</Timeline.Item>
    </Timeline>
  </Space>
);
