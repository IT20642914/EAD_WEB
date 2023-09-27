export interface StateObjectDto<T> {
  [x: string]: any;
  data: T;
  isLoading: boolean;
  error: null;
  status: "initial" | "loading" | "success" | "error" | null;
}
export interface FormFieldDto<V> {
  value: V;
  validator: "text" | "number" | "date" | "object" | "array" | "dates" |"email"| null;
  isRequired: boolean;
  error: string | null;
  disable: boolean;
  readonly: boolean;
  max?: number;
  min?: number;
  charLength?: number[];
}

export interface OptionsDto {
  label: string;
  value: number | string;
}

export interface HeaderCellProps {
  id: string;
  children: React.ReactNode;
  sortable?: boolean;
  filtered?: boolean;
  onSort?: (id: string) => void;
  getFilterList?: (col: string) => string[];
  onFilter?: (field: string, value: any) => void;
  width?: string | number;
  stickyLast?: boolean;
  sortMeta?: SortMetaDto;
}

export interface SortMetaDto {
  field: string;
  asc: boolean;
}
