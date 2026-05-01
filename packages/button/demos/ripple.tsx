import React from 'react';
import { Button } from '@yududesign/components';
import { Space } from 'antd';

export default () => (
  <Space wrap>
    <Button type="primary" ripple>
      Ripple Click
    </Button>
    <Button ripple>
      Default Ripple
    </Button>
    <Button type="dashed" ripple>
      Dashed Ripple
    </Button>
    <Button danger ripple>
      Danger Ripple
    </Button>
  </Space>
);
