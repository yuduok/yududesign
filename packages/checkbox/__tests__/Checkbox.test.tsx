import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Checkbox } from '../src';

describe('Checkbox', () => {
  it('should render checkbox with label', () => {
    render(<Checkbox>Accept terms</Checkbox>);
    expect(screen.getByText('Accept terms')).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    render(<Checkbox className="custom-checkbox-class">Option</Checkbox>);
    const wrapper = document.querySelector('.ant-checkbox-wrapper');
    expect(wrapper).toHaveClass('custom-checkbox-class');
  });

  it('should apply bordered class when bordered prop is true', () => {
    render(<Checkbox bordered>Option</Checkbox>);
    const wrapper = document.querySelector('.ant-checkbox-wrapper');
    expect(wrapper).toHaveClass('yududesign-checkbox-bordered');
  });

  it('should not apply bordered class when bordered prop is false', () => {
    render(<Checkbox bordered={false}>Option</Checkbox>);
    const wrapper = document.querySelector('.ant-checkbox-wrapper');
    expect(wrapper).not.toHaveClass('yududesign-checkbox-bordered');
  });

  it('should apply secondary color class when color is secondary', () => {
    render(<Checkbox color="secondary">Option</Checkbox>);
    const wrapper = document.querySelector('.ant-checkbox-wrapper');
    expect(wrapper).toHaveClass('yududesign-checkbox-secondary');
  });

  it('should apply success color class when color is success', () => {
    render(<Checkbox color="success">Option</Checkbox>);
    const wrapper = document.querySelector('.ant-checkbox-wrapper');
    expect(wrapper).toHaveClass('yududesign-checkbox-success');
  });

  it('should apply warning color class when color is warning', () => {
    render(<Checkbox color="warning">Option</Checkbox>);
    const wrapper = document.querySelector('.ant-checkbox-wrapper');
    expect(wrapper).toHaveClass('yududesign-checkbox-warning');
  });

  it('should apply danger color class when color is danger', () => {
    render(<Checkbox color="danger">Option</Checkbox>);
    const wrapper = document.querySelector('.ant-checkbox-wrapper');
    expect(wrapper).toHaveClass('yududesign-checkbox-danger');
  });

  it('should handle checked state', async () => {
    const user = userEvent.setup();
    render(<Checkbox>Option</Checkbox>);
    const checkbox = screen.getByRole('checkbox');
    await user.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it('should call onChange when clicked', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    render(<Checkbox onChange={handleChange}>Option</Checkbox>);
    const checkbox = screen.getByRole('checkbox');
    await user.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when disabled prop is true', () => {
    render(<Checkbox disabled>Disabled Option</Checkbox>);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();
  });

  it('should pass through antd indeterminate prop', () => {
    render(<Checkbox indeterminate>Indeterminate</Checkbox>);
    const wrapper = document.querySelector('.ant-checkbox-wrapper');
    expect(wrapper?.querySelector('.ant-checkbox-indeterminate')).toBeInTheDocument();
  });

  it('should apply both custom className and yududesign classes', () => {
    render(<Checkbox bordered color="success" className="my-class">Option</Checkbox>);
    const wrapper = document.querySelector('.ant-checkbox-wrapper');
    expect(wrapper).toHaveClass('my-class');
    expect(wrapper).toHaveClass('yududesign-checkbox-bordered');
    expect(wrapper).toHaveClass('yududesign-checkbox-success');
  });

  it('should render without children', () => {
    render(<Checkbox />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('should toggle unchecked state when clicked again', async () => {
    const user = userEvent.setup();
    render(<Checkbox>Toggle me</Checkbox>);
    const checkbox = screen.getByRole('checkbox');

    await user.click(checkbox);
    expect(checkbox).toBeChecked();

    await user.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });
});
