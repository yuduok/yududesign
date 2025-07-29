---
title: Button
nav:
  title: Components
  path: /components
group:
  title: General
  order: 1
---

# Button

Button is used to trigger an instant action. Enhanced based on Ant Design Button component.

## When To Use

A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.

In Ant Design we provide 5 types of button.

- Primary button: indicate the main action, one primary button at most in one section.
- Default button: indicate a series of actions without priority.
- Dashed button: used for adding action commonly.
- Text button: used for the most secondary action.
- Link button: used for external links.

And 4 other properties additionally.

- `danger`: used for actions of risk, like deletion or authorization.
- `ghost`: used in situations with complex background, home pages usually.
- `disabled`: when actions are not available.
- `loading`: add loading spinner in button, avoiding multiple submits too.

## Examples

### Basic Usage

<code src="./demos/basic.tsx">Basic buttons</code>

### With Shadow Effect

<code src="./demos/shadow.tsx">Shadow buttons</code>

## API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| shadow | Whether to show shadow effect | boolean | false |

For more APIs, please refer to [Ant Design Button](https://ant.design/components/button#api).