import React, { useState } from 'react';
import { SortItem } from 'pro-tea-components';

export default () => {
  const [value, setValue] = useState('');
  return (
    <SortItem
      name="发布时间"
      by="submit_date"
      value={value}
      onChange={({ order }: any) => {
        setValue(order);
      }}
    />
  );
};
