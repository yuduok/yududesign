import React, { useState } from 'react';
import { DatePicker as AntdDatePicker } from 'antd';
import type { DatePickerProps as AntdDatePickerProps, RangePickerProps } from 'antd';
import classNames from 'classnames';
import dayjs from 'dayjs';
import './style.css';

export interface DatePickerProps extends AntdDatePickerProps {
  /** 自定义样式类名 */
  className?: string;
  /** 是否启用快速选择 */
  quickSelect?: boolean;
  /** 是否显示今天按钮 */
  showToday?: boolean;
  /** 是否启用动画效果 */
  animated?: boolean;
}

type DatePickerComponent = React.FC<DatePickerProps> & {
  RangePicker: React.FC<RangePickerProps>;
};

const { RangePicker: AntdRangePicker } = AntdDatePicker;

const DatePicker: DatePickerComponent = ({ 
  className, 
  quickSelect = false,
  showToday = true,
  animated = true,
  ...rest 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const cls = classNames(
    'yududesign-datepicker',
    className,
    {
      'yududesign-datepicker-animated': animated,
      'yududesign-datepicker-quick': quickSelect,
    }
  );

  const renderExtraFooter = () => {
    if (!quickSelect) return null;
    
    return (
      <div className="yududesign-datepicker-quick-select">
        <span 
          onClick={() => rest.onChange?.(dayjs(), '')}
          className="yududesign-datepicker-quick-item"
        >
          今天
        </span>
        <span 
          onClick={() => rest.onChange?.(dayjs().subtract(1, 'day'), '')}
          className="yududesign-datepicker-quick-item"
        >
          昨天
        </span>
        <span 
          onClick={() => rest.onChange?.(dayjs().subtract(1, 'week'), '')}
          className="yududesign-datepicker-quick-item"
        >
          一周前
        </span>
      </div>
    );
  };

  return (
    <AntdDatePicker 
      className={cls}
      renderExtraFooter={quickSelect ? renderExtraFooter : rest.renderExtraFooter}
      showToday={showToday}
      onOpenChange={setIsOpen}
      {...rest}
    />
  );
};

DatePicker.RangePicker = AntdRangePicker as React.FC<RangePickerProps>;

export { DatePicker };
export default DatePicker;
