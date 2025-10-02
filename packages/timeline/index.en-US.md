---
title: Timeline
nav:
  title: Components
  path: /components
group:
  title: Data Display
  order: 3
---

# Timeline

Vertical display timeline. Enhanced based on Ant Design Timeline component.

## When To Use

- When a series of information needs to be ordered by time (ascending or descending).
- When you need a timeline to make a visual connection.

## Examples

### Basic usage

<code src="./demos/basic.tsx">Basic Timeline</code>

### Enhanced Features

<code src="./demos/enhanced.tsx">Status Icons & Time Display</code>

## API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| animated | Enable animation effect | boolean | true |
| theme | Timeline theme | 'default' \| 'success' \| 'process' \| 'error' | 'default' |
| showTime | Show time | boolean | false |

### Timeline.Item

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| status | Status type | 'success' \| 'process' \| 'error' \| 'default' | 'default' |
| time | Time information | string | - |

More APIs refer to [Ant Design Timeline](https://ant.design/components/timeline#api).