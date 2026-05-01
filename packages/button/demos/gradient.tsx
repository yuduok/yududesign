import React from 'react';
import { Button } from '@yududesign/components';
import { Space } from 'antd';

export default () => (
  <Space wrap>
    <Button
      type="primary"
      gradient="linear-gradient(90deg, #1890ff, #722ed1)"
    >
      Purple Blue
    </Button>
    <Button
      gradient="linear-gradient(90deg, #f5222d, #fa8c16)"
    >
      Red Orange
    </Button>
    <Button
      gradient="linear-gradient(90deg, #52c41a, #13c2c2)"
    >
      Green Cyan
    </Button>
    <Button
      gradient="linear-gradient(135deg, #eb2f96, #722ed1)"
      shadow="medium"
    >
      Pink Purple + Shadow
    </Button>
  </Space>
);
