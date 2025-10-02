import React, { useState } from 'react';
import { InputNumber as AntdInputNumber } from 'antd';
import type { InputNumberProps as AntdInputNumberProps } from 'antd';
import classNames from 'classnames';
import './style.css';

export interface InputNumberProps extends AntdInputNumberProps {
  /** 自定义样式类名 */
  className?: string;
  /** 是否显示清除按钮 */
  allowClear?: boolean;
  /** 是否启用动画效果 */
  animated?: boolean;
  /** 是否显示千分位分隔符 */
  thousandSeparator?: boolean;
  /** 自定义千分位分隔符 */
  separator?: string;
}

const InputNumber: React.FC<InputNumberProps> = ({ 
  className, 
  allowClear = false,
  animated = true,
  thousandSeparator = false,
  separator = ',',
  formatter,
  parser,
  ...rest 
}) => {
  const [focused, setFocused] = useState(false);

  const cls = classNames(
    'yududesign-inputnumber',
    className,
    {
      'yududesign-inputnumber-animated': animated,
      'yududesign-inputnumber-focused': focused,
      'yududesign-inputnumber-separator': thousandSeparator,
    }
  );

  const customFormatter = (value: string | number | undefined) => {
    if (formatter) return formatter(value);
    if (thousandSeparator && value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    }
    return value?.toString();
  };

  const customParser = (value: string | undefined) => {
    if (parser) return parser(value);
    if (thousandSeparator && value) {
      return value.replace(new RegExp(`\\${separator}`, 'g'), '');
    }
    return value;
  };

  return (
    <AntdInputNumber 
      className={cls}
      formatter={customFormatter}
      parser={customParser}
      onFocus={(e) => {
        setFocused(true);
        rest.onFocus?.(e);
      }}
      onBlur={(e) => {
        setFocused(false);
        rest.onBlur?.(e);
      }}
      {...rest}
    />
  );
};

export { InputNumber };
export default InputNumber;
export type { InputNumberProps };