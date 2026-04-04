import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Tag } from '../src';

describe('Tag', () => {
  it('should render tag with text', () => {
    render(<Tag>Tag Text</Tag>);
    expect(screen.getByText('Tag Text')).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    render(<Tag className="custom-tag-class">Tag</Tag>);
    expect(document.querySelector('.custom-tag-class')).toBeInTheDocument();
  });

  it('should apply gradient class when gradient prop is true', () => {
    render(<Tag gradient>Gradient Tag</Tag>);
    expect(document.querySelector('.yududesign-tag-gradient')).toBeInTheDocument();
  });

  it('should not apply gradient class when gradient prop is false', () => {
    render(<Tag gradient={false}>Tag</Tag>);
    expect(document.querySelector('.yududesign-tag-gradient')).not.toBeInTheDocument();
  });

  it('should apply glow class when glow prop is true', () => {
    render(<Tag glow>Glow Tag</Tag>);
    expect(document.querySelector('.yududesign-tag-glow')).toBeInTheDocument();
  });

  it('should not apply glow class when glow prop is false', () => {
    render(<Tag glow={false}>Tag</Tag>);
    expect(document.querySelector('.yududesign-tag-glow')).not.toBeInTheDocument();
  });

  it('should apply pulse class when pulse prop is true', () => {
    render(<Tag pulse>Pulse Tag</Tag>);
    expect(document.querySelector('.yududesign-tag-pulse')).toBeInTheDocument();
  });

  it('should not apply pulse class when pulse prop is false', () => {
    render(<Tag pulse={false}>Tag</Tag>);
    expect(document.querySelector('.yududesign-tag-pulse')).not.toBeInTheDocument();
  });

  it('should apply success theme class', () => {
    render(<Tag theme="success">Success Tag</Tag>);
    expect(document.querySelector('.yududesign-tag-theme-success')).toBeInTheDocument();
  });

  it('should apply warning theme class', () => {
    render(<Tag theme="warning">Warning Tag</Tag>);
    expect(document.querySelector('.yududesign-tag-theme-warning')).toBeInTheDocument();
  });

  it('should apply error theme class', () => {
    render(<Tag theme="error">Error Tag</Tag>);
    expect(document.querySelector('.yududesign-tag-theme-error')).toBeInTheDocument();
  });

  it('should apply info theme class', () => {
    render(<Tag theme="info">Info Tag</Tag>);
    expect(document.querySelector('.yududesign-tag-theme-info')).toBeInTheDocument();
  });

  it('should not apply theme class when theme is default', () => {
    render(<Tag theme="default">Default Tag</Tag>);
    const tag = document.querySelector('.ant-tag');
    expect(tag).not.toHaveClass('yududesign-tag-theme-default');
  });

  it('should be closable when closable prop is true', () => {
    render(<Tag closable>Closable Tag</Tag>);
    expect(document.querySelector('.ant-tag-close-icon')).toBeInTheDocument();
  });

  it('should not be closable when closable prop is false', () => {
    render(<Tag closable={false}>Tag</Tag>);
    expect(document.querySelector('.ant-tag-close-icon')).not.toBeInTheDocument();
  });

  it('should call onClose when close icon is clicked', async () => {
    const handleClose = vi.fn();
    const user = userEvent.setup();
    render(<Tag closable onClose={handleClose}>Tag</Tag>);
    const closeIcon = document.querySelector('.ant-tag-close-icon') as HTMLElement;
    await user.click(closeIcon);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('should apply all style classes together', () => {
    render(
      <Tag
        gradient
        glow
        pulse
        theme="success"
        className="my-tag"
      >
        Full Featured Tag
      </Tag>
    );
    const tag = document.querySelector('.ant-tag');
    expect(tag).toHaveClass('my-tag');
    expect(tag).toHaveClass('yududesign-tag-gradient');
    expect(tag).toHaveClass('yududesign-tag-glow');
    expect(tag).toHaveClass('yududesign-tag-pulse');
    expect(tag).toHaveClass('yududesign-tag-theme-success');
  });

  it('should render with different colors via antd color prop', () => {
    render(<Tag color="blue">Blue Tag</Tag>);
    expect(screen.getByText('Blue Tag')).toBeInTheDocument();
  });

  it('should render multiple tags', () => {
    render(
      <>
        <Tag>Tag 1</Tag>
        <Tag>Tag 2</Tag>
        <Tag>Tag 3</Tag>
      </>
    );
    expect(screen.getByText('Tag 1')).toBeInTheDocument();
    expect(screen.getByText('Tag 2')).toBeInTheDocument();
    expect(screen.getByText('Tag 3')).toBeInTheDocument();
  });
});
