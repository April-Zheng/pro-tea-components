import { useEffect, useReducer, useRef } from 'react';

type SetParamsType<T> = (
  newParams: Partial<T>,
  type?: ChangeAction<T>['type'],
) => void;
interface ChangeAction<T> {
  type: 'CHANGE' | 'COVER';
  payload: Partial<T>;
}

export default function useParams<T>(
  initialState: T,
  initializer?: (arg: any) => any,
  options = {
    pageIndex: 1,
    pageSize: 10,
  },
): [T, SetParamsType<T>] {
  const paramsReducer = (state: any, action: ChangeAction<any>) => {
    const { payload } = action;
    if (!payload) {
      console.error(`no payload in this action:${action.type}`);
      return;
    }

    switch (action.type) {
      case 'CHANGE':
        if (state.pageSize !== undefined || state.pageIndex !== undefined) {
          // 列表条件改变，但未传pageSize pageIndex, 则默认此时page为options默认值
          if (!payload.pageSize && !payload.pageIndex) {
            payload.pageIndex = options.pageIndex;
            payload.pageSize = options.pageSize;
          }
        }
        return {
          ...state,
          ...payload,
        };
      case 'COVER':
        return {
          ...payload,
        };
      default:
        console.error(`no action called ${action.type}`);
    }
  };

  const [state, dispatch] = useReducer(
    paramsReducer,
    initialState,
    initializer,
  );
  const isMountedRef = useRef(null);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  const setParams: SetParamsType<T> = (newParams, type = 'CHANGE') => {
    if (isMountedRef.current) {
      dispatch({
        type,
        payload: {
          ...newParams,
        },
      });
    }
  };
  return [state, setParams];
}
