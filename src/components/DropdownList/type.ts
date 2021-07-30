import { PopoverProps } from 'tea-component';

export interface ListProps {
  /** text文本 */
  text?: string;
  /** value */
  value?: any;
  /** 是否不可点击 */
  disabled?: boolean;
  /** hover显示的title */
  title?: string;
  /** 子节点 */
  children?: Array<ListProps>;
}

export type ListsProps = ListProps[];

export interface StyledProps {
  /** 组件自定义类名 */
  className?: string;
  /** 组件自定义样式 */
  style?: React.CSSProperties;
}

export interface DropdownListProps extends StyledProps {
  /** 下拉菜单配置 */
  options: ListsProps;
  /** value */
  value: string | number;
  /** click事件回调 */
  onChange: (val: string | number, value: any) => void;
  /** 大小 @default "m", s = 150, m = 180, l = 210 */
  size: 's' | 'm' | 'l';
  /** placeholder */
  placeholder?: string;
  /**
   * 下拉按钮类型
   * @default "default"
   * */
  type?: 'default' | 'button';
  /** 触发方式 */
  trigger?: 'hover' | 'click';
  /**
   * 菜单弹出位置
   * @default "bottom"
   * */
  placement?: PopoverProps['placement'];
  /** 弹出位置偏离参考位置的位移 */
  placementOffset?: PopoverProps['placementOffset'];
  /** 是否禁用 */
  disabled?: boolean;
  /** 下拉菜单样式 */
  menuStyle?: React.CSSProperties;
  /** 点击item触发回调 */
  onClick?: (item: ListProps) => void;
  /** 弹出区域尺寸（宽度）是否同步按钮尺寸 @default true */
  boxSizeSync?: boolean;
  /** 是否在父容器滚动时关闭 @default true */
  closeOnScroll?: boolean;
  /** children hover 显示延迟时间 */
  hoverDelay?: number;
  /** 是否在选择到最后一级才触发onChange */
  selectStrictly?: boolean;
}

export type SubMenuProps = Pick<
  DropdownListProps,
  | 'options'
  | 'onClick'
  | 'value'
  | 'style'
  | 'className'
  | 'size'
  | 'boxSizeSync'
  | 'hoverDelay'
>;

export type MenuItemProps = Pick<
  DropdownListProps,
  'onClick' | 'value' | 'size' | 'boxSizeSync' | 'hoverDelay' | 'options'
> & { menuItem: ListProps };
