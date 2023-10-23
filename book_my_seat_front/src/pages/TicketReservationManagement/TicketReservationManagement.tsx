import React, { useEffect, useState } from 'react'
import { AppLayout } from '../../templates'
import { Grid } from '@mui/material'
import BudgetGraph from '../../components/Shared/RequestBudgetGraph/BudgetGraph'
import TicketSummaryChart from '../../components/TicketSummaryChart/TicketSummaryChart'
import { TicketReservationManagementGrid } from '../../components/TicketReservationManagement'
import dayjs from 'dayjs'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { APP_ACTION_STATUS, APP_ROUTES, APP_TABLE_CONFIGS, TRAIN_SCREEN_MODES, } from '../../utilities/constants'
import { ApplicationStateDto, SortMetaDto, TicketReservationDetailsDto } from '../../utilities/models'
import { travelerDto } from '../../utilities/models/travellor.model'
import { TicketAction } from '../../redux/action/ticket.action'
import ConfirmationDialog from '../../components/Shared/ConfirmationDialog/ConfirmationDialog'

const TicketReservationManagement = () => {
  const INITIAL_SORT_META: SortMetaDto = {
    field: "",
    asc: false,
  }
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(APP_TABLE_CONFIGS.DEFAULT_ROWS_PER_PAGE)
  const [sortMeta, setSortMeta] = useState<SortMetaDto>(INITIAL_SORT_META);
  const [filteredList, setFilteredList] = useState<TicketReservationDetailsDto  []>([])
  const [isFiltered, setIsFiltered] = useState(false)
  const [isOpenConfirmationDialog, setisOpenConfirmationDialog] = useState(false);
  const GetBookingDetails = useSelector((state: ApplicationStateDto) => state.ticket.getAllBookings);

   useEffect(() => {
 getInitialData()
   }, [])
   

const getInitialData=() =>{
  dispatch(TicketAction.getAllBookingDetails())
  dispatch(TicketAction.addBookingsClear())
  }

useEffect(() => {
 
  if(GetBookingDetails.status===APP_ACTION_STATUS.SUCCESS){
    setFilteredList(GetBookingDetails.data)
  }
}, [GetBookingDetails.status])



  const handleChangePage = (event: unknown, newPage: number) => {
    // getRequestList(rowsPerPage, newPage + 1)
    setPage(newPage)
  }
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value)
    // getRequestList(+event.target.value, 1)
    setPage(0)
  }


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
    setFilteredList(filteredList)
  }

  const handleAction =(id:string,type:string)=>{
    if(type===TRAIN_SCREEN_MODES.DELETE){
      sessionStorage.setItem("id", id)
      setisOpenConfirmationDialog(true)
    }else{
      sessionStorage.setItem("Mode",type);
      sessionStorage.setItem("id", id);
      navigate(APP_ROUTES.BOOK_TICKET)
    }
  }
  
  const handeCancle = (con: boolean) => {
    if(con){
      const _id = sessionStorage.getItem("id");
      if(_id){
        dispatch(TicketAction.cancleBookings(_id));
      }
    }
    setisOpenConfirmationDialog(false)
  };
  return (
    <React.Fragment>
    <AppLayout componentTitle="Traveler Management">
      <section className='page-root'>
      <Grid container spacing={4}>

     <Grid item md={6}>
     <BudgetGraph/>
     </Grid>
     <Grid item md={6}>
     <TicketSummaryChart/>
     </Grid>
     </Grid>

  <TicketReservationManagementGrid 
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
    handleAction={handleAction}
          />
<ConfirmationDialog
       isOpenConfirmationDialog={isOpenConfirmationDialog}
       onCallback={handeCancle}
       title="Cancele Booking"
       content="Do you want to Cancel this Booking ?"
        />
      </section>
    </AppLayout>
  </React.Fragment>
  )
}

export default TicketReservationManagement