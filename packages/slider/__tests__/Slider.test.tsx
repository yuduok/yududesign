import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Slider } from '../src';

describe('Slider', () => {
  it('should render slider', () => {
    render(<Slider />);
    expect(document.querySelector('.ant-slider')).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    render(<Slider className="custom-slider-class" />);
    expect(document.querySelector('.custom-slider-class')).toBeInTheDocument();
  });

  it('should apply yududesign slider base class', () => {
    render(<Slider />);
    expect(document.querySelector('.yududesign-slider')).toBeInTheDocument();
  });

  it('should apply animated class when animated prop is true', () => {
    render(<Slider animated />);
    expect(document.querySelector('.yududesign-slider-animated')).toBeInTheDocument();
  });

  it('should not apply animated class when animated prop is false', () => {
    render(<Slider animated={false} />);
    expect(document.querySelector('.yududesign-slider-animated')).not.toBeInTheDocument();
  });

  it('should apply gradient class when gradient prop is true', () => {
    render(<Slider gradient />);
    expect(document.querySelector('.yududesign-slider-gradient')).toBeInTheDocument();
  });

  it('should not apply gradient class when gradient prop is false', () => {
    render(<Slider gradient={false} />);
    expect(document.querySelector('.yududesign-slider-gradient')).not.toBeInTheDocument();
  });

  it('should apply success color theme class', () => {
    render(<Slider colorTheme="success" />);
    expect(document.querySelector('.yududesign-slider-success')).toBeInTheDocument();
  });

  it('should apply warning color theme class', () => {
    render(<Slider colorTheme="warning" />);
    expect(document.querySelector('.yududesign-slider-warning')).toBeInTheDocument();
  });

  it('should apply danger color theme class', () => {
    render(<Slider colorTheme="danger" />);
    expect(document.querySelector('.yududesign-slider-danger')).toBeInTheDocument();
  });

  it('should not apply color theme class when colorTheme is primary', () => {
    render(<Slider colorTheme="primary" />);
    const slider = document.querySelector('.yududesign-slider');
    expect(slider).not.toHaveClass('yududesign-slider-primary');
  });

  it('should display value when showValue is true', () => {
    render(<Slider value={50} showValue />);
    expect(document.querySelector('.yududesign-slider-value')).toHaveTextContent('50');
  });

  it('should call onChange when slider value changes', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    render(<Slider onChange={handleChange} />);
    const sliderTrack = document.querySelector('.ant-slider-track') as HTMLElement;
    await user.click(sliderTrack);
    expect(handleChange).toHaveBeenCalled();
  });

  it('should handle range mode with array values', () => {
    render(<Slider range defaultValue={[20, 80]} />);
    const slider = document.querySelector('.ant-slider');
    expect(slider).toBeInTheDocument();
    expect(document.querySelector('.ant-slider-handle')).toBeInTheDocument();
  });

  it('should display marks', () => {
    const marks = { 0: '0', 50: '50', 100: '100' };
    render(<Slider marks={marks} />);
    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByText('50')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();
  });

  it('should apply all style classes together', () => {
    render(
      <Slider
        animated
        gradient
        colorTheme="danger"
        showValue
        className="my-slider"
        value={75}
      />
    );
    const slider = document.querySelector('.yududesign-slider');
    expect(slider).toHaveClass('my-slider');
    expect(slider).toHaveClass('yududesign-slider-animated');
    expect(slider).toHaveClass('yududesign-slider-gradient');
    expect(slider).toHaveClass('yududesign-slider-danger');
    expect(document.querySelector('.yududesign-slider-value')).toHaveTextContent('75');
  });
});
