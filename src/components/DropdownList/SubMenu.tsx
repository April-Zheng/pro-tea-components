import React, { memo, useRef } from 'react';
import classNames from 'classnames';
import { CLASSPREFIX, DROPDOWNLIST } from '@/constants/component';
import SubMenuItem from './SubMenuItem';
import { SubMenuProps } from './type';
import './index.scss';

/** 弹出区域*/
export default memo((props: SubMenuProps) => {
  const {
    options,
    onClick,
    value,
    style,
    className,
    size = 'm',
    boxSizeSync = true,
  } = props;
  const ulRef = useRef<HTMLUListElement>(null);
  if (!options.length) return null;

  return (
    <div
      className={classNames(
        `${CLASSPREFIX}-${DROPDOWNLIST}-box`,
        { [`size--${size}`]: boxSizeSync },
        className,
      )}
      style={style}
    >
      <ul
        className={classNames(`${CLASSPREFIX}-${DROPDOWNLIST}-menu`)}
        role="menu"
        ref={ulRef}
      >
        {!!options.length &&
          options.map((item) => (
            <SubMenuItem
              {...props}
              key={item.value}
              menuItem={item}
              onClick={onClick}
              value={value}
              ref={ulRef}
            />
          ))}
      </ul>
    </div>
  );
});
