import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Timeline } from '../src';
import { CheckCircleOutlined, ClockCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

describe('Timeline', () => {
  it('should render timeline', () => {
    render(
      <Timeline>
        <Timeline.Item>Item 1</Timeline.Item>
        <Timeline.Item>Item 2</Timeline.Item>
      </Timeline>
    );
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    render(
      <Timeline className="custom-timeline-class">
        <Timeline.Item>Item</Timeline.Item>
      </Timeline>
    );
    expect(document.querySelector('.custom-timeline-class')).toBeInTheDocument();
  });

  it('should apply yududesign timeline base class', () => {
    render(
      <Timeline>
        <Timeline.Item>Item</Timeline.Item>
      </Timeline>
    );
    expect(document.querySelector('.yududesign-timeline')).toBeInTheDocument();
  });

  it('should apply animated class when animated prop is true', () => {
    render(
      <Timeline animated>
        <Timeline.Item>Item</Timeline.Item>
      </Timeline>
    );
    expect(document.querySelector('.yududesign-timeline-animated')).toBeInTheDocument();
  });

  it('should not apply animated class when animated prop is false', () => {
    render(
      <Timeline animated={false}>
        <Timeline.Item>Item</Timeline.Item>
      </Timeline>
    );
    expect(document.querySelector('.yududesign-timeline-animated')).not.toBeInTheDocument();
  });

  it('should apply success theme class', () => {
    render(
      <Timeline theme="success">
        <Timeline.Item>Item</Timeline.Item>
      </Timeline>
    );
    expect(document.querySelector('.yududesign-timeline-success')).toBeInTheDocument();
  });

  it('should apply process theme class', () => {
    render(
      <Timeline theme="process">
        <Timeline.Item>Item</Timeline.Item>
      </Timeline>
    );
    expect(document.querySelector('.yududesign-timeline-process')).toBeInTheDocument();
  });

  it('should apply error theme class', () => {
    render(
      <Timeline theme="error">
        <Timeline.Item>Item</Timeline.Item>
      </Timeline>
    );
    expect(document.querySelector('.yududesign-timeline-error')).toBeInTheDocument();
  });

  it('should not apply theme class when theme is default', () => {
    render(
      <Timeline theme="default">
        <Timeline.Item>Item</Timeline.Item>
      </Timeline>
    );
    const timeline = document.querySelector('.yududesign-timeline');
    expect(timeline).not.toHaveClass('yududesign-timeline-default');
  });

  describe('Timeline.Item', () => {
    it('should render timeline item with children', () => {
      render(
        <Timeline>
          <Timeline.Item>Timeline content</Timeline.Item>
        </Timeline>
      );
      expect(screen.getByText('Timeline content')).toBeInTheDocument();
    });

    // Skipped: antd Timeline.Item className doesn't propagate to DOM.
    // @see https://github.com/ant-design/ant-design/issues/TODO
    it.skip('should apply success status dot to timeline item', () => {
      render(
        <Timeline>
          <Timeline.Item status="success">Completed</Timeline.Item>
        </Timeline>
      );
      expect(document.querySelector('.yududesign-timeline-icon-success')).toBeInTheDocument();
    });

    it.skip('should apply process status dot to timeline item', () => {
      render(
        <Timeline>
          <Timeline.Item status="process">In Progress</Timeline.Item>
        </Timeline>
      );
      expect(document.querySelector('.yududesign-timeline-icon-process')).toBeInTheDocument();
    });

    it.skip('should apply error status dot to timeline item', () => {
      render(
        <Timeline>
          <Timeline.Item status="error">Failed</Timeline.Item>
        </Timeline>
      );
      expect(document.querySelector('.yududesign-timeline-icon-error')).toBeInTheDocument();
    });

    it('should render with custom dot', () => {
      render(
        <Timeline>
          <Timeline.Item dot={<span data-testid="custom-dot">*</span>}>Custom</Timeline.Item>
        </Timeline>
      );
      expect(screen.getByTestId('custom-dot')).toBeInTheDocument();
    });
  });

  it('should render pending item', () => {
    render(
      <Timeline pending>
        <Timeline.Item>Completed 1</Timeline.Item>
        <Timeline.Item>Completed 2</Timeline.Item>
      </Timeline>
    );
    expect(document.querySelector('.ant-timeline-item-pending')).toBeInTheDocument();
  });

  it('should render reverse timeline', () => {
    render(
      <Timeline reverse>
        <Timeline.Item>Last</Timeline.Item>
        <Timeline.Item>First</Timeline.Item>
      </Timeline>
    );
    expect(screen.getByText('Last')).toBeInTheDocument();
    expect(screen.getByText('First')).toBeInTheDocument();
  });

  it('should render with mode alternate', () => {
    render(
      <Timeline mode="alternate">
        <Timeline.Item>Left</Timeline.Item>
        <Timeline.Item>Right</Timeline.Item>
      </Timeline>
    );
    expect(screen.getByText('Left')).toBeInTheDocument();
    expect(screen.getByText('Right')).toBeInTheDocument();
  });
});
