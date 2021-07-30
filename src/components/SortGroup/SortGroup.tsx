import React, { useCallback, useEffect, useState } from 'react';
import classnames from 'classnames';
import { CLASSPREFIX, SORTGROUP } from '@/constants/component';
import { IChangeArg, SortItem } from '../SortItem';
import './index.less';

export interface OptionsProps {
  name: string; // 展示名称
  value: string; // 字段名称
  disabled?: boolean;
}

// 接口传参需要的格式
export interface ValueProps {
  Name: string; // 展示名称
  OrderBy: string; // 字段名称
}

export interface SortGroupProps {
  value?: ValueProps[];
  options: OptionsProps[];
  multiple?: boolean; // 是否多选
  disabled?: boolean;
  onChange: (arg: ValueProps | ValueProps[]) => void;
  className?: string;
  onItemClick?: (arg: IChangeArg) => void;
}

export default function SortGroup(props: SortGroupProps) {
  const {
    options,
    value,
    multiple = false,
    onChange,
    className,
    disabled,
    onItemClick,
  } = props;
  const [currentValue, setCurrentValue] = useState<any>();

  // 将传过来的数组[{ Name:'',OrderBy:'' }]转化为需要的对象{ [Name]: OrderBy }
  const formatValue = useCallback(() => {
    const obj = {};
    value
      ?.filter((item) => item.OrderBy)
      ?.map((item) => (obj[item.Name] = item.OrderBy));
    value && setCurrentValue(obj);
  }, [value]);

  useEffect(() => {
    value && formatValue();
  }, [formatValue, value]);

  // 将 对象 转化为 接口需要的 数组对象
  const formatToArray = (obj: any) => {
    const arr: ValueProps[] = [];
    Object.keys(obj).forEach((key) => {
      arr.push({ Name: key, OrderBy: obj[key] });
    });
    return arr;
  };

  return (
    <div className={classnames(`${CLASSPREFIX}-${SORTGROUP}`, className)}>
      {options.map((item) => (
        <SortItem
          key={item.value}
          name={item.name}
          by={item.value}
          disabled={!!disabled || !!item.disabled}
          value={currentValue?.[item.value]}
          onChange={({ by: Name, order: OrderBy }) => {
            if (disabled) return;
            onItemClick?.({ by: Name, order: OrderBy });
            const newValue = multiple
              ? { ...currentValue, [Name]: OrderBy }
              : { [Name]: OrderBy };
            const sorts = formatToArray(newValue);
            setCurrentValue(newValue);
            onChange?.(sorts);
          }}
        />
      ))}
    </div>
  );
}
