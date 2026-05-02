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

### Shadow Effect

<code src="./demos/shadow.tsx">Shadow buttons</code>

### Gradient Background

<code src="./demos/gradient.tsx">Gradient buttons</code>

### Ripple Effect

<code src="./demos/ripple.tsx">Ripple click</code>

### Pulse Animation

<code src="./demos/pulse.tsx">Pulse animation</code>

## API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| shadow | Shadow size | `'none' \| 'small' \| 'medium' \| 'large'` | `'none'` |
| gradient | Gradient background (CSS `background-image` value) | `string` | - |
| ripple | Enable click ripple effect | `boolean` | `false` |
| pulse | Enable pulse animation (for drawing attention) | `boolean` | `false` |

For more APIs, please refer to [Ant Design Button](https://ant.design/components/button#api).
