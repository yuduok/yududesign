import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Input } from '../src';

describe('Input', () => {
  it('should render input with placeholder', () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    render(<Input className="custom-input-class" placeholder="Enter text" />);
    const input = document.querySelector('.custom-input-class');
    expect(input).toBeInTheDocument();
  });

  it('should apply clear enhanced class when clearEnhanced prop is true', () => {
    render(<Input clearEnhanced placeholder="Enter text" />);
    expect(document.querySelector('.yududesign-input-clear-enhanced')).toBeInTheDocument();
  });

  it('should not apply clear enhanced class when clearEnhanced prop is false', () => {
    render(<Input clearEnhanced={false} placeholder="Enter text" />);
    expect(document.querySelector('.yududesign-input-clear-enhanced')).not.toBeInTheDocument();
  });

  it('should apply border animation class when borderAnimation prop is true', () => {
    render(<Input borderAnimation placeholder="Enter text" />);
    expect(document.querySelector('.yududesign-input-border-animation')).toBeInTheDocument();
  });

  it('should not apply border animation class when borderAnimation prop is false', () => {
    render(<Input borderAnimation={false} placeholder="Enter text" />);
    expect(document.querySelector('.yududesign-input-border-animation')).not.toBeInTheDocument();
  });

  it('should display character count when showCount is true', () => {
    render(<Input showCount maxLength={50} placeholder="Enter text" />);
    const input = screen.getByPlaceholderText('Enter text');
    expect(input).toBeInTheDocument();
  });

  it('should call onChange when text is entered', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    render(<Input onChange={handleChange} placeholder="Enter text" />);
    const input = screen.getByPlaceholderText('Enter text');
    await user.type(input, 'Hello');
    expect(handleChange).toHaveBeenCalled();
  });

  it('should be disabled when disabled prop is true', () => {
    render(<Input disabled placeholder="Disabled input" />);
    const input = screen.getByPlaceholderText('Disabled input');
    expect(input).toBeDisabled();
  });

  it('should render with prefix element', () => {
    render(
      <Input prefix={<span data-testid="prefix-icon">@</span>} placeholder="Username" />
    );
    expect(screen.getByTestId('prefix-icon')).toBeInTheDocument();
  });

  it('should render with suffix element', () => {
    render(
      <Input suffix={<span data-testid="suffix-icon">x</span>} placeholder="Text" />
    );
    expect(screen.getByTestId('suffix-icon')).toBeInTheDocument();
  });

  it('should render with size prop', () => {
    render(<Input size="large" placeholder="Large input" />);
    expect(screen.getByPlaceholderText('Large input')).toBeInTheDocument();
  });

  it('should apply both clearEnhanced and borderAnimation classes', () => {
    render(
      <Input clearEnhanced borderAnimation placeholder="Enter text" />
    );
    const input = document.querySelector('.ant-input');
    expect(input).toHaveClass('yududesign-input-clear-enhanced');
    expect(input).toHaveClass('yududesign-input-border-animation');
  });

  it('should handle password input type', () => {
    render(<Input type="password" placeholder="Password" />);
    const input = screen.getByPlaceholderText('Password');
    expect(input).toHaveAttribute('type', 'password');
  });

  it('should handle multiline textarea via Input component', () => {
    render(<Input placeholder="Enter description" rows={3} />);
    expect(screen.getByPlaceholderText('Enter description')).toBeInTheDocument();
  });
});
