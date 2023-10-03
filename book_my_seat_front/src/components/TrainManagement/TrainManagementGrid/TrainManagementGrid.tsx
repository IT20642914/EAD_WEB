import React from 'react'
import { SortMetaDto } from '../../../utilities/models';

const TrainManagementGrid :React.FC<{
    page: number,
    rowsPerPage: number,
    isFiltered: boolean,
    onHandleChangePage(event: unknown, newPage: number): void,
    onHandleChangeRowsPerPage(event: React.ChangeEvent<HTMLInputElement>): void,
    requestDataIsLoading: boolean,
    filteredList: any,
    sortMeta: SortMetaDto,
    onSortHandle(col: string): void
    // onShowStatus(id: string): void
    onFilterHandle(col: string, value: any): void;
    getFilterList: (col: string) => string[];
    navigateTo(mode: string, id: string): void;
    onClearFilter(): void;
  
  } >= (props)  => {
  return (
    <div>TrainManagementGrid</div>
  )
}

export default TrainManagementGrid