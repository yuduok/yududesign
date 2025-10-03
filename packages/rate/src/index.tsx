import React, { useState } from 'react';
import { Rate as AntdRate } from 'antd';
import type { RateProps as AntdRateProps } from 'antd';
import { HeartOutlined, HeartFilled, SmileOutlined, FrownOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import './style.css';

export interface RateProps extends AntdRateProps {
  /** 自定义样式类名 */
  className?: string;
  /** 是否启用动画效果 */
  animated?: boolean;
  /** 颜色主题 */
  colorTheme?: 'star' | 'heart' | 'emoji' | 'custom';
  /** 是否显示描述文字 */
  showText?: boolean;
  /** 自定义描述文字 */
  textMap?: string[];
}

const Rate: React.FC<RateProps> = ({ 
  className, 
  animated = true,
  colorTheme = 'star',
  showText = false,
  textMap = ['很差', '较差', '一般', '较好', '很好'],
  value,
  onChange,
  ...rest 
}) => {
  const [currentValue, setCurrentValue] = useState(value || 0);
  const [hoverValue, setHoverValue] = useState(0);

  const cls = classNames(
    'yududesign-rate',
    className,
    {
      'yududesign-rate-animated': animated,
      [`yududesign-rate-${colorTheme}`]: colorTheme !== 'star',
    }
  );

  const getCharacter = () => {
    switch (colorTheme) {
      case 'heart':
        return { character: <HeartOutlined /> };
      case 'emoji':
        return { 
          character: ({ index }: { index: number }) => {
            return index <= (hoverValue || currentValue) ? <SmileOutlined /> : <FrownOutlined />;
          }
        };
      default:
        return {};
    }
  };

  const handleChange = (val: number) => {
    setCurrentValue(val);
    onChange?.(val);
  };

  const displayText = textMap[Math.ceil((hoverValue || currentValue) - 1)] || '';

  return (
    <div className={cls}>
      <AntdRate 
        value={value || currentValue}
        onChange={handleChange}
        onHoverChange={setHoverValue}
        {...getCharacter()}
        {...rest}
      />
      {showText && (
        <span className="yududesign-rate-text">
          {displayText}
        </span>
      )}
    </div>
  );
};

export { Rate };
export default Rate;
