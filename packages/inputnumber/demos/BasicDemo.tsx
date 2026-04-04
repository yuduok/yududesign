import React from 'react';
import { InputNumber } from '@yududesign/components';

export default () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 300 }}>
    <InputNumber placeholder="Basic InputNumber" />
    <InputNumber placeholder="Min 0 Max 100" min={0} max={100} />
    <InputNumber placeholder="Step 10" step={10} />
  </div>
);
