import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { Button } from '../src';

describe('Button', () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it('should render children correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('should apply className prop', () => {
    render(<Button className="custom-class">Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
  });

  it('should render small shadow class when shadow is small', () => {
    render(<Button shadow="small">Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('yududesign-button-shadow-small');
  });

  it('should render medium shadow class when shadow is medium', () => {
    render(<Button shadow="medium">Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('yududesign-button-shadow-medium');
  });

  it('should render large shadow class when shadow is large', () => {
    render(<Button shadow="large">Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('yududesign-button-shadow-large');
  });

  it('should not render any shadow class when shadow is none', () => {
    render(<Button shadow="none">Button</Button>);
    const button = screen.getByRole('button');
    expect(button).not.toHaveClass('yududesign-button-shadow-small');
    expect(button).not.toHaveClass('yududesign-button-shadow-medium');
    expect(button).not.toHaveClass('yududesign-button-shadow-large');
  });

  it('should default shadow to none', () => {
    render(<Button>Default Button</Button>);
    const button = screen.getByRole('button');
    expect(button).not.toHaveClass('yududesign-button-shadow-small');
    expect(button).not.toHaveClass('yududesign-button-shadow-medium');
    expect(button).not.toHaveClass('yududesign-button-shadow-large');
  });

  it('should call onClick handler when clicked', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(<Button onClick={handleClick}>Click me</Button>);
    await user.click(screen.getByRole('button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when disabled prop is true', () => {
    render(<Button disabled>Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('should render loading state', () => {
    render(<Button loading>Loading</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('class', expect.stringContaining('ant-btn-loading'));
  });

  it('should pass through antd button props', () => {
    render(
      <Button type="primary" danger>
        Primary Danger
      </Button>
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass('ant-btn-primary');
    expect(button).toHaveClass('ant-btn-dangerous');
  });

  it('should handle multiple clicks', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(<Button onClick={handleClick}>Click me</Button>);
    const button = screen.getByRole('button');

    await user.click(button);
    await user.click(button);
    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(3);
  });

  it('should apply custom className along with shadow class', () => {
    render(
      <Button shadow="large" className="my-custom-class">
        Button
      </Button>
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass('my-custom-class');
    expect(button).toHaveClass('yududesign-button-shadow-large');
  });

  it('should render icon when icon prop is provided', () => {
    const TestIcon = () => <span data-testid="test-icon">★</span>;
    render(
      <Button icon={<TestIcon />}>
        Button with Icon
      </Button>
    );
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  it('should render as link when href is provided', () => {
    render(
      <Button href="https://example.com">
        Link Button
      </Button>
    );
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://example.com');
  });

  it('should render block button when block prop is true', () => {
    render(<Button block>Block Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('ant-btn-block');
  });

  it('should render ghost button when ghost prop is true', () => {
    render(<Button ghost>Ghost Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  /* ── New feature tests ── */

  it('should forward ref to underlying element', () => {
    const ref = { current: null as HTMLButtonElement | null };
    render(<Button ref={ref}>Ref Button</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    expect(ref.current?.tagName).toBe('BUTTON');
  });

  it('should forward ref to anchor when href is provided', () => {
    const ref = { current: null as HTMLAnchorElement | null };
    render(<Button ref={ref} href="https://example.com">Link</Button>);
    expect(ref.current).toBeInstanceOf(HTMLAnchorElement);
  });

  it('should apply gradient class and inline styles when gradient prop is provided', () => {
    render(<Button gradient="linear-gradient(90deg, #1890ff, #722ed1)">Gradient</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('yududesign-button-gradient');
    expect(button).toHaveStyle('background-image: linear-gradient(90deg, #1890ff, #722ed1)');
  });

  it('should apply ripple class when ripple is true', () => {
    render(<Button ripple>Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('yududesign-button-ripple-enabled');
  });

  it('should create ripple element on click when ripple is true', () => {
    render(<Button ripple>Ripple</Button>);
    const button = screen.getByRole('button');

    fireEvent.click(button);
    const ripple = button.querySelector('.yududesign-button-ripple');
    expect(ripple).toBeInTheDocument();
  });

  it('should remove ripple element after animation', () => {
    render(<Button ripple>Ripple</Button>);
    const button = screen.getByRole('button');

    fireEvent.click(button);
    expect(button.querySelector('.yududesign-button-ripple')).toBeInTheDocument();

    vi.advanceTimersByTime(700);
    expect(button.querySelector('.yududesign-button-ripple')).not.toBeInTheDocument();
  });

  it('should apply pulse class when pulse is true', () => {
    render(<Button pulse>Pulse</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('yududesign-button-pulse');
  });

  it('should still call onClick when ripple is enabled', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(<Button ripple onClick={handleClick}>Click</Button>);
    await user.click(screen.getByRole('button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should not create ripple element on click when ripple is false', () => {
    render(<Button>Button</Button>);
    const button = screen.getByRole('button');

    fireEvent.click(button);
    const ripple = button.querySelector('.yududesign-button-ripple');
    expect(ripple).not.toBeInTheDocument();
  });
});
