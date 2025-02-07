import { TabEnum } from '@/utils/constants';
import { createContext, ReactNode, useCallback, useContext, useState } from 'react';


export interface FilterContext {
    tabSelected:string
    updateFilterValue:(name: string, value: string[] | string  | boolean) => void;
}

const initialFilterState: Omit<
  FilterContext,
  'updateFilterValue'
> = {
    tabSelected:TabEnum.HOME
};

export const FilterContext = createContext<FilterContext>({
  ...initialFilterState,
  updateFilterValue: () => {},
  tabSelected:TabEnum.HOME
});

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
};

export type FilterProviderProps = {
  children: ReactNode;
};

export const FilterProvider = ({ children }: FilterProviderProps) => {
  const [filterState, setFilterState] = useState(initialFilterState);

  const updateFilterValue = useCallback((name: string, value: string[] | string | boolean) => {
    setFilterState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

//   const updateFilterBulkValue = useCallback((payload: { [key: string]: string | string[] | boolean }) => {
//     setFilterState((prevState) => ({
//       ...prevState,
//       ...payload,
//     }));
//   }, []);

  return (
    <FilterContext.Provider
      value={{ ...filterState, updateFilterValue }}
    >
      {children}
    </FilterContext.Provider>
  );
};
