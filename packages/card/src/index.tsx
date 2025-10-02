import React from 'react';
import { Card as AntdCard } from 'antd';
import type { CardProps as AntdCardProps } from 'antd';
import classNames from 'classnames';
import './style.css';

export interface CardProps extends AntdCardProps {
  /** 自定义样式类名 */
  className?: string;
  /** 是否显示悬浮效果 */
  hoverable?: boolean;
  /** 是否显示渐变边框 */
  gradientBorder?: boolean;
  /** 是否显示阴影效果 */
  shadow?: 'none' | 'small' | 'medium' | 'large';
  /** 是否可折叠 */
  collapsible?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  className, 
  hoverable = false,
  gradientBorder = false,
  shadow = 'none',
  collapsible = false,
  children,
  ...rest 
}) => {
  const [collapsed, setCollapsed] = React.useState(false);

  const cls = classNames(
    className,
    {
      'yududesign-card-hoverable': hoverable,
      'yududesign-card-gradient-border': gradientBorder,
      'yududesign-card-shadow-small': shadow === 'small',
      'yududesign-card-shadow-medium': shadow === 'medium',
      'yududesign-card-shadow-large': shadow === 'large',
      'yududesign-card-collapsible': collapsible,
      'yududesign-card-collapsed': collapsed,
    }
  );

  const cardProps = {
    ...rest,
    className: cls,
  };

  if (collapsible && rest.title) {
    cardProps.extra = (
      <span 
        className="yududesign-card-collapse-icon"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? '▼' : '▲'}
      </span>
    );
  }

  return (
    <AntdCard {...cardProps}>
      {!collapsed && children}
    </AntdCard>
  );
};

// Add static properties from AntdCard
Card.Meta = AntdCard.Meta;
Card.Grid = AntdCard.Grid;

export { Card };
export default Card;
export type { CardProps };