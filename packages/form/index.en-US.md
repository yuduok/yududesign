---
title: Form
nav:
  title: Components
  path: /components
group:
  title: Data Entry
  order: 2
---

# Form

High performance subscription-based form component. Enhanced based on Ant Design Form component.

## When To Use

- When you need to create an instance or collect information.
- When you need to validate fields in certain rules.

## Examples

### Basic usage

<code src="./demos/basic.tsx">Basic Form</code>

### Enhanced Features

<code src="./demos/enhanced.tsx">Auto Save & Validation Animation</code>

## API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| autoSave | Enable auto save | boolean | false |
| autoSaveInterval | Auto save interval (ms) | number | 3000 |
| showSubmitButton | Show submit button | boolean | true |
| submitText | Submit button text | string | Submit |
| validationAnimation | Enable validation animation | boolean | true |
| onAutoSave | Auto save callback | (values: any) => void | - |

More APIs refer to [Ant Design Form](https://ant.design/components/form#api).