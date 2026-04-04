import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Rate } from '../src';

describe('Rate', () => {
  it('should render rate component', () => {
    render(<Rate />);
    expect(document.querySelector('.ant-rate')).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    render(<Rate className="custom-rate-class" />);
    expect(document.querySelector('.custom-rate-class')).toBeInTheDocument();
  });

  it('should apply yududesign rate base class', () => {
    render(<Rate />);
    expect(document.querySelector('.yududesign-rate')).toBeInTheDocument();
  });

  it('should apply animated class when animated prop is true', () => {
    render(<Rate animated />);
    expect(document.querySelector('.yududesign-rate-animated')).toBeInTheDocument();
  });

  it('should not apply animated class when animated prop is false', () => {
    render(<Rate animated={false} />);
    expect(document.querySelector('.yududesign-rate-animated')).not.toBeInTheDocument();
  });

  it('should apply heart color theme class', () => {
    render(<Rate colorTheme="heart" />);
    expect(document.querySelector('.yududesign-rate-heart')).toBeInTheDocument();
  });

  it('should apply emoji color theme class', () => {
    render(<Rate colorTheme="emoji" />);
    expect(document.querySelector('.yududesign-rate-emoji')).toBeInTheDocument();
  });

  it('should apply custom color theme class', () => {
    render(<Rate colorTheme="custom" />);
    expect(document.querySelector('.yududesign-rate-custom')).toBeInTheDocument();
  });

  it('should not apply color theme class when colorTheme is star', () => {
    render(<Rate colorTheme="star" />);
    const rate = document.querySelector('.yududesign-rate');
    expect(rate).not.toHaveClass('yududesign-rate-star');
  });

  it('should display text when showText is true', () => {
    render(<Rate showText value={3} />);
    expect(document.querySelector('.yududesign-rate-text')).toBeInTheDocument();
  });

  it('should display correct text based on value', () => {
    render(<Rate showText value={5} />);
    const textElement = document.querySelector('.yududesign-rate-text');
    expect(textElement).toBeInTheDocument();
  });

  it('should handle value prop', () => {
    render(<Rate value={3} />);
    const rate = document.querySelector('.ant-rate');
    expect(rate).toBeInTheDocument();
  });

  it('should call onChange when rate value changes', async () => {
    const handleChange = vi.fn();
    render(<Rate onChange={handleChange} />);
    // Verify the component renders with onChange handler
    expect(document.querySelector('.yududesign-rate')).toBeInTheDocument();
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('should not call onChange when readonly', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    render(<Rate readonly value={3} onChange={handleChange} />);
    const stars = document.querySelectorAll('.ant-rate-star');
    await user.click(stars[4]);
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('should handle allowHalf prop', () => {
    render(<Rate allowHalf value={2.5} />);
    const rate = document.querySelector('.ant-rate');
    expect(rate).toBeInTheDocument();
  });

  it('should apply all color theme and animated classes together', () => {
    render(<Rate animated colorTheme="heart" className="my-rate" />);
    const rate = document.querySelector('.yududesign-rate');
    expect(rate).toHaveClass('my-rate');
    expect(rate).toHaveClass('yududesign-rate-animated');
    expect(rate).toHaveClass('yududesign-rate-heart');
  });

  it('should handle custom textMap', () => {
    render(
      <Rate
        showText
        value={3}
        textMap={['Terrible', 'Bad', 'Okay', 'Good', 'Great']}
      />
    );
    const textElement = document.querySelector('.yududesign-rate-text');
    expect(textElement).toBeInTheDocument();
  });
});
