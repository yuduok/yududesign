import React from 'react';
import { Timeline as AntdTimeline } from 'antd';
import type { TimelineProps as AntdTimelineProps, TimelineItemProps } from 'antd';
import { CheckCircleOutlined, ClockCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import './style.css';

export interface TimelineProps extends AntdTimelineProps {
  /** 自定义样式类名 */
  className?: string;
  /** 是否启用动画效果 */
  animated?: boolean;
  /** 时间轴主题 */
  theme?: 'default' | 'success' | 'process' | 'error';
  /** 是否显示时间 */
  showTime?: boolean;
}

export interface EnhancedTimelineItemProps extends TimelineItemProps {
  /** 状态类型 */
  status?: 'success' | 'process' | 'error' | 'default';
  /** 时间信息 */
  time?: string;
}

const Timeline: React.FC<TimelineProps> & {
  Item: React.FC<EnhancedTimelineItemProps>;
} = ({ 
  className, 
  animated = true,
  theme = 'default',
  showTime = false,
  children,
  ...rest 
}) => {
  const cls = classNames(
    'yududesign-timeline',
    className,
    {
      'yududesign-timeline-animated': animated,
      [`yududesign-timeline-${theme}`]: theme !== 'default',
    }
  );

  return (
    <AntdTimeline className={cls} {...rest}>
      {children}
    </AntdTimeline>
  );
};

const TimelineItem: React.FC<EnhancedTimelineItemProps> = ({
  status = 'default',
  time,
  children,
  dot,
  ...rest
}) => {
  const getDotByStatus = () => {
    if (dot) return dot;
    
    switch (status) {
      case 'success':
        return <CheckCircleOutlined className="yududesign-timeline-icon-success" />;
      case 'process':
        return <ClockCircleOutlined className="yududesign-timeline-icon-process" />;
      case 'error':
        return <CloseCircleOutlined className="yududesign-timeline-icon-error" />;
      default:
        return undefined;
    }
  };

  return (
    <AntdTimeline.Item 
      dot={getDotByStatus()}
      className={`yududesign-timeline-item-${status}`}
      {...rest}
    >
      <div className="yududesign-timeline-content">
        {time && (
          <div className="yududesign-timeline-time">{time}</div>
        )}
        <div className="yududesign-timeline-description">
          {children}
        </div>
      </div>
    </AntdTimeline.Item>
  );
};

Timeline.Item = TimelineItem;

export { Timeline };
export default Timeline;
export type { TimelineProps, EnhancedTimelineItemProps };