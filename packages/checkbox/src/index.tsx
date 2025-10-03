import React from 'react';
import { Checkbox as AntdCheckbox } from 'antd';
import type { CheckboxProps as AntdCheckboxProps } from 'antd';
import classNames from 'classnames';
import './style.css';

export interface CheckboxProps extends AntdCheckboxProps {
  /** 自定义样式类名 */
  className?: string;
  /** 是否显示边框 */
  bordered?: boolean;
  /** 自定义颜色主题 */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
}

const Checkbox: React.FC<CheckboxProps> = ({ 
  className, 
  bordered = false,
  color = 'primary',
  children, 
  ...rest 
}) => {
  const cls = classNames(
    className,
    'yududesign-checkbox',
    {
      'yududesign-checkbox-bordered': bordered,
      [`yududesign-checkbox-${color}`]: color !== 'primary',
    }
  );

  return (
    <AntdCheckbox className={cls} {...rest}>
      {children}
    </AntdCheckbox>
  );
};

export { Checkbox };
export default Checkbox;
