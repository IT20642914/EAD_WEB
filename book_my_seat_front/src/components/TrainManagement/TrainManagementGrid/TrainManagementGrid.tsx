import React from 'react'
import { Typography, Box, TableContainer, Paper, Table, TableHead, TableRow, TableBody, IconButton, Tooltip, TablePagination } from '@mui/material';
import moment from 'moment';
import { StyledTableCell, StyledStatusApproved, StyledStatusRejected, StyledStatusPending, StyledStatusDraft, StyledSwitch } from '../../../assets/theme/theme';
import { APP_ROUTES, APP_TABLE_CONFIGS } from '../../../utilities/constants';
import { CustomButton, CustomHeaderCell, AppSkeleton } from '../../Shared';
import { SortMetaDto } from '../../../utilities/models';
import { useNavigate } from 'react-router-dom'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { travellerDto } from '../../../utilities/models/travellor.model';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { EditOutlined } from '@mui/icons-material';
import style from './TrainManagementGrid.module.scss'
import { trainDetailsGridDto } from '../../../utilities/models/trains.model';
const TrainManagementGrid :React.FC<{
    page: number,
    rowsPerPage: number,
    isFiltered: boolean,
    onHandleChangePage(event: unknown, newPage: number): void,
    onHandleChangeRowsPerPage(event: React.ChangeEvent<HTMLInputElement>): void,
    requestDataIsLoading: boolean,
    filteredList: trainDetailsGridDto[],
    sortMeta: SortMetaDto,
    onSortHandle(col: string): void
    // onShowStatus(id: string): void
    onFilterHandle(col: string, value: any): void;
    getFilterList: (col: string) => string[];
    navigateTo(mode: string, id: string): void;
    onClearFilter(): void;
  
  } >= (props)  => {
    const navigate = useNavigate()
  return (
    <section className={style.gridContainer}>
    <div className={style.gridHeader}>
      <Typography
        noWrap
        component="div"
        className={style.gridTitle}
      >
        <h3>Train Management</h3>
      </Typography>
      <Box sx={{ flexGrow: 1 }} />
      <div className='layout-row'>
        {props.isFiltered &&
          <CustomButton text='Clear filter' textColor='black' bgColor='#bfbfbf' onClick={props.onClearFilter} />
        }
        <CustomButton text='Add Train' onClick={() => navigate(APP_ROUTES.ADD_TRAIN)} />
      </div>
    </div>

    <TableContainer component={Paper} className={style.grid}>
      <Table className={style.table}>
        <TableHead>
          <TableRow>
            <CustomHeaderCell width={180} id='id' sortable onSort={props.onSortHandle} filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle}>Train Id</CustomHeaderCell>
            <CustomHeaderCell width={220} id='name' sortable onSort={props.onSortHandle} filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle}>Train Name</CustomHeaderCell>
            <CustomHeaderCell width={220} id='status' sortable onSort={props.onSortHandle} filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle}>status</CustomHeaderCell>
            <CustomHeaderCell width={180} id='firstClassSeatCount' sortable onSort={props.onSortHandle} >First Class Seat Count</CustomHeaderCell>
            <CustomHeaderCell width={180} id='secondClassSeatCount' sortable onSort={props.onSortHandle} filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle} >Second Class Seat Count</CustomHeaderCell>
            <CustomHeaderCell width={180} id='thirdClassSeatCount' sortable onSort={props.onSortHandle} filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle}>Third Class Seat Count</CustomHeaderCell>
            <CustomHeaderCell width={180} id='action' >Action</CustomHeaderCell>

          </TableRow>
        </TableHead>
        {props.requestDataIsLoading && (
          <AppSkeleton numOfRows={APP_TABLE_CONFIGS.DEFAULT_ROWS_PER_PAGE} numOfColumns={21} columnWidth={80} tag="table" />
        )}
        {!props.requestDataIsLoading && props.filteredList.length > 0 &&
          <TableBody>
            {props.filteredList.slice(props.page * props.rowsPerPage, props.page * props.rowsPerPage + props.rowsPerPage).map((req: trainDetailsGridDto) => (
              <TableRow key={req.id}>
                   <StyledTableCell >{req.id}</StyledTableCell>
                   <StyledTableCell >{req.name}</StyledTableCell>
                   <StyledTableCell >
                   <StyledSwitch
                           checked={req.status}
                           disabled={false}
                           onChange={() => "props.onInputHandleChangeRequestForSomeone('isForSomeone', !_isForSomeone.value)"}/>
                   </StyledTableCell>
                   <StyledTableCell >{req.firstClassSeatCount}</StyledTableCell>
                   <StyledTableCell >{req.secondClassSeatCount}</StyledTableCell>
                   <StyledTableCell >{req.thirdClassSeatCount}</StyledTableCell>
                   
                  <StyledTableCell style={{ backgroundColor: '#282828' }}>

                  <Box className='layout-row'>
                    <Box>
                    <IconButton size='small' onClick={() => {" props.navigateTo(DRIVER_SCREEN_MODES.VIEW, item.id)" }}>
                          <Tooltip title="View">
                            <VisibilityOutlinedIcon sx={{ fontSize: '20px', mr: '-1', color: 'white' }} />
                          </Tooltip>
                        </IconButton>
                      </Box>
                      <Box>
                        <IconButton size='small' onClick={() => { "props.navigateTo(DRIVER_SCREEN_MODES.EDIT, item.id)" }}>
                          <Tooltip title="Edit">
                            <EditOutlined sx={{ fontSize: '20px', mr: '-1', color: 'white' }} />
                          </Tooltip>
                        </IconButton>
                      </Box>
                      <Box>
                        <IconButton size='small' onClick={() => {"props.onSelectDriverForRemove(item.id)"}}>
                          <Tooltip title="Delete">
                            <DeleteOutlinedIcon sx={{ fontSize: '20px', mr: '-1', color: 'white' }} />
                          </Tooltip>
                        </IconButton>
                      </Box>
                  </Box>
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        }
        {!props.requestDataIsLoading && props.filteredList.length === 0 &&
          <TableBody>
            <TableRow>
              <StyledTableCell align="left" colSpan={19}>No data to preview</StyledTableCell>
            </TableRow>
          </TableBody>
        }
      </Table>
    </TableContainer>
    <TablePagination
        rowsPerPageOptions={APP_TABLE_CONFIGS.DEFAULT_ROWS_PER_PAGE_OPTIONS}
        component="div"
        labelRowsPerPage={
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              color: 'white',
            }}
          >
            Items per page
          </div>
        }
        count={props.filteredList.length}
        page={props.page}
        onPageChange={props.onHandleChangePage}
        onRowsPerPageChange={props.onHandleChangeRowsPerPage}
        rowsPerPage={props.rowsPerPage}
        showFirstButton={true}
        showLastButton={true}
        sx={{ backgroundColor: "#282828", color: "white" }}
      />
  </section>
  )
}

export default TrainManagementGrid