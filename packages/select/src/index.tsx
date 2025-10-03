import React from 'react';
import { Select as AntdSelect } from 'antd';
import type { SelectProps as AntdSelectProps } from 'antd';
import classNames from 'classnames';
import './style.css';

export interface SelectProps extends AntdSelectProps {
  /** 自定义样式类名 */
  className?: string;
  /** 是否显示选项计数 */
  showOptionCount?: boolean;
  /** 是否显示选中项标签 */
  taggedMode?: boolean;
  /** 是否显示边框动画效果 */
  borderAnimation?: boolean;
}

const Select: React.FC<SelectProps> = ({ 
  className, 
  showOptionCount = false,
  taggedMode = false,
  borderAnimation = false,
  children,
  ...rest 
}) => {
  const cls = classNames(
    className,
    {
      'yududesign-select-option-count': showOptionCount,
      'yududesign-select-tagged': taggedMode,
      'yududesign-select-border-animation': borderAnimation,
    }
  );

  const optionCount = React.Children.count(children);

  return (
    <div className="yududesign-select-wrapper">
      <AntdSelect 
        className={cls} 
        mode={taggedMode ? 'tags' : rest.mode}
        {...rest}
      >
        {children}
      </AntdSelect>
      {showOptionCount && (
        <span className="yududesign-select-count">
          {optionCount} 个选项
        </span>
      )}
    </div>
  );
};

export { Select };
export default Select;
