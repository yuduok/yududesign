import React from 'react';
import { Select } from '@yududesign/components';

export default () => (
  <div style={{ width: 200 }}>
    <Select placeholder="Select Option">
      <Select.Option value={1}>Option 1</Select.Option>
      <Select.Option value={2}>Option 2</Select.Option>
      <Select.Option value={3}>Option 3</Select.Option>
    </Select>
  </div>
);
