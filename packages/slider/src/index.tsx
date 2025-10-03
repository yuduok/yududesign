import React, { useState } from 'react';
import { Slider as AntdSlider } from 'antd';
import type { SliderSingleProps, SliderRangeProps } from 'antd';
import classNames from 'classnames';
import './style.css';

export interface SliderProps extends SliderSingleProps {
  /** 自定义样式类名 */
  className?: string;
  /** 是否启用动画效果 */
  animated?: boolean;
  /** 是否显示进度渐变 */
  gradient?: boolean;
  /** 颜色主题 */
  colorTheme?: 'primary' | 'success' | 'warning' | 'danger';
  /** 是否显示值标签 */
  showValue?: boolean;
}

const Slider: React.FC<SliderProps> = ({ 
  className, 
  animated = true,
  gradient = false,
  colorTheme = 'primary',
  showValue = false,
  value,
  onChange,
  ...rest 
}) => {
  const [currentValue, setCurrentValue] = useState(value || 0);

  const cls = classNames(
    'yududesign-slider',
    className,
    {
      'yududesign-slider-animated': animated,
      'yududesign-slider-gradient': gradient,
      [`yududesign-slider-${colorTheme}`]: colorTheme !== 'primary',
    }
  );

  const handleChange = (val: number) => {
    setCurrentValue(val);
    onChange?.(val);
  };

  return (
    <div className={cls}>
      <AntdSlider 
        value={value || currentValue}
        onChange={handleChange}
        {...rest}
      />
      {showValue && (
        <div className="yududesign-slider-value">
          {value || currentValue}
        </div>
      )}
    </div>
  );
};

export { Slider };
export default Slider;
