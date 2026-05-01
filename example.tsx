import React from 'react';
import { Button, Input, Card } from '@yududesign/components';

export default function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>YuduDesign 统一导入测试</h1>

      <Card title="测试组件" style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
          <Button type="primary" shadow="medium">
            增强按钮
          </Button>

          <Button
            gradient="linear-gradient(90deg, #1890ff, #722ed1)"
            shadow="medium"
          >
            渐变按钮
          </Button>

          <Button type="primary" ripple>
            涟漪按钮
          </Button>

          <Button type="primary" pulse>
            脉冲按钮
          </Button>

          <Input
            placeholder="增强输入框"
            clearEnhanced
            borderAnimation
          />
        </div>
      </Card>
    </div>
  );
}
