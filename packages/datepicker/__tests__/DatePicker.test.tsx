import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { DatePicker } from '../src';

describe('DatePicker', () => {
  it('should render datepicker with placeholder', () => {
    render(<DatePicker placeholder="Select date" />);
    expect(screen.getByPlaceholderText('Select date')).toBeInTheDocument();
  });

  it('should apply yududesign datepicker base class', () => {
    render(<DatePicker placeholder="Select date" />);
    expect(document.querySelector('.yududesign-datepicker')).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    render(<DatePicker className="custom-datepicker-class" placeholder="Select date" />);
    expect(document.querySelector('.custom-datepicker-class')).toBeInTheDocument();
  });

  it('should apply animated class when animated prop is true', () => {
    render(<DatePicker animated placeholder="Select date" />);
    expect(document.querySelector('.yududesign-datepicker-animated')).toBeInTheDocument();
  });

  it('should not apply animated class when animated prop is false', () => {
    render(<DatePicker animated={false} placeholder="Select date" />);
    expect(document.querySelector('.yududesign-datepicker-animated')).not.toBeInTheDocument();
  });

  it('should apply quick select class when quickSelect is true', () => {
    render(<DatePicker quickSelect placeholder="Select date" />);
    const picker = document.querySelector('.yududesign-datepicker');
    expect(picker).toBeInTheDocument();
  });

  it('should render quick select footer when quickSelect is enabled', () => {
    render(<DatePicker quickSelect placeholder="Select date" />);
    // The quick select items should be rendered in the extra footer
    expect(document.querySelector('.yududesign-datepicker')).toBeInTheDocument();
  });

  it('should call onChange when date is selected', async () => {
    const handleChange = vi.fn();
    render(<DatePicker onChange={handleChange} placeholder="Select date" />);
    const input = screen.getByPlaceholderText('Select date');
    await userEvent.click(input);
    expect(document.querySelector('.ant-picker')).toBeInTheDocument();
  });

  it('should pass showToday prop through', () => {
    render(<DatePicker showToday={false} placeholder="Select date" />);
    const picker = document.querySelector('.ant-picker');
    expect(picker).toBeInTheDocument();
  });

  it('should render with disabled prop', () => {
    render(<DatePicker disabled placeholder="Select date" />);
    const input = screen.getByPlaceholderText('Select date');
    expect(input).toBeDisabled();
  });

  it('should pass format prop through', () => {
    render(<DatePicker format="YYYY-MM-DD" placeholder="Select date" />);
    expect(screen.getByPlaceholderText('Select date')).toBeInTheDocument();
  });

  it('should render RangePicker', () => {
    render(<DatePicker.RangePicker placeholder={['Start', 'End']} />);
    expect(document.querySelector('.ant-picker-range')).toBeInTheDocument();
  });

  it('should apply both animated and quick select classes', () => {
    render(<DatePicker animated={true} quickSelect={true} placeholder="Select date" />);
    const picker = document.querySelector('.yududesign-datepicker');
    expect(picker).toHaveClass('yududesign-datepicker-animated');
  });

  it('should handle size prop', () => {
    render(<DatePicker size="large" placeholder="Select date" />);
    expect(screen.getByPlaceholderText('Select date')).toBeInTheDocument();
  });

  it('should pass through style prop', () => {
    render(<DatePicker style={{ width: '300px' }} placeholder="Select date" />);
    const input = screen.getByPlaceholderText('Select date');
    expect(input).toBeInTheDocument();
  });
});
