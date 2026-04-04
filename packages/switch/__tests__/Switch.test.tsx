import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Switch } from '../src';

describe('Switch', () => {
  it('should render switch', () => {
    render(<Switch />);
    expect(document.querySelector('.ant-switch')).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    render(<Switch className="custom-switch-class" />);
    expect(document.querySelector('.custom-switch-class')).toBeInTheDocument();
  });

  it('should apply gradient class when gradient prop is true', () => {
    render(<Switch gradient />);
    expect(document.querySelector('.yududesign-switch-gradient')).toBeInTheDocument();
  });

  it('should not apply gradient class when gradient prop is false', () => {
    render(<Switch gradient={false} />);
    expect(document.querySelector('.yududesign-switch-gradient')).not.toBeInTheDocument();
  });

  it('should apply pulse class when pulse prop is true', () => {
    render(<Switch pulse />);
    expect(document.querySelector('.yududesign-switch-pulse')).toBeInTheDocument();
  });

  it('should not apply pulse class when pulse prop is false', () => {
    render(<Switch pulse={false} />);
    expect(document.querySelector('.yududesign-switch-pulse')).not.toBeInTheDocument();
  });

  it('should apply with-text class when statusText is provided', () => {
    render(
      <Switch statusText={{ checked: 'ON', unchecked: 'OFF' }} />
    );
    expect(document.querySelector('.yududesign-switch-with-text')).toBeInTheDocument();
  });

  it('should not apply with-text class when statusText is not provided', () => {
    render(<Switch />);
    expect(document.querySelector('.yududesign-switch-with-text')).not.toBeInTheDocument();
  });

  it('should render checked text when statusText is provided and checked', () => {
    render(
      <Switch checked statusText={{ checked: 'ON', unchecked: 'OFF' }} />
    );
    expect(screen.getByText('ON')).toBeInTheDocument();
  });

  it('should render unchecked text when statusText is provided and unchecked', () => {
    render(
      <Switch checked={false} statusText={{ checked: 'ON', unchecked: 'OFF' }} />
    );
    expect(screen.getByText('OFF')).toBeInTheDocument();
  });

  it('should call onChange when switch is toggled', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    render(<Switch onChange={handleChange} />);
    const switchEl = document.querySelector('.ant-switch') as HTMLElement;
    await user.click(switchEl);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('should render checked state', () => {
    render(<Switch checked />);
    const switchEl = document.querySelector('.ant-switch');
    expect(switchEl).toHaveClass('ant-switch-checked');
  });

  it('should render unchecked state', () => {
    render(<Switch checked={false} />);
    const switchEl = document.querySelector('.ant-switch');
    expect(switchEl).not.toHaveClass('ant-switch-checked');
  });

  it('should be disabled when disabled prop is true', () => {
    render(<Switch disabled />);
    const switchEl = document.querySelector('.ant-switch');
    expect(switchEl).toHaveClass('ant-switch-disabled');
  });

  it('should apply all style classes together', () => {
    render(
      <Switch
        gradient
        pulse
        statusText={{ checked: 'YES', unchecked: 'NO' }}
        className="my-switch"
      />
    );
    const switchEl = document.querySelector('.ant-switch');
    expect(switchEl).toHaveClass('my-switch');
    expect(switchEl).toHaveClass('yududesign-switch-gradient');
    expect(switchEl).toHaveClass('yududesign-switch-pulse');
    expect(switchEl).toHaveClass('yududesign-switch-with-text');
  });

  it('should render with loading state', () => {
    render(<Switch loading />);
    const switchEl = document.querySelector('.ant-switch');
    expect(switchEl).toHaveClass('ant-switch-loading');
  });
});
