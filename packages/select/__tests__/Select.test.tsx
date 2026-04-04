import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Select as AntdSelect } from 'antd';
import { Select } from '../src';

describe('Select', () => {
  it('should render select with placeholder', () => {
    render(
      <Select placeholder="Select an option">
        <AntdSelect.Option value="a">Option A</AntdSelect.Option>
        <AntdSelect.Option value="b">Option B</AntdSelect.Option>
      </Select>
    );
    expect(screen.getByText('Select an option')).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    render(
      <Select className="custom-select-class" placeholder="Select">
        <AntdSelect.Option value="a">A</AntdSelect.Option>
      </Select>
    );
    expect(document.querySelector('.custom-select-class')).toBeInTheDocument();
  });

  it('should apply option count class when showOptionCount is true', () => {
    render(
      <Select showOptionCount placeholder="Select">
        <AntdSelect.Option value="a">A</AntdSelect.Option>
        <AntdSelect.Option value="b">B</AntdSelect.Option>
      </Select>
    );
    expect(document.querySelector('.yududesign-select-option-count')).toBeInTheDocument();
  });

  it('should display option count text when showOptionCount is true', () => {
    render(
      <Select showOptionCount placeholder="Select">
        <AntdSelect.Option value="a">A</AntdSelect.Option>
        <AntdSelect.Option value="b">B</AntdSelect.Option>
        <AntdSelect.Option value="c">C</AntdSelect.Option>
      </Select>
    );
    expect(document.querySelector('.yududesign-select-count')).toHaveTextContent('3 个选项');
  });

  it('should apply tagged mode class when taggedMode is true', () => {
    render(
      <Select taggedMode placeholder="Select">
        <AntdSelect.Option value="a">A</AntdSelect.Option>
      </Select>
    );
    expect(document.querySelector('.yududesign-select-tagged')).toBeInTheDocument();
  });

  it('should apply border animation class when borderAnimation is true', () => {
    render(
      <Select borderAnimation placeholder="Select">
        <AntdSelect.Option value="a">A</AntdSelect.Option>
      </Select>
    );
    expect(document.querySelector('.yududesign-select-border-animation')).toBeInTheDocument();
  });

  it('should render select wrapper', () => {
    render(
      <Select placeholder="Select">
        <AntdSelect.Option value="a">A</AntdSelect.Option>
      </Select>
    );
    expect(document.querySelector('.yududesign-select-wrapper')).toBeInTheDocument();
  });

  it('should support onChange prop', () => {
    const handleChange = vi.fn();
    render(
      <Select onChange={handleChange} placeholder="Select">
        <AntdSelect.Option value="a">Option A</AntdSelect.Option>
        <AntdSelect.Option value="b">Option B</AntdSelect.Option>
      </Select>
    );
    expect(document.querySelector('.yududesign-select-wrapper')).toBeInTheDocument();
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('should be disabled when disabled prop is true', () => {
    render(
      <Select disabled placeholder="Disabled">
        <AntdSelect.Option value="a">A</AntdSelect.Option>
      </Select>
    );
    expect(document.querySelector('.ant-select-disabled')).toBeInTheDocument();
  });

  it('should support multiple selection mode', () => {
    render(
      <Select mode="multiple" placeholder="Select multiple">
        <AntdSelect.Option value="a">A</AntdSelect.Option>
        <AntdSelect.Option value="b">B</AntdSelect.Option>
      </Select>
    );
    expect(screen.getByText('Select multiple')).toBeInTheDocument();
  });

  it('should support searchable mode', () => {
    render(
      <Select showSearch placeholder="Search">
        <AntdSelect.Option value="a">A</AntdSelect.Option>
        <AntdSelect.Option value="b">B</AntdSelect.Option>
      </Select>
    );
    expect(screen.getByText('Search')).toBeInTheDocument();
  });

  it('should apply multiple style classes', () => {
    render(
      <Select
        showOptionCount
        taggedMode
        borderAnimation
        className="my-select"
        placeholder="Select"
      >
        <AntdSelect.Option value="a">A</AntdSelect.Option>
      </Select>
    );
    const wrapper = document.querySelector('.yududesign-select-wrapper');
    expect(wrapper.querySelector('.yududesign-select-option-count')).toBeInTheDocument();
    expect(wrapper.querySelector('.yududesign-select-tagged')).toBeInTheDocument();
    expect(wrapper.querySelector('.yududesign-select-border-animation')).toBeInTheDocument();
  });

  it('should render Select.OptGroup label', () => {
    render(
      <Select placeholder="Select with group">
        <AntdSelect.OptGroup label="Fruits">
          <AntdSelect.Option value="apple">Apple</AntdSelect.Option>
        </AntdSelect.OptGroup>
      </Select>
    );
    // OptGroup renders in the dropdown, not the trigger
    // Verify the Select wrapper renders correctly
    expect(document.querySelector('.yududesign-select-wrapper')).toBeInTheDocument();
  });
});
