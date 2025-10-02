import React from 'react';
import { Switch as AntdSwitch } from 'antd';
import type { SwitchProps as AntdSwitchProps } from 'antd';
import classNames from 'classnames';
import './style.css';

export interface SwitchProps extends AntdSwitchProps {
  /** 自定义样式类名 */
  className?: string;
  /** 是否显示渐变背景 */
  gradient?: boolean;
  /** 是否显示脉冲动画 */
  pulse?: boolean;
  /** 开关状态文本 */
  statusText?: {
    checked: string;
    unchecked: string;
  };
}

const Switch: React.FC<SwitchProps> = ({ 
  className, 
  gradient = false,
  pulse = false,
  statusText,
  checked,
  ...rest 
}) => {
  const cls = classNames(
    className,
    {
      'yududesign-switch-gradient': gradient,
      'yududesign-switch-pulse': pulse,
      'yududesign-switch-with-text': statusText,
    }
  );

  const switchProps = {
    ...rest,
    checked,
    className: cls,
  };

  if (statusText) {
    switchProps.checkedChildren = statusText.checked;
    switchProps.unCheckedChildren = statusText.unchecked;
  }

  return <AntdSwitch {...switchProps} />;
};

export { Switch };
export default Switch;
export type { SwitchProps };