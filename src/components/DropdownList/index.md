---
title: DropdownList
path: /DropdownList
group:
  title: '组件'
  path: /components
---

### 简单使用

```tsx
import { DropdownList } from 'pro-tea-components';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(null);

  const treeList = [
    {
      text: 'list-1',
      value: '1',
      children: [
        {
          text: 'list-1-1',
          value: '1001',
          children: [
            { text: 'list-1-1-1', value: '1001001' },
            { text: 'list-1-1-2', value: '1001002' },
          ],
        },
      ],
    },
    {
      text: 'list-2',
      value: '2',
      children: [
        {
          text: 'list-2-1',
          value: '2001',
          children: [
            { text: 'list-2-1-1', value: '2001001' },
            { text: 'list-2-1-2', value: '2001002' },
            { text: 'list-2-1-3', value: '2001003' },
            { text: 'list-2-1-4', value: '2001004' },
          ],
        },
        {
          text: 'list-2-2',
          value: '2002',
          children: [
            { text: 'list-2-2-1', value: '2002001' },
            { text: 'list-2-2-2', value: '2002002' },
            { text: 'list-2-2-3', value: '2002003' },
            { text: 'list-2-2-4', value: '2002004' },
          ],
        },
      ],
    },
    {
      text: 'list-3',
      value: '3',
      children: [
        {
          text: 'list-3-1',
          value: '3001',
          children: [
            { text: 'list-3-1-1', value: '3001001' },
            { text: 'list-3-1-2', value: '3001002' },
            { text: 'list-3-1-3', value: '3001003' },
          ],
        },
        {
          text: 'list-3-2',
          value: '3002',
          children: [
            { text: 'list-3-2-1', value: '3002001' },
            { text: 'list-3-2-2', value: '3002002' },
            { text: 'list-3-2-3', value: '3002003' },
          ],
        },
        {
          text: 'list-3-3',
          value: '3003',
          children: [
            { text: 'list-3-3-1', value: '3003001' },
            { text: 'list-3-3-2', value: '3003002' },
          ],
        },
        {
          text: 'list-3-4',
          value: '3004',
          children: [{ text: 'list-3-4-1', value: '3004001' }],
        },
      ],
    },
  ];

  return (
    <DropdownList
      className={'tree-select'}
      size={'l'}
      type="button"
      options={treeList || []}
      value={value}
      onChange={(value: string) => {
        setValue(value);
      }}
    />
  );
};
```

### disabled

```tsx
import { DropdownList } from 'pro-tea-components';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('1001001');

  const treeList = [
    {
      text: 'list-1',
      value: '1',
      children: [
        {
          text: 'list-1-1',
          value: '1001',
          children: [
            { text: 'list-1-1-1', value: '1001001' },
            { text: 'list-1-1-2', value: '1001002' },
          ],
        },
      ],
    },
    {
      text: 'list-2',
      value: '2',
      children: [
        {
          text: 'list-2-1',
          value: '2001',
          children: [
            { text: 'list-2-1-1', value: '2001001' },
            { text: 'list-2-1-2', value: '2001002' },
            { text: 'list-2-1-3', value: '2001003' },
            { text: 'list-2-1-4', value: '2001004' },
          ],
        },
        {
          text: 'list-2-2',
          value: '2002',
          children: [
            { text: 'list-2-2-1', value: '2002001' },
            { text: 'list-2-2-2', value: '2002002' },
            { text: 'list-2-2-3', value: '2002003' },
            { text: 'list-2-2-4', value: '2002004' },
          ],
        },
      ],
    },
    {
      text: 'list-3',
      value: '3',
      children: [
        {
          text: 'list-3-1',
          value: '3001',
          children: [
            { text: 'list-3-1-1', value: '3001001' },
            { text: 'list-3-1-2', value: '3001002' },
            { text: 'list-3-1-3', value: '3001003' },
          ],
        },
        {
          text: 'list-3-2',
          value: '3002',
          children: [
            { text: 'list-3-2-1', value: '3002001' },
            { text: 'list-3-2-2', value: '3002002' },
            { text: 'list-3-2-3', value: '3002003' },
          ],
        },
        {
          text: 'list-3-3',
          value: '3003',
          children: [
            { text: 'list-3-3-1', value: '3003001' },
            { text: 'list-3-3-2', value: '3003002' },
          ],
        },
        {
          text: 'list-3-4',
          value: '3004',
          children: [{ text: 'list-3-4-1', value: '3004001' }],
        },
      ],
    },
  ];

  return (
    <DropdownList
      disabled={true}
      className={'tree-select'}
      size={'m'}
      type="button"
      options={treeList || []}
      value={value}
      onChange={(value: string) => {
        setValue(value);
      }}
    />
  );
};
```

