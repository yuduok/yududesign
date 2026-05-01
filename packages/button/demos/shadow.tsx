import React from 'react';
import { Button } from '@yududesign/components';
import { Space } from 'antd';

export default () => (
  <Space wrap>
    <Button type="primary" shadow="small">
      Small Shadow
    </Button>
    <Button shadow="medium">
      Medium Shadow
    </Button>
    <Button type="dashed" shadow="large">
      Large Shadow
    </Button>
    <Button type="primary" shadow="large">
      Primary Large
    </Button>
  </Space>
);
