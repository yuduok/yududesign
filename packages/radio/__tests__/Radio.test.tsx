import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Radio } from '../src';

describe('Radio', () => {
  it('should render radio with label', () => {
    render(<Radio>Option A</Radio>);
    expect(screen.getByText('Option A')).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    render(<Radio className="custom-radio-class">Option</Radio>);
    expect(document.querySelector('.custom-radio-class')).toBeInTheDocument();
  });

  it('should apply yududesign radio base class', () => {
    render(<Radio>Option</Radio>);
    expect(document.querySelector('.yududesign-radio')).toBeInTheDocument();
  });

  it('should apply animated class when animated prop is true', () => {
    render(<Radio animated>Option</Radio>);
    expect(document.querySelector('.yududesign-radio-animated')).toBeInTheDocument();
  });

  it('should not apply animated class when animated prop is false', () => {
    render(<Radio animated={false}>Option</Radio>);
    expect(document.querySelector('.yududesign-radio-animated')).not.toBeInTheDocument();
  });

  it('should apply success color theme class', () => {
    render(<Radio colorTheme="success">Option</Radio>);
    expect(document.querySelector('.yududesign-radio-success')).toBeInTheDocument();
  });

  it('should apply warning color theme class', () => {
    render(<Radio colorTheme="warning">Option</Radio>);
    expect(document.querySelector('.yududesign-radio-warning')).toBeInTheDocument();
  });

  it('should apply danger color theme class', () => {
    render(<Radio colorTheme="danger">Option</Radio>);
    expect(document.querySelector('.yududesign-radio-danger')).toBeInTheDocument();
  });

  it('should not apply color theme class when colorTheme is primary', () => {
    render(<Radio colorTheme="primary">Option</Radio>);
    const radio = document.querySelector('.yududesign-radio');
    expect(radio).not.toHaveClass('yududesign-radio-primary');
  });

  it('should call onChange when radio is selected', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    render(<Radio onChange={handleChange}>Option</Radio>);
    const radio = document.querySelector('.ant-radio') as HTMLElement;
    await user.click(radio);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when disabled prop is true', () => {
    render(<Radio disabled>Disabled Option</Radio>);
    const radio = document.querySelector('.ant-radio-wrapper');
    expect(radio).toHaveClass('ant-radio-wrapper-disabled');
  });

  describe('Radio.Group', () => {
    it('should render radio group', () => {
      render(
        <Radio.Group>
          <Radio value="a">A</Radio>
          <Radio value="b">B</Radio>
        </Radio.Group>
      );
      expect(screen.getByText('A')).toBeInTheDocument();
      expect(screen.getByText('B')).toBeInTheDocument();
    });

    it('should apply card style class when cardStyle prop is true', () => {
      render(
        <Radio.Group cardStyle>
          <Radio value="a">A</Radio>
          <Radio value="b">B</Radio>
        </Radio.Group>
      );
      expect(document.querySelector('.yududesign-radio-group-card')).toBeInTheDocument();
    });

    it('should not apply card style class when cardStyle prop is false', () => {
      render(
        <Radio.Group cardStyle={false}>
          <Radio value="a">A</Radio>
          <Radio value="b">B</Radio>
        </Radio.Group>
      );
      expect(document.querySelector('.yududesign-radio-group-card')).not.toBeInTheDocument();
    });

    it('should apply animated class to group', () => {
      render(
        <Radio.Group animated>
          <Radio value="a">A</Radio>
          <Radio value="b">B</Radio>
        </Radio.Group>
      );
      expect(document.querySelector('.yududesign-radio-group-animated')).toBeInTheDocument();
    });

    it('should handle value change within group', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();
      render(
        <Radio.Group onChange={handleChange}>
          <Radio value="a">A</Radio>
          <Radio value="b">B</Radio>
        </Radio.Group>
      );
      await user.click(screen.getByText('A'));
      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('should apply custom className to group', () => {
      render(
        <Radio.Group className="custom-group-class">
          <Radio value="a">A</Radio>
          <Radio value="b">B</Radio>
        </Radio.Group>
      );
      expect(document.querySelector('.custom-group-class')).toBeInTheDocument();
    });

    it('should render Radio.Button', () => {
      render(
        <Radio.Group>
          <Radio.Button value="a">A</Radio.Button>
          <Radio.Button value="b">B</Radio.Button>
        </Radio.Group>
      );
      expect(screen.getByText('A')).toBeInTheDocument();
    });
  });
});
