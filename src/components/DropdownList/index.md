---
title: DropdownList
path: /DropdownList
group:
  title: '组件'
  path: /components
---

# 级联下拉

### 简单使用

<code src="./demos/DropdownList.tsx" />

### disabled

<code src="./demos/DropdownListDisabled.tsx" />

### 其他

设置 trigger="hover"，鼠标悬浮时打开下拉框，设置 selectStrictly=true，只有选中最后一级才触发事件回调，设置 type="default"，展示默认样式

<code src="./demos/DropdownListOthers.tsx" />

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
