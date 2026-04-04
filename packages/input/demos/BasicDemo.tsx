import React from 'react';
import { Input } from '@yududesign/components';

export default () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 300 }}>
    <Input placeholder="Basic Input" />
    <Input placeholder="With Clear" allowClear />
    <Input placeholder="Disabled" disabled />
  </div>
);
