import React from 'react'
import style from './BoDashboard.module.scss'
import { Typography, Box, TableContainer, Paper, Table, TableHead, TableRow, TableBody, IconButton, Tooltip, TablePagination } from '@mui/material';
import moment from 'moment';
import { StyledTableCell, StyledStatusApproved, StyledStatusRejected, StyledStatusPending, StyledStatusDraft, StyledSwitch } from '../../../assets/theme/theme';
import { APP_ROUTES, APP_TABLE_CONFIGS, TRAIN_SCREEN_MODES } from '../../../utilities/constants';
import { CustomButton, CustomHeaderCell, AppSkeleton } from '../../Shared';
import { SortMetaDto } from '../../../utilities/models';
import { useNavigate } from 'react-router-dom'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { travelerDto } from '../../../utilities/models/travellor.model';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { EditOutlined } from '@mui/icons-material';

const BoDashboardGrid:React.FC<{
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

} >= (props) => {
  const navigate = useNavigate()
  return (
    <section className={style.gridContainer}>
    <div className={style.gridHeader}>
      <Typography
        noWrap
        component="div"
        className={style.gridTitle}
      >
        <h3>Traveler Management</h3>
      </Typography>
      <Box sx={{ flexGrow: 1 }} />
      <div className='layout-row'>
        {props.isFiltered &&
          <CustomButton text='Clear filter' textColor='black' bgColor='#bfbfbf' onClick={props.onClearFilter} />
        }
        <CustomButton text='Create Traveller' onClick={() =>{  sessionStorage.setItem("Mode",TRAIN_SCREEN_MODES.CREATE);
        sessionStorage.setItem("id", ""); navigate(APP_ROUTES.CREATE_TRAVELLER)}} />
      </div>
    </div>

    <TableContainer component={Paper} className={style.grid}>
      <Table className={style.table}>
        <TableHead>
          <TableRow>
            <CustomHeaderCell width={180} id='travellerId' sortable onSort={props.onSortHandle} filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle}>Traveller Id</CustomHeaderCell>
            <CustomHeaderCell width={220} id='firstName' sortable onSort={props.onSortHandle} filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle}>Frist Name</CustomHeaderCell>
            <CustomHeaderCell width={220} id='lastName' sortable onSort={props.onSortHandle} filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle}>Last Name</CustomHeaderCell>
            <CustomHeaderCell width={180} id='email' sortable onSort={props.onSortHandle} >Email</CustomHeaderCell>
            <CustomHeaderCell width={180} id='roleName' sortable onSort={props.onSortHandle} filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle} >Role Name</CustomHeaderCell>
            <CustomHeaderCell width={180} id='status' sortable onSort={props.onSortHandle} filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle}>Status</CustomHeaderCell>
            <CustomHeaderCell width={300} id='contactHome' sortable onSort={props.onSortHandle} filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle} >contact Home</CustomHeaderCell>
            <CustomHeaderCell width={220} id='contactMobile' sortable onSort={props.onSortHandle} filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle}>Contact Mobile</CustomHeaderCell>
            <CustomHeaderCell width={220} id='address' sortable onSort={props.onSortHandle} filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle} >Address</CustomHeaderCell>
            <CustomHeaderCell width={250} id='reservationCount' sortable onSort={props.onSortHandle} filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle} > Total Reservation Count</CustomHeaderCell>
            <CustomHeaderCell width={150} id='createdDate' sortable onSort={props.onSortHandle}  filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle}>Created Date</CustomHeaderCell>
            <CustomHeaderCell width={100} id='actions' >Actions</CustomHeaderCell>
          </TableRow>
        </TableHead>
        {props.requestDataIsLoading && (
          <AppSkeleton numOfRows={APP_TABLE_CONFIGS.DEFAULT_ROWS_PER_PAGE} numOfColumns={21} columnWidth={80} tag="table" />
        )}
        {!props.requestDataIsLoading && props.filteredList.length > 0 &&
          <TableBody>
            {props.filteredList.slice(props.page * props.rowsPerPage, props.page * props.rowsPerPage + props.rowsPerPage).map((req: travelerDto) => (
              <TableRow key={req.travelerId}>
                  <StyledTableCell >{req.travelerId}</StyledTableCell>
                   <StyledTableCell >{req.firstName}</StyledTableCell>
                   <StyledTableCell >{req.lastName}</StyledTableCell>
                   <StyledTableCell >{req.email}</StyledTableCell>
                   <StyledTableCell >{req.roleType.roleName}</StyledTableCell>
                   <StyledTableCell >
                   <StyledSwitch
                           checked={req.isActive}
                           disabled={false}
                           onChange={() => "props.onInputHandleChangeRequestForSomeone('isForSomeone', !_isForSomeone.value)"}/>
                   
                   </StyledTableCell>
                   <StyledTableCell >{req.contactHome}</StyledTableCell>
                   <StyledTableCell >{req.contactMobile}</StyledTableCell>
                   <StyledTableCell >{req.address}</StyledTableCell>
                   <StyledTableCell >{req.totalReservationCount}</StyledTableCell>
                   <StyledTableCell >{req.createdDate}</StyledTableCell>
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

export default BoDashboardGrid