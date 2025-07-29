import React from 'react';
import { Button } from '@yududesign/button';
import { Space } from 'antd';

export default () => (
  <Space wrap>
    <Button type="primary" shadow>
      Primary with Shadow
    </Button>
    <Button shadow>
      Default with Shadow
    </Button>
    <Button type="dashed" shadow>
      Dashed with Shadow
    </Button>
  </Space>
);