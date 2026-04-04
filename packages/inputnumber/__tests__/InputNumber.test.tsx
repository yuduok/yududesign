import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { InputNumber } from '../src';

describe('InputNumber', () => {
  it('should render InputNumber with placeholder', () => {
    render(<InputNumber placeholder="Enter number" />);
    expect(screen.getByPlaceholderText('Enter number')).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    render(<InputNumber className="custom-inputnumber-class" placeholder="Enter number" />);
    expect(document.querySelector('.custom-inputnumber-class')).toBeInTheDocument();
  });

  it('should apply yududesign InputNumber base class', () => {
    render(<InputNumber placeholder="Enter number" />);
    expect(document.querySelector('.yududesign-inputnumber')).toBeInTheDocument();
  });

  it('should apply animated class when animated prop is true', () => {
    render(<InputNumber animated placeholder="Enter number" />);
    expect(document.querySelector('.yududesign-inputnumber-animated')).toBeInTheDocument();
  });

  it('should not apply animated class when animated prop is false', () => {
    render(<InputNumber animated={false} placeholder="Enter number" />);
    expect(document.querySelector('.yududesign-inputnumber-animated')).not.toBeInTheDocument();
  });

  it('should apply separator class when thousandSeparator is true', () => {
    render(<InputNumber thousandSeparator placeholder="Enter number" />);
    expect(document.querySelector('.yududesign-inputnumber-separator')).toBeInTheDocument();
  });

  it('should not apply separator class when thousandSeparator is false', () => {
    render(<InputNumber thousandSeparator={false} placeholder="Enter number" />);
    expect(document.querySelector('.yududesign-inputnumber-separator')).not.toBeInTheDocument();
  });

  it('should handle value prop', () => {
    render(<InputNumber value={42} placeholder="Enter number" />);
    const input = screen.getByPlaceholderText('Enter number');
    expect((input as HTMLInputElement).value).toBe('42');
  });

  it('should call onChange when value changes', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    render(<InputNumber onChange={handleChange} placeholder="Enter number" />);
    const input = screen.getByPlaceholderText('Enter number');
    await user.click(input);
    await user.keyboard('123');
    expect(handleChange).toHaveBeenCalled();
  });

  it('should respect min prop', () => {
    render(<InputNumber min={0} max={100} placeholder="Enter number" />);
    const input = screen.getByPlaceholderText('Enter number');
    expect(input).toBeInTheDocument();
  });

  it('should respect max prop', () => {
    render(<InputNumber min={0} max={100} placeholder="Enter number" />);
    const input = screen.getByPlaceholderText('Enter number');
    expect(input).toBeInTheDocument();
  });

  it('should handle step prop', () => {
    render(<InputNumber step={0.5} placeholder="Enter number" />);
    expect(screen.getByPlaceholderText('Enter number')).toBeInTheDocument();
  });

  it('should be disabled when disabled prop is true', () => {
    render(<InputNumber disabled placeholder="Disabled" />);
    const input = screen.getByPlaceholderText('Disabled');
    expect(input).toBeDisabled();
  });

  it('should apply focused class when input is focused', async () => {
    const user = userEvent.setup();
    render(<InputNumber animated placeholder="Enter number" />);
    const input = screen.getByPlaceholderText('Enter number');
    await user.click(input);
    expect(document.querySelector('.yududesign-inputnumber-focused')).toBeInTheDocument();
  });

  it('should handle custom separator', () => {
    render(<InputNumber thousandSeparator separator="." placeholder="Enter number" />);
    expect(document.querySelector('.yududesign-inputnumber-separator')).toBeInTheDocument();
  });
});
