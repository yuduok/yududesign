import React from 'react';
import { Button as AntdButton } from 'antd';
import type { ButtonProps as AntdButtonProps } from 'antd';
import classNames from 'classnames';
import './style.css';

export interface ButtonProps extends AntdButtonProps {
  /** 自定义样式类名 */
  className?: string;
  /** 是否显示阴影效果 */
  shadow?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  className, 
  shadow = false, 
  children, 
  ...rest 
}) => {
  const cls = classNames(
    className,
    {
      'yududesign-button-shadow': shadow,
    }
  );

  return (
    <AntdButton className={cls} {...rest}>
      {children}
    </AntdButton>
  );
};

export { Button };
export default Button;
export type { ButtonProps };