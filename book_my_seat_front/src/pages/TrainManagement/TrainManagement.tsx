import React, { useEffect, useState } from 'react'
import { AppLayout } from '../../templates'
import dayjs from 'dayjs'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { APP_ACTION_STATUS, APP_ROUTES, APP_TABLE_CONFIGS, TRAIN_SCREEN_MODES,  } from '../../utilities/constants'
import { ApplicationStateDto, SortMetaDto } from '../../utilities/models'
import { travelerDto } from '../../utilities/models/travellor.model'
import { TrainManagementGrid } from '../../components/TrainManagement'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Grid, Tab, Box } from '@mui/material'
import { CustomDatePicker, CustomButton } from '../../components/Shared'
import { schedule, sheduleTrainDetailsGridDto, station, trainDetailsGridDto } from '../../utilities/models/trains.model'
import SheduleManagemetGrid from '../../components/TrainManagement/SheduleManagemetGrid/SheduleManagemetGrid'
import ViewShedulePopup from '../../components/TrainManagement/ViewShedulePopup/ViewShedulePopup'
import ViewStationsPopup from '../../components/TrainManagement/ViewStationsPopup/ViewStationsPopup'
import { TrainAction } from '../../redux/action/train.Action'
import ConfirmationDialog from '../../components/Shared/ConfirmationDialog/ConfirmationDialog'
import TrainSummaryChart from '../../components/TarinSummaryChart/TarinSummaryChart'

const TrainManagement = () => {

    const INITIAL_SORT_META: SortMetaDto = {
        field: "",
        asc: false,
      }
      const dispatch = useDispatch()
      const navigate = useNavigate()
      const [page, setPage] = useState(0)
      const [rowsPerPage, setRowsPerPage] = useState(APP_TABLE_CONFIGS.DEFAULT_ROWS_PER_PAGE)
      const [sortMeta, setSortMeta] = useState<SortMetaDto>(INITIAL_SORT_META);
      const [filteredList, setFilteredList] = useState<trainDetailsGridDto[]>([])
      const [isFiltered, setIsFiltered] = useState(false)

      const [page2, setPage2] = useState(0)
      const [rowsPerPage2, setRowsPerPage2] = useState(APP_TABLE_CONFIGS.DEFAULT_ROWS_PER_PAGE)
      const [sortMeta2, setSortMeta2] = useState<SortMetaDto>(INITIAL_SORT_META);
      const [filteredList2, setFilteredList2] = useState<sheduleTrainDetailsGridDto[]>([])
      const [shedule, setShedule] = useState<schedule[]>([])
      const [stationlist, setstationlist] = useState<station[]>([])
      
      const [isFiltered2, setIsFiltered2] = useState(false)
      const [value, setValue] = React.useState(1);
      const [isOpenViewShedulePopup, setisOpenViewShedulePopup] =useState(false);
      const [isOpenViewStationsPopup, setisOpenViewStationsPopup] =useState(false);
      const [isOpenConfirmationDialog, setisOpenConfirmationDialog] = useState(false);
      const GetTrainResponse = useSelector((state: ApplicationStateDto) => state.train.getAllTrainList);
      const DeleteTrainResponse = useSelector((state: ApplicationStateDto) => state.train.deleteTrainDetailsByid);

useEffect(() => {
  dispatch(TrainAction.getAllTrainList())
  dispatch(TrainAction.addTrainDetailsClear())
  dispatch(TrainAction.DeleteTrainByIdCler())
  dispatch(TrainAction.trainEditeByidClear())
}, [])

useEffect(() => {

  if(GetTrainResponse.status===APP_ACTION_STATUS.SUCCESS){
    console.log("GetTrainResponse",GetTrainResponse.data)
    setFilteredList(GetTrainResponse.data)
    setFilteredList2(GetTrainResponse.data)
  }
}, [GetTrainResponse.status])


useEffect(() => {

  if(DeleteTrainResponse.status===APP_ACTION_STATUS.SUCCESS){
    dispatch(TrainAction.getAllTrainList())
  }
}, [DeleteTrainResponse.status])


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
        setFilteredList(GetTrainResponse.data)
      }
/////////////////////////
const handleChangePage2 = (event: unknown, newPage: number) => {
  // getRequestList(rowsPerPage, newPage + 1)
  setPage2(newPage)
}
const handleChangeRowsPerPage2 = (event: React.ChangeEvent<HTMLInputElement>) => {
  setRowsPerPage2(+event.target.value)
  // getRequestList(+event.target.value, 1)
  setPage2(0)
}


const onSortHandle2 = (col: string) => {
  const sorted = filteredList2.sort((_prev: any, _next: any) => {
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

  if (sortMeta2.asc) {
    sorted.reverse();
  }

  setSortMeta2((_sort) => ({ field: col, asc: !_sort.asc }));
  setFilteredList2(sorted);
};

const onFilterHandle2 = (col: string, value: any) => {
  setIsFiltered2(true)
  const filtered = filteredList2.filter((item) => {
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

  setFilteredList2(filtered);
};
const getFilterList2 = (col: string): string[] => {
  if (true)
    return filteredList2
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
const navigteTORequestScreen2 = (mode: string, id: string) => {
  sessionStorage.setItem('Mode', mode)
  sessionStorage.setItem('id', id)
 // navigate(APP_ROUTES.MANAGE_REQUEST)
}
const onClearFilter2 = () => {
  setIsFiltered2(false)
  setFilteredList2(GetTrainResponse.data)
}

const handleView=(property: string, value:number)=>{
console.log("property",property,value)
if(property==="schedule"){

  setShedule(filteredList2[value].trainShedule)
  setisOpenViewShedulePopup(true)
}else{
  setstationlist(filteredList2[value].stations)
  setisOpenViewStationsPopup(true)
}
}

const OnPopUPClose = (property:string) => {
  if(property==="shedule"){
    setisOpenViewShedulePopup(false);
  }else{
    setisOpenViewStationsPopup(false);
    

  }

};

const handleAction =(id:string,type:string)=>{
  if(type===TRAIN_SCREEN_MODES.DELETE){
    sessionStorage.setItem("id", id)
    setisOpenConfirmationDialog(true)
  }else{
    sessionStorage.setItem("Mode",type);
    sessionStorage.setItem("id", id);
    navigate(APP_ROUTES.ADD_TRAIN)
  }
}

   
const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
      };
      const handeDelete = (con: boolean) => {
        if(con){
          const _id = sessionStorage.getItem("id");
          if(_id){
            dispatch(TrainAction.DeleteTrainById(_id));
          }
        }
        setisOpenConfirmationDialog(false)
      };
  return (
    <React.Fragment>
    <AppLayout componentTitle="Train Management">
    <section className='page-root'>

    <TabContext value={value.toString()}>
    <Grid container spacing={2}>
      <Grid item xs={12} md={8} >
          <TabList
            sx={{
              "& .MuiTabs-indicator": {
                display: "none",
              },
            }}
         onChange={handleChange}
            orientation="horizontal"
          >
            <Tab sx={{
                marginBlock: "1rem",
              //  marginTop:"2rem",
               marginLeft: "1.5rem",
                "&.Mui-selected": {
               //   marginLeft: "1.5rem",
                  backgroundColor: "rgba(255, 0, 0, 0.1)",
                  color: "white",
                },
                borderRadius: "0.8rem",
                color: "white",
              }}
              label="Train Details"
              value="1"
            />
            <Tab sx={{
               marginBlock: "0.5rem",
              // marginTop:"2rem",
                 marginLeft: "1.5rem",
                "&.Mui-selected": {
                  marginInline: "1.5rem",
                  backgroundColor: "rgba(255, 0, 0, 0.1)",
                  color: "white",
                },
                borderRadius: "0.8rem",
                color: "white",
              }}
              label="Train shedules Details"
              value="2"
            />
          </TabList>
      
      </Grid>
     
<Grid item xs={12} md={12}>
<TabPanel value="1">
<Grid item xs={12} md={12}>
      <TrainSummaryChart/>
      </Grid>
<TrainManagementGrid
        page={page}
        rowsPerPage={rowsPerPage}
        onHandleChangePage={handleChangePage}
        onHandleChangeRowsPerPage={handleChangeRowsPerPage}
        requestDataIsLoading={GetTrainResponse.isLoading}
        filteredList={filteredList || []}
        sortMeta={sortMeta}
        onSortHandle={onSortHandle}
        onFilterHandle={onFilterHandle}
        getFilterList={getFilterList}
        navigateTo={navigteTORequestScreen}
        onClearFilter={onClearFilter}
        handleAction={handleAction}
        isFiltered={isFiltered}/>

</TabPanel>
  <TabPanel value="2">
  <SheduleManagemetGrid
     handleView={handleView}
     page={page2}
     rowsPerPage={rowsPerPage2}
     onHandleChangePage={handleChangePage2}
     onHandleChangeRowsPerPage={handleChangeRowsPerPage2}
     requestDataIsLoading={GetTrainResponse.isLoading}
     filteredList={filteredList2 || []}
     sortMeta={sortMeta2}
     onSortHandle={onSortHandle2}
     onFilterHandle={onFilterHandle2}
     getFilterList={getFilterList2}
     navigateTo={navigteTORequestScreen2}
     onClearFilter={onClearFilter2}
     isFiltered={isFiltered2}
     />
  
</TabPanel>
</Grid>
</Grid>
</TabContext>

<ViewShedulePopup 
OnPopUPClose={OnPopUPClose}
isOpenViewShedulePopup={isOpenViewShedulePopup}
schedule={shedule}
/>
<ViewStationsPopup
OnPopUPClose={OnPopUPClose}
isOpenViewStationsPopup={isOpenViewStationsPopup}
station={stationlist}
/>
<ConfirmationDialog
       isOpenConfirmationDialog={isOpenConfirmationDialog}
       onCallback={handeDelete}
       title="Remove Item"
       content="Do you want to remove this item ?"
        />
    </section>
    </AppLayout>
  </React.Fragment>
  )
}

export default TrainManagement