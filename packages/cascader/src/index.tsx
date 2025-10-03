import React from 'react';
import { Cascader as AntdCascader } from 'antd';
import type { CascaderProps as AntdCascaderProps } from 'antd';
import classNames from 'classnames';
import './style.css';

export interface CascaderProps extends AntdCascaderProps {
  /** 自定义样式类名 */
  className?: string;
  /** 是否显示清除按钮 */
  allowClear?: boolean;
  /** 是否支持搜索 */
  showSearch?: boolean;
  /** 自定义主题色 */
  theme?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
}

const Cascader: React.FC<CascaderProps> = ({ 
  className, 
  allowClear = true,
  showSearch = false,
  theme = 'default',
  ...rest 
}) => {
  const cls = classNames(
    className,
    'yududesign-cascader',
    {
      [`yududesign-cascader-${theme}`]: theme !== 'default',
    }
  );

  return (
    <AntdCascader 
      className={cls} 
      allowClear={allowClear}
      showSearch={showSearch}
      {...rest}
    />
  );
};

export { Cascader };
export default Cascader;
