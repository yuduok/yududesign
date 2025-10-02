---
title: Switch
nav:
  title: Components
  path: /components
group:
  title: Data Entry
  order: 2
---

# Switch

Switching Selector. Enhanced based on Ant Design Switch component.

## When To Use

- If you need to represent the switching between two states or on-off state.
- The difference between Switch and Checkbox is that Switch will trigger a state change directly when you toggle it, while Checkbox is generally used for state marking, which should work in conjunction with submit operation.

## Examples

### Basic usage

<code src="./demos/basic.tsx">Basic Switch</code>

### Enhanced features

<code src="./demos/enhanced.tsx">Enhanced Switch</code>

## API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| gradient | Whether to show gradient background | boolean | false |
| pulse | Whether to show pulse animation | boolean | false |
| statusText | Switch status text | { checked: string; unchecked: string } | - |

For more API, please refer to [Ant Design Switch](https://ant.design/components/switch#api).