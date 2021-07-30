import React, { forwardRef, memo, useRef, useState } from 'react';
import { Icon, Tooltip } from 'tea-component';
import classNames from 'classnames';
import { CLASSPREFIX, DROPDOWNLIST } from '@/constants/component';
import useDelay from '@/_utils/use-delay';
import { MenuItemProps } from './type';
import SubMenu from './SubMenu';
import './index.scss';

export default memo(
  forwardRef((props: MenuItemProps, ref: any) => {
    const { menuItem, onClick, value, hoverDelay = 50, options } = props;
    const [visible, setVisible] = useState(false); // li子节点是否可见
    const [top, setTop] = useState(0); // 定位li子节点
    const liRef = useRef<HTMLLIElement>(null); // li子节点
    const delayFn = useDelay();

    const handleMouseEnter = () => {
      if (menuItem.disabled) return;
      if (menuItem.children) {
        // 设置li元素的top
        if (ref.current && liRef.current) {
          let parentTop = ref.current.getBoundingClientRect().top;
          const top = liRef.current.getBoundingClientRect().top;
          setTop(top - parentTop);
        }
      }
      delayFn(() => setVisible(true), hoverDelay);
    };

    const handleMouseLeave = () => {
      if (menuItem.disabled) return;
      delayFn(() => setVisible(false), hoverDelay);
    };

    const handleClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      onClick(menuItem);
    };

    return (
      <li
        className={classNames({
          'is-selected': menuItem.value === value,
          'is-disabled': menuItem.disabled,
          submenu: menuItem.children,
        })}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={(!menuItem.disabled && handleClick) || null}
        ref={liRef}
      >
        <Tooltip title={menuItem.title || menuItem.text}>
          {menuItem.text}
        </Tooltip>
        {menuItem.children && !menuItem.disabled && (
          <>
            {visible && (
              <SubMenu
                {...props}
                options={menuItem.children}
                className={classNames({
                  'is-show': visible,
                  'is-hide': !visible,
                })}
                onClick={onClick}
                style={{ top, left: options.length > 10 ? '92%' : '100%' }}
              />
            )}
            <Icon
              type={'arrowright'}
              className={`${CLASSPREFIX}-${DROPDOWNLIST}-caret`}
            />
          </>
        )}
      </li>
    );
  }),
);
