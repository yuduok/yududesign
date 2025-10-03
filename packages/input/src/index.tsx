import React from 'react';
import { Input as AntdInput } from 'antd';
import type { InputProps as AntdInputProps } from 'antd';
import classNames from 'classnames';
import './style.css';

export interface InputProps extends AntdInputProps {
  /** 自定义样式类名 */
  className?: string;
  /** 是否显示清除按钮增强 */
  clearEnhanced?: boolean;
  /** 是否显示输入计数 */
  showCount?: boolean;
  /** 是否显示边框动画效果 */
  borderAnimation?: boolean;
}

const Input: React.FC<InputProps> = ({ 
  className, 
  clearEnhanced = false,
  borderAnimation = false,
  showCount = false,
  maxLength,
  ...rest 
}) => {
  const cls = classNames(
    className,
    {
      'yududesign-input-clear-enhanced': clearEnhanced,
      'yududesign-input-border-animation': borderAnimation,
    }
  );

  return (
    <AntdInput 
      className={cls} 
      showCount={showCount}
      maxLength={maxLength}
      {...rest}
    />
  );
};

export { Input };
export default Input;
