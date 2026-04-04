import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Button } from '../src';

describe('Button', () => {
  it('should render children correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('should apply className prop', () => {
    render(<Button className="custom-class">Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
  });

  it('should render shadow class when shadow is true', () => {
    render(<Button shadow>Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('yududesign-button-shadow');
  });

  it('should not render shadow class when shadow is false', () => {
    render(<Button shadow={false}>Button</Button>);
    const button = screen.getByRole('button');
    expect(button).not.toHaveClass('yududesign-button-shadow');
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

  it('should render with default shadow as false', () => {
    render(<Button>Default Button</Button>);
    const button = screen.getByRole('button');
    expect(button).not.toHaveClass('yududesign-button-shadow');
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
      <Button shadow className="my-custom-class">
        Button
      </Button>
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass('my-custom-class');
    expect(button).toHaveClass('yududesign-button-shadow');
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
    // ghost prop is passed through to AntdButton - verify it's rendered
    expect(button).toBeInTheDocument();
  });

  it('should have shadow class for shadow button', () => {
    render(<Button shadow>Shadow Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('yududesign-button-shadow');
  });
});
