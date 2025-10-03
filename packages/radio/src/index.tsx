import React from 'react';
import { Radio as AntdRadio } from 'antd';
import type { RadioProps as AntdRadioProps, RadioGroupProps } from 'antd';
import classNames from 'classnames';
import './style.css';

export interface RadioProps extends AntdRadioProps {
  /** 自定义样式类名 */
  className?: string;
  /** 是否启用动画效果 */
  animated?: boolean;
  /** 自定义颜色主题 */
  colorTheme?: 'primary' | 'success' | 'warning' | 'danger';
}

export interface RadioGroupEnhancedProps extends RadioGroupProps {
  /** 自定义样式类名 */
  className?: string;
  /** 是否启用动画效果 */
  animated?: boolean;
  /** 是否启用卡片样式 */
  cardStyle?: boolean;
}

const Radio: React.FC<RadioProps> & {
  Group: React.FC<RadioGroupEnhancedProps>;
  Button: typeof AntdRadio.Button;
} = ({ 
  className, 
  animated = true,
  colorTheme = 'primary',
  ...rest 
}) => {
  const cls = classNames(
    'yududesign-radio',
    className,
    {
      'yududesign-radio-animated': animated,
      [`yududesign-radio-${colorTheme}`]: colorTheme !== 'primary',
    }
  );

  return (
    <AntdRadio className={cls} {...rest} />
  );
};

const RadioGroup: React.FC<RadioGroupEnhancedProps> = ({
  className,
  animated = true,
  cardStyle = false,
  children,
  ...rest
}) => {
  const cls = classNames(
    'yududesign-radio-group',
    className,
    {
      'yududesign-radio-group-animated': animated,
      'yududesign-radio-group-card': cardStyle,
    }
  );

  return (
    <AntdRadio.Group className={cls} {...rest}>
      {children}
    </AntdRadio.Group>
  );
};

Radio.Group = RadioGroup;
Radio.Button = AntdRadio.Button;

export { Radio };
export default Radio;
