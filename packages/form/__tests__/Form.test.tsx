import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { Form } from '../src';
import { Input } from '../../input/src';

describe('Form', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should render form with children', () => {
    render(
      <Form>
        <Form.Item name="username" label="Username">
          <Input placeholder="Enter username" />
        </Form.Item>
      </Form>
    );
    expect(screen.getByPlaceholderText('Enter username')).toBeInTheDocument();
  });

  it('should apply yududesign form base class', () => {
    render(
      <Form>
        <Form.Item name="test">
          <Input placeholder="test" />
        </Form.Item>
      </Form>
    );
    expect(document.querySelector('.yududesign-form')).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    render(
      <Form className="custom-form-class">
        <Form.Item name="test">
          <Input placeholder="test" />
        </Form.Item>
      </Form>
    );
    expect(document.querySelector('.custom-form-class')).toBeInTheDocument();
  });

  it('should apply animated class when validationAnimation is true', () => {
    render(
      <Form validationAnimation>
        <Form.Item name="test">
          <Input placeholder="test" />
        </Form.Item>
      </Form>
    );
    expect(document.querySelector('.yududesign-form-animated')).toBeInTheDocument();
  });

  it('should not apply animated class when validationAnimation is false', () => {
    render(
      <Form validationAnimation={false}>
        <Form.Item name="test">
          <Input placeholder="test" />
        </Form.Item>
      </Form>
    );
    expect(document.querySelector('.yududesign-form-animated')).not.toBeInTheDocument();
  });

  it('should render submit button when showSubmitButton is true', () => {
    render(
      <Form showSubmitButton>
        <Form.Item name="test">
          <Input placeholder="test" />
        </Form.Item>
      </Form>
    );
    expect(document.querySelector('.yududesign-form-submit')).toBeInTheDocument();
  });

  it('should not render submit button when showSubmitButton is false', () => {
    render(
      <Form showSubmitButton={false}>
        <Form.Item name="test">
          <Input placeholder="test" />
        </Form.Item>
      </Form>
    );
    expect(document.querySelector('.yududesign-form-submit')).not.toBeInTheDocument();
  });

  it('should display custom submit text', () => {
    render(
      <Form submitText="Submit Form">
        <Form.Item name="test">
          <Input placeholder="test" />
        </Form.Item>
      </Form>
    );
    expect(screen.getByText('Submit Form')).toBeInTheDocument();
  });

  it('should show auto save tip when autoSaveEnabled is enabled', () => {
    const { container } = render(
      <Form autoSaveEnabled onAutoSave={vi.fn()}>
        <Form.Item name="test">
          <Input placeholder="test" />
        </Form.Item>
      </Form>
    );
    expect(container.querySelector('.yududesign-form-autosave-tip')).toBeInTheDocument();
  });

  it('should render form that can be submitted', () => {
    render(
      <Form showSubmitButton={false}>
        <Form.Item name="username" label="Username">
          <Input placeholder="Enter username" />
        </Form.Item>
      </Form>
    );
    expect(screen.getByPlaceholderText('Enter username')).toBeInTheDocument();
  });

  it('should handle Form.Item with validation rules', () => {
    render(
      <Form>
        <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
          <Input placeholder="Enter email" />
        </Form.Item>
      </Form>
    );
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('should use useForm hook inside component', () => {
    function TestComponent() {
      const [form] = Form.useForm();
      return <div data-testid="form-instance">{form ? 'has-form' : 'no-form'}</div>;
    }
    render(<TestComponent />);
    expect(screen.getByTestId('form-instance')).toHaveTextContent('has-form');
  });

  it('should apply both custom className and animated class', () => {
    render(
      <Form className="my-form" validationAnimation>
        <Form.Item name="test">
          <Input placeholder="test" />
        </Form.Item>
      </Form>
    );
    const formEl = document.querySelector('.yududesign-form');
    expect(formEl).toHaveClass('my-form');
    expect(formEl).toHaveClass('yududesign-form-animated');
  });

  it('should render Form.List component', () => {
    render(
      <Form>
        <Form.List name="users">
          {(fields) => (
            <>
              {fields.map((field) => (
                <Form.Item key={field.key} name={[field.name, 'name']}>
                  <Input placeholder="Name" />
                </Form.Item>
              ))}
            </>
          )}
        </Form.List>
      </Form>
    );
    expect(document.querySelector('.yududesign-form')).toBeInTheDocument();
  });
});
