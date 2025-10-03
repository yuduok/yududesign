import React from 'react';
import { Tag as AntdTag } from 'antd';
import type { TagProps as AntdTagProps } from 'antd';
import classNames from 'classnames';
import './style.css';

export interface TagProps extends AntdTagProps {
  /** 自定义样式类名 */
  className?: string;
  /** 是否显示渐变背景 */
  gradient?: boolean;
  /** 是否显示发光效果 */
  glow?: boolean;
  /** 是否显示脉冲动画 */
  pulse?: boolean;
  /** 标签主题 */
  theme?: 'default' | 'success' | 'warning' | 'error' | 'info';
}

const Tag: React.FC<TagProps> = ({ 
  className, 
  gradient = false,
  glow = false,
  pulse = false,
  theme = 'default',
  children,
  ...rest 
}) => {
  const cls = classNames(
    className,
    {
      'yududesign-tag-gradient': gradient,
      'yududesign-tag-glow': glow,
      'yududesign-tag-pulse': pulse,
      [`yududesign-tag-theme-${theme}`]: theme !== 'default',
    }
  );

  return (
    <AntdTag className={cls} {...rest}>
      {children}
    </AntdTag>
  );
};

export { Tag };
export default Tag;
