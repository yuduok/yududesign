import React from 'react';
import { Timeline } from '@yududesign/components';

export default () => (
  <Timeline animated>
    <Timeline.Item 
      status="success" 
      time="2023-10-01 10:00"
    >
      项目启动，团队组建完成
    </Timeline.Item>
    <Timeline.Item 
      status="success" 
      time="2023-10-15 14:30"
    >
      需求分析完成，技术方案确定
    </Timeline.Item>
    <Timeline.Item 
      status="process" 
      time="2023-11-01 09:00"
    >
      开发阶段进行中，前端界面开发
    </Timeline.Item>
    <Timeline.Item 
      status="process" 
      time="2023-11-15 16:00"
    >
      后端接口开发，数据库设计优化
    </Timeline.Item>
    <Timeline.Item 
      color="gray"
      time="2023-12-01"
    >
      测试阶段（计划中）
    </Timeline.Item>
  </Timeline>
);