import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Card } from '../src';

describe('Card', () => {
  it('should render card with title', () => {
    render(<Card title="Card Title">Card content</Card>);
    expect(screen.getByText('Card Title')).toBeInTheDocument();
  });

  it('should render card with children', () => {
    render(<Card>This is card content</Card>);
    expect(screen.getByText('This is card content')).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    render(<Card className="custom-card-class">Content</Card>);
    expect(document.querySelector('.custom-card-class')).toBeInTheDocument();
  });

  it('should apply hoverable class when hoverable prop is true', () => {
    render(<Card hoverable>Content</Card>);
    expect(document.querySelector('.yududesign-card-hoverable')).toBeInTheDocument();
  });

  it('should not apply hoverable class when hoverable prop is false', () => {
    render(<Card hoverable={false}>Content</Card>);
    expect(document.querySelector('.yududesign-card-hoverable')).not.toBeInTheDocument();
  });

  it('should apply gradient border class when gradientBorder prop is true', () => {
    render(<Card gradientBorder>Content</Card>);
    expect(document.querySelector('.yududesign-card-gradient-border')).toBeInTheDocument();
  });

  it('should apply small shadow class', () => {
    render(<Card shadow="small">Content</Card>);
    expect(document.querySelector('.yududesign-card-shadow-small')).toBeInTheDocument();
  });

  it('should apply medium shadow class', () => {
    render(<Card shadow="medium">Content</Card>);
    expect(document.querySelector('.yududesign-card-shadow-medium')).toBeInTheDocument();
  });

  it('should apply large shadow class', () => {
    render(<Card shadow="large">Content</Card>);
    expect(document.querySelector('.yududesign-card-shadow-large')).toBeInTheDocument();
  });

  it('should not apply shadow class when shadow is none', () => {
    render(<Card shadow="none">Content</Card>);
    const card = document.querySelector('.ant-card');
    expect(card).not.toHaveClass('yududesign-card-shadow-small');
    expect(card).not.toHaveClass('yududesign-card-shadow-medium');
    expect(card).not.toHaveClass('yududesign-card-shadow-large');
  });

  it('should apply collapsible class when collapsible prop is true with title', () => {
    render(<Card title="Collapsible Card" collapsible>Content</Card>);
    expect(document.querySelector('.yududesign-card-collapsible')).toBeInTheDocument();
  });

  it('should show collapse icon when collapsible with title', () => {
    render(<Card title="Collapsible Card" collapsible>Content</Card>);
    expect(document.querySelector('.yududesign-card-collapse-icon')).toBeInTheDocument();
  });

  it('should toggle collapsed state when collapse icon is clicked', async () => {
    const user = userEvent.setup();
    render(<Card title="Collapsible Card" collapsible>Content</Card>);
    const icon = document.querySelector('.yududesign-card-collapse-icon') as HTMLElement;
    await user.click(icon);
    expect(document.querySelector('.yududesign-card-collapsed')).toBeInTheDocument();
    await user.click(icon);
    expect(document.querySelector('.yududesign-card-collapsed')).not.toBeInTheDocument();
  });

  it('should hide content when collapsed', async () => {
    const user = userEvent.setup();
    render(<Card title="Collapsible Card" collapsible>Hidden Content</Card>);
    const icon = document.querySelector('.yududesign-card-collapse-icon') as HTMLElement;
    await user.click(icon);
    expect(screen.queryByText('Hidden Content')).not.toBeInTheDocument();
  });

  it('should render Card.Meta', () => {
    render(
      <Card>
        <Card.Meta title="Meta Title" description="Meta Description" />
      </Card>
    );
    expect(screen.getByText('Meta Title')).toBeInTheDocument();
    expect(screen.getByText('Meta Description')).toBeInTheDocument();
  });

  it('should render Card.Grid', () => {
    render(
      <Card>
        <Card.Grid>Grid Content</Card.Grid>
      </Card>
    );
    expect(screen.getByText('Grid Content')).toBeInTheDocument();
  });

  it('should render extra content', () => {
    render(
      <Card title="Card" extra={<button>Action</button>}>
        Content
      </Card>
    );
    expect(screen.getByText('Action')).toBeInTheDocument();
  });
});
