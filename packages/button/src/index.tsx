import React, { useRef, useCallback, forwardRef } from 'react';
import { Button as AntdButton } from 'antd';
import type { ButtonProps as AntdButtonProps } from 'antd';
import classNames from 'classnames';
import './style.css';

export interface ButtonProps extends Omit<AntdButtonProps, 'shadow'> {
  /** 自定义样式类名 */
  className?: string;
  /** 阴影效果大小 */
  shadow?: 'none' | 'small' | 'medium' | 'large';
  /** 渐变背景 */
  gradient?: string;
  /** 是否启用点击涟漪效果 */
  ripple?: boolean;
  /** 是否启用脉冲动画（用于吸引注意） */
  pulse?: boolean;
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      className,
      shadow = 'none',
      gradient,
      ripple = false,
      pulse = false,
      children,
      onClick,
      ...rest
    },
    ref
  ) => {
    const buttonRef = useRef<HTMLElement | null>(null);
    const rippleTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLElement>) => {
        if (ripple && buttonRef.current) {
          const rect = buttonRef.current.getBoundingClientRect();
          const size = Math.max(rect.width, rect.height);
          const x = e.clientX - rect.left - size / 2;
          const y = e.clientY - rect.top - size / 2;

          const rippleEl = document.createElement('span');
          rippleEl.className = 'yududesign-button-ripple';
          rippleEl.style.width = rippleEl.style.height = `${size}px`;
          rippleEl.style.left = `${x}px`;
          rippleEl.style.top = `${y}px`;

          buttonRef.current.appendChild(rippleEl);

          if (rippleTimeoutRef.current) {
            clearTimeout(rippleTimeoutRef.current);
          }
          rippleTimeoutRef.current = setTimeout(() => {
            rippleEl.remove();
          }, 600);
        }

        onClick?.(e);
      },
      [ripple, onClick]
    );

    const cls = classNames(
      className,
      'yududesign-button',
      {
        'yududesign-button-shadow-small': shadow === 'small',
        'yududesign-button-shadow-medium': shadow === 'medium',
        'yududesign-button-shadow-large': shadow === 'large',
        'yududesign-button-gradient': gradient,
        'yududesign-button-ripple-enabled': ripple,
        'yududesign-button-pulse': pulse,
      }
    );

    const style: React.CSSProperties = {};
    if (gradient) {
      style.backgroundImage = gradient;
      style.borderColor = 'transparent';
      style.color = '#fff';
    }

    const setRefs = useCallback(
      (node: HTMLElement | null) => {
        buttonRef.current = node;
        if (typeof ref === 'function') {
          ref(node as HTMLButtonElement & HTMLAnchorElement);
        } else if (ref) {
          ref.current = node as HTMLButtonElement & HTMLAnchorElement;
        }
      },
      [ref]
    );

    return (
      <AntdButton
        ref={setRefs as any}
        className={cls}
        style={style}
        onClick={handleClick}
        {...rest}
      >
        {children}
      </AntdButton>
    );
  }
);

Button.displayName = 'Button';

export { Button };
export default Button;
