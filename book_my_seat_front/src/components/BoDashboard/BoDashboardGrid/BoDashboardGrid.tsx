import React from 'react'
import style from './BoDashboard.module.scss'
import { Typography, Box, TableContainer, Paper, Table, TableHead, TableRow, TableBody, IconButton, Tooltip, TablePagination } from '@mui/material';
import moment from 'moment';
import { StyledTableCell, StyledStatusApproved, StyledStatusRejected, StyledStatusPending, StyledStatusDraft } from '../../../assets/theme/theme';
import { APP_ROUTES, APP_TABLE_CONFIGS } from '../../../utilities/constants';
import { CustomButton, CustomHeaderCell, AppSkeleton } from '../../Shared';
import { SortMetaDto } from '../../../utilities/models';
import { useNavigate } from 'react-router-dom'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
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
        <h3>Travellor Summary</h3>
      </Typography>
      <Box sx={{ flexGrow: 1 }} />
      <div className='layout-row'>
        {props.isFiltered &&
          <CustomButton text='Clear filter' textColor='black' bgColor='#bfbfbf' onClick={props.onClearFilter} />
        }
        <CustomButton text='Create Traveller' onClick={() => navigate("APP_ROUTES.LM_REQUEST_APPROVAL")} />
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
            <CustomHeaderCell width={180} id='userName' sortable onSort={props.onSortHandle} filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle} >User Name</CustomHeaderCell>
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
            {props.filteredList.map((req: any) => (
              <TableRow key={req.requestId}>
              <StyledTableCell >{!req.recurrentParentId ? 'N/A' : 'R' + req.recurrentParentId}</StyledTableCell>
              <StyledTableCell >{!req.parentRequestId ? 'N/A' : 'R' + req.parentRequestId}</StyledTableCell>
                <StyledTableCell >R{req.requestId}</StyledTableCell>
                <StyledTableCell >{req.requestType}</StyledTableCell>
              
                <StyledTableCell >{req.userName ?? '-'}</StyledTableCell>
                <StyledTableCell >{req.sbuName ?? '-'}</StyledTableCell>
                <StyledTableCell >{req.plantName ?? '-'}</StyledTableCell>
                <StyledTableCell >{req.departmentName ?? '-'}</StyledTableCell>
                <StyledTableCell >{req.travelMode}</StyledTableCell>
                <StyledTableCell >{req.from}</StyledTableCell>
                <StyledTableCell >{req.to}</StyledTableCell>
                <StyledTableCell >{moment(req.departureDateandTime).format(APP_TABLE_CONFIGS.DATE_FORMAT)}</StyledTableCell>
                <StyledTableCell >{moment(req.returnDateandTime).format(APP_TABLE_CONFIGS.DATE_FORMAT)}</StyledTableCell>
                <StyledTableCell >{req.passengerCount}</StyledTableCell>
                <StyledTableCell >{req.preferredVehicle}</StyledTableCell>
                <StyledTableCell >{req.package ? "Yes" : "No"}</StyledTableCell>
                <StyledTableCell >{req.cbm}</StyledTableCell>
                <StyledTableCell >{moment(req.createdDateandTime).add(330, 'minute').format(APP_TABLE_CONFIGS.DATE_FORMAT)}</StyledTableCell>
                <StyledTableCell >{req.createdBy ?? '-'}</StyledTableCell>
                <StyledTableCell >{req.purpose === "" ? '-' : req.purpose}</StyledTableCell>
                <StyledTableCell >{req.projectedCost}</StyledTableCell>
                <StyledTableCell style={{ backgroundColor: '#282828' }}>
                  <Box className='layout-row'>
                    <Box>
                      <IconButton size='small' onClick={() => {
                        
                     
                          }    }>
                        <Tooltip title="View">
                          <RemoveRedEyeOutlinedIcon sx={{ fontSize: '20px', mr: '-1', color: 'white' }} />
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
      count={-1}
      page={props.page}
      onPageChange={props.onHandleChangePage}
      onRowsPerPageChange={props.onHandleChangeRowsPerPage}
      rowsPerPage={props.rowsPerPage}
      nextIconButtonProps={
        { disabled: -1 < props.filteredList.length && props.filteredList.length < props.rowsPerPage }
      }
      sx={{ backgroundColor: "#282828", color: "white" }}
    />
  </section>

  )
}

export default BoDashboardGrid