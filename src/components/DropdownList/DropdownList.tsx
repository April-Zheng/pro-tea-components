import React, { useState, useCallback, forwardRef, useMemo } from 'react';
import classNames from 'classnames';
import { Icon, Tooltip, Popover } from 'tea-component';
import { CLASSPREFIX, DROPDOWNLIST } from '@/constants/component';
import { DropdownListProps, ListsProps } from './type';
import SubMenu from './SubMenu';
import './index.less';
/** 多层级下拉框 */
const DropdownList = forwardRef((props: DropdownListProps, ref) => {
  const {
    disabled,
    placeholder = '未选择数据',
    options,
    value,
    onChange,
    className,
    type,
    style = {},
    menuStyle,
    trigger = 'click',
    placement = 'bottom-start',
    placementOffset = 5,
    size = 'm',
    closeOnScroll = true,
    selectStrictly = false,
  } = props;
  const [visible, setVisible] = useState(false);

  /** 获取当前value所对应text */
  const text = useMemo(() => {
    let title = placeholder;
    const listRecursion = (options: ListsProps, value: any) => {
      for (const item of options) {
        if (item.value === value) return item.text;
        if (Array.isArray(item.children)) {
          title = listRecursion(item.children, value);
        }
      }
      return title;
    };
    return listRecursion(options, value);
  }, [options, value, placeholder]);

  const handleClick = useCallback(
    (val: any) => {
      setVisible(false);
      if (selectStrictly) {
        !val?.children?.length && onChange(val.value, val);
        return;
      }
      onChange(val.value, val);
    },
    [value, options],
  );

  return (
    <div
      // @ts-ignore
      ref={ref}
      className={classNames(`${CLASSPREFIX}-${DROPDOWNLIST}`, {
        [`${CLASSPREFIX}-${DROPDOWNLIST}-btn`]: type === 'button',
        [`size--${size}`]: size,
        'is-disabled': disabled,
        [className]: className,
      })}
      style={style || {}}
    >
      <Popover
        trigger={trigger}
        visible={!disabled && visible}
        onVisibleChange={!disabled && ((visible) => setVisible(visible))}
        placement={placement}
        placementOffset={placementOffset}
        closeOnScroll={closeOnScroll}
        overlay={
          <SubMenu
            {...props}
            options={options}
            onClick={!disabled && handleClick}
            value={value}
            style={menuStyle || {}}
          />
        }
      >
        <div className={`${CLASSPREFIX}-${DROPDOWNLIST}__header`}>
          <div className={`${CLASSPREFIX}-${DROPDOWNLIST}__value`}>
            <Tooltip title={text}>{text}</Tooltip>
          </div>
          <Icon
            type={visible ? 'arrowup' : 'arrowdown'}
            className={`${CLASSPREFIX}-${DROPDOWNLIST}-caret`}
          />
        </div>
      </Popover>
    </div>
  );
});

export default DropdownList;
