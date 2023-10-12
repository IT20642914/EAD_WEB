import React, { useEffect, useState } from 'react'
import { AppLayout } from '../../templates'
import { BoDashboardGrid } from '../../components/BoDashboard'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { APP_ACTION_STATUS, APP_TABLE_CONFIGS } from '../../utilities/constants'
import { ApplicationStateDto, SortMetaDto } from '../../utilities/models'
import { travelerDto } from '../../utilities/models/travellor.model'
import dayjs from 'dayjs'
import moment from 'moment'
import SummaryChart from '../../components/Shared/RequestSummaryChart/SummaryChart'
import { Grid } from '@mui/material'
import BudgetGraph from '../../components/Shared/RequestBudgetGraph/BudgetGraph'
import { TravelersAction } from '../../redux/action/traveler'

const BoDashboard = () => {
  const INITIAL_SORT_META: SortMetaDto = {
    field: "",
    asc: false,
  }
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(APP_TABLE_CONFIGS.DEFAULT_ROWS_PER_PAGE)
  const [sortMeta, setSortMeta] = useState<SortMetaDto>(INITIAL_SORT_META);
  const [filteredList, setFilteredList] = useState<travelerDto[]>([])
  const [isFiltered, setIsFiltered] = useState(false)
  
  const GetTravelerDetails = useSelector((state: ApplicationStateDto) => state.traveler.getAllTravelers);

  const handleChangePage = (event: unknown, newPage: number) => {
    // getRequestList(rowsPerPage, newPage + 1)
    setPage(newPage)
  }
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value)
    // getRequestList(+event.target.value, 1)
    setPage(0)
  }


  useEffect(() => {
    dispatch(TravelersAction.getAllTravelers())
  }, [])
  

  useEffect(() => {
    
    if(GetTravelerDetails.status===APP_ACTION_STATUS.SUCCESS){
       setFilteredList(GetTravelerDetails.data)
    }
  }, [GetTravelerDetails.status])
  

  const onSortHandle = (col: string) => {
    const sorted = filteredList.sort((_prev: any, _next: any) => {
      const _prevItem = _prev[col];
      const _nextItem = _next[col];

      const prev =
        typeof _prevItem === "string" ? _prevItem.toUpperCase() : _prevItem;
      const next =
        typeof _nextItem === "string" ? _nextItem.toUpperCase() : _nextItem;

      if (prev < next) {
        return -1;
      }

      if (prev > next) {
        return 1;
      }

      return 0;
    });

    if (sortMeta.asc) {
      sorted.reverse();
    }

    setSortMeta((_sort) => ({ field: col, asc: !_sort.asc }));
    setFilteredList(sorted);
  };

  const onFilterHandle = (col: string, value: any) => {
    setIsFiltered(true)
    const filtered = filteredList.filter((item) => {
      const _value = (item as any)[col];
      if (typeof _value === "boolean") {
        return _value ? value === "Yes" : value === "No";
      }
      if(col === "createdDateandTime"){
        const _selectedMin = dayjs(value[0]).format('YYYY-MM-DD HH:mm')
        const _selectedMax = dayjs(value[1]).format('YYYY-MM-DD HH:mm')
        const _targetDate = dayjs(_value).add(330, 'minute').format('YYYY-MM-DD HH:mm')

        return moment(_targetDate).isBetween(_selectedMin, _selectedMax)
      }
      if (col === "departureDateandTime" || col === "returnDateandTime") {
        const _selectedMin = dayjs(value[0]).format('YYYY-MM-DD HH:mm')
        const _selectedMax = dayjs(value[1]).format('YYYY-MM-DD HH:mm')
        const _targetDate = dayjs(_value).format('YYYY-MM-DD HH:mm')

        return moment(_targetDate).isBetween(_selectedMin, _selectedMax)
      }
      if(value === 'N/A') return !_value
      return _value === value;
    });

    setFilteredList(filtered);
  };
  const getFilterList = (col: string): string[] => {
    if (true)
      return filteredList
        .map((item) => {
          const value = (item as any)[col];
          if (typeof value === "boolean") {
            return value ? "Yes" : "No";
          }
          return  value ? value : 'N/A';
        })
        .filter((value, index, array) => array.indexOf(value) === index);
    else
     return []
  };
  const navigteTORequestScreen = (mode: string, id: string) => {
    sessionStorage.setItem('Mode', mode)
    sessionStorage.setItem('id', id)
   // navigate(APP_ROUTES.MANAGE_REQUEST)
  }
  const onClearFilter = () => {
    setIsFiltered(false)
    setFilteredList(GetTravelerDetails.data)
  }
  return (    
  <React.Fragment>
    <AppLayout componentTitle="Traveler Management">
      <section className='page-root'>
      <Grid container spacing={4}>
      <Grid item md={12}>
     <SummaryChart/>
     </Grid>
     {/* <Grid item md={6}>
     <BudgetGraph/>
     </Grid> */}
     </Grid>
  <BoDashboardGrid
    page={page}
    rowsPerPage={rowsPerPage}
    onHandleChangePage={handleChangePage}
    onHandleChangeRowsPerPage={handleChangeRowsPerPage}
    requestDataIsLoading={false}
    filteredList={filteredList || []}
    sortMeta={sortMeta}
    onSortHandle={onSortHandle}
    onFilterHandle={onFilterHandle}
    getFilterList={getFilterList}
    navigateTo={navigteTORequestScreen}
    onClearFilter={onClearFilter}
    isFiltered={isFiltered}
   
  
  />


  </section>
    </AppLayout>
  </React.Fragment>
  )
}

export default BoDashboard