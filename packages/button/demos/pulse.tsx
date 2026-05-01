import React from 'react';
import { Button } from '@yududesign/components';
import { Space } from 'antd';

export default () => (
  <Space wrap>
    <Button type="primary" pulse>
      Attention Primary
    </Button>
    <Button pulse>
      Attention Default
    </Button>
    <Button type="primary" pulse shadow="medium">
      Pulse + Shadow
    </Button>
  </Space>
);
