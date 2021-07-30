import React from 'react';
import classnames from 'classnames';
import { CLASSPREFIX, SORTITEM } from '@/constants/component';
import './index.less';

export enum SortType {
  Asc = 'asc',
  Desc = 'desc',
  Default = '',
}

export type IChangeArg = {
  order: string;
  by: string;
};

export interface SortProps {
  name: string; // 展示名称
  value: string; // 字段值
  by: string; // 字段名称
  disabled?: boolean;
  onChange: (arg: IChangeArg) => void;
}

export default function SortItem(props: SortProps) {
  const { by, name, value, onChange, disabled } = props;

  const getCurrentValue = () => {
    switch (value) {
      case SortType.Desc:
        return SortType.Asc;
      case SortType.Asc:
        return SortType.Default;
      default:
        return SortType.Desc;
    }
  };

  return (
    <div
      className={classnames(`${CLASSPREFIX}-${SORTITEM}`, {
        [`${CLASSPREFIX}-${SORTITEM}__current`]: value && value !== '',
        [`${CLASSPREFIX}-${SORTITEM}__disabled`]: disabled,
      })}
      onClick={() => {
        if (disabled) return;
        const sortValue = getCurrentValue();
        onChange?.({ by, order: sortValue });
      }}
    >
      {name}
      <div>
        <div
          className={classnames(`${CLASSPREFIX}-${SORTITEM}__icon`, {
            [`${CLASSPREFIX}-${SORTITEM}__current`]: value === SortType.Asc,
          })}
        >
          ▲
        </div>
        <div
          className={classnames(`${CLASSPREFIX}-${SORTITEM}__icon`, {
            [`${CLASSPREFIX}-${SORTITEM}__current`]: value === SortType.Desc,
          })}
        >
          ▼
        </div>
      </div>
    </div>
  );
}
