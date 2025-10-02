---
title: Checkbox
nav:
  title: Components
  path: /components
group:
  title: Data Entry
  order: 2
---

# Checkbox

Checkbox component. Enhanced based on Ant Design Checkbox component.

## When To Use

- Used for selecting multiple values from several options.
- If you use only one checkbox, it is the same as using Switch to toggle between two states. The difference is that Switch will trigger the state change directly, but Checkbox just marks the state as changed and this needs to be submitted.

## Examples

### Basic Usage

<code src="./demos/basic.tsx">Basic checkbox</code>

### Enhanced Features

<code src="./demos/enhanced.tsx">Bordered and color themes</code>

## API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| bordered | Whether to show border | boolean | false |
| color | Custom color theme | 'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger' | 'primary' |

For more APIs, please refer to [Ant Design Checkbox](https://ant.design/components/checkbox#api).