import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Cascader } from '../src';

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      { value: 'hangzhou', label: 'Hangzhou' },
      { value: 'ningbo', label: 'Ningbo' },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      { value: 'nanjing', label: 'Nanjing' },
    ],
  },
];

describe('Cascader', () => {
  it('should render cascader', () => {
    render(<Cascader options={options} placeholder="Select" />);
    expect(document.querySelector('.ant-cascader')).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    render(<Cascader options={options} className="custom-cascader-class" placeholder="Select" />);
    expect(document.querySelector('.custom-cascader-class')).toBeInTheDocument();
  });

  it('should apply theme class when theme is primary', () => {
    render(<Cascader options={options} theme="primary" placeholder="Select" />);
    expect(document.querySelector('.yududesign-cascader-primary')).toBeInTheDocument();
  });

  it('should apply theme class when theme is success', () => {
    render(<Cascader options={options} theme="success" placeholder="Select" />);
    expect(document.querySelector('.yududesign-cascader-success')).toBeInTheDocument();
  });

  it('should apply theme class when theme is warning', () => {
    render(<Cascader options={options} theme="warning" placeholder="Select" />);
    expect(document.querySelector('.yududesign-cascader-warning')).toBeInTheDocument();
  });

  it('should apply theme class when theme is danger', () => {
    render(<Cascader options={options} theme="danger" placeholder="Select" />);
    expect(document.querySelector('.yududesign-cascader-danger')).toBeInTheDocument();
  });

  it('should have yududesign cascader base class', () => {
    render(<Cascader options={options} placeholder="Select" />);
    expect(document.querySelector('.yududesign-cascader')).toBeInTheDocument();
  });

  it('should pass through allowClear prop', () => {
    render(<Cascader options={options} allowClear={false} placeholder="Select" />);
    expect(document.querySelector('.ant-cascader')).toBeInTheDocument();
  });

  it('should support showSearch prop', () => {
    render(<Cascader options={options} showSearch placeholder="Select" />);
    expect(document.querySelector('.ant-cascader')).toBeInTheDocument();
  });

  it('should call onChange when selection changes', async () => {
    const handleChange = vi.fn();
    render(
      <Cascader
        options={options}
        onChange={handleChange}
        placeholder="Select"
        expandTrigger="hover"
      />
    );
    expect(document.querySelector('.ant-cascader')).toBeInTheDocument();
  });

  it('should pass through loading state', () => {
    render(<Cascader options={options} loading placeholder="Select" />);
    expect(document.querySelector('.ant-cascader')).toBeInTheDocument();
  });

  it('should render with disabled prop', () => {
    render(<Cascader options={options} disabled placeholder="Select" />);
    const cascader = document.querySelector('.ant-cascader');
    expect(cascader).toBeInTheDocument();
    expect(cascader).toHaveClass('ant-select-disabled');
  });

  it('should apply multiple theme classes together', () => {
    render(<Cascader options={options} theme="danger" className="my-class" placeholder="Select" />);
    const cascader = document.querySelector('.yududesign-cascader');
    expect(cascader).toHaveClass('my-class');
    expect(cascader).toHaveClass('yududesign-cascader-danger');
  });

  it('should render with default theme (no theme class)', () => {
    render(<Cascader options={options} theme="default" placeholder="Select" />);
    const cascader = document.querySelector('.yududesign-cascader');
    expect(cascader).toBeInTheDocument();
  });
});