### 其他

设置 trigger="hover"，鼠标悬浮时打开下拉框，设置 selectStrictly=true，只有选中最后一级才触发事件回调，设置 type="default"，展示默认样式

```tsx
import { DropdownList } from 'pro-tea-components';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(null);

  const treeList = [
    {
      text: 'list-1',
      value: '1',
    },
    {
      text: 'list-2',
      value: '2',
      children: [
        {
          text: 'list-2-1',
          value: '2001',
          children: [
            { text: 'list-2-1-1', value: '2001001' },
            { text: 'list-2-1-2', value: '2001002' },
            { text: 'list-2-1-3', value: '2001003' },
            { text: 'list-2-1-4', value: '2001004' },
          ],
        },
        {
          text: 'list-2-2',
          value: '2002',
          children: [
            { text: 'list-2-2-1', value: '2002001' },
            { text: 'list-2-2-2', value: '2002002' },
            { text: 'list-2-2-3', value: '2002003' },
            { text: 'list-2-2-4', value: '2002004' },
          ],
        },
      ],
    },
    {
      text: 'list-3',
      value: '3',
      children: [
        {
          text: 'list-3-1',
          value: '3001',
          children: [
            { text: 'list-3-1-1', value: '3001001' },
            { text: 'list-3-1-2', value: '3001002' },
            { text: 'list-3-1-3', value: '3001003' },
          ],
        },
        {
          text: 'list-3-2',
          value: '3002',
          children: [
            { text: 'list-3-2-1', value: '3002001' },
            { text: 'list-3-2-2', value: '3002002' },
            { text: 'list-3-2-3', value: '3002003' },
          ],
        },
        {
          text: 'list-3-3',
          value: '3003',
          children: [
            { text: 'list-3-3-1', value: '3003001' },
            { text: 'list-3-3-2', value: '3003002' },
          ],
        },
        {
          text: 'list-3-4',
          value: '3004',
          children: [{ text: 'list-3-4-1', value: '3004001' }],
        },
      ],
    },
  ];

  return (
    <DropdownList
      className={'tree-select'}
      size={'s'}
      type="default"
      trigger="hover"
      selectStrictly={true}
      options={treeList || []}
      value={value}
      onChange={(value: string) => {
        setValue(value);
      }}
    />
  );
};
```

### 组件属性

| 参数            | 说明                                 | 类型                                                                                           | 默认值     |
| :-------------- | ------------------------------------ | ---------------------------------------------------------------------------------------------- | ---------- |
| options         | 下拉选项                             | [ListProps[]](/components/dropdown-list#下拉选项配置)                                          | -          |
| value           | 选中值                               | string\| number                                                                                | -          |
| onChange        | 点击事件回调                         | (val: string\| number, value: any) => void;                                                    | -          |
| size            | 大小                                 | 's'\| 'm' \| 'l';                                                                              | m          |
| placeholder     | placeholder                          | string                                                                                         | 未选择数据 |
| type            | 下拉按钮类型                         | 'default'\| 'button'                                                                           | default    |
| trigger         | 触发方式                             | 'hover'\| 'click'                                                                              | click      |
| placement       | 菜单弹出位置                         | [PopoverProps['placement']](https://tea-design.github.io/component/popover/PopoverProps)       | bottom     |
| placementOffset | 弹出位置偏离参考位置的位移           | [PopoverProps['placementOffset']](https://tea-design.github.io/component/popover/PopoverProps) | 5          |
| disabled        | 是否禁用                             | boolean                                                                                        | false      |
| menuStyle       | 下拉菜单样式                         | React.CSSProperties;                                                                           | -          |
| onClick         | 点击 item 触发回调                   | (item:[ListProps](/components/dropdown-list#下拉选项配置) ) => void                            | -          |
| boxSizeSync     | 弹出区域尺寸（宽度）是否同步按钮尺寸 | boolean                                                                                        | true       |
| closeOnScroll   | 是否在父容器滚动时关闭               | boolean                                                                                        | true       |
| hoverDelay      | children hover 显示延迟时间          | number                                                                                         | 50         |
| selectStrictly  | 是否在选择到最后一级才触发 onChange  | boolean                                                                                        | false      |

### 下拉选项配置

| 参数     | 说明               | 类型              | 默认值 |
| -------- | ------------------ | ----------------- | ------ |
| text     | 文本               | string            | -      |
| value    | 选项唯一 id        | any               | -      |
| disabled | 是否不可点击       | boolean           | -      |
| title    | hover 显示的 title | string            | -      |
| children | 子节点             | Array\<ListProps> | -      |
