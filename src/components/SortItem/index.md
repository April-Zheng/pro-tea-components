---
title: SortItem
path: /SortItem
group:
  title: '组件'
  path: /components
---

# 排序

### 简单使用

<code src='./demos/SortItem.tsx'></code>

### 禁用

<code src='./demos/SortItemDisabled.tsx'></code>

### 组件属性

| 参数     | 说明     | 类型                                                          | 默认值 |
| :------- | :------- | ------------------------------------------------------------- | :----- |
| name     | 展示名称 | string                                                        | -      |
| by       | 字段名   | string                                                        | -      |
| value    | 字段值   | 'asc' \| 'desc' \| ''                                         | -      |
| disabled | 是否禁用 | boolean                                                       | false  |
| onChange | 回调事件 | (arg: { order: 'asc' \| 'desc' \| '' ; by: string; }) => void | -      |
