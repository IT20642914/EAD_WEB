import { Box, IconButton, Paper, Table, TableBody, TableContainer, TableHead, TablePagination, TableRow, Tooltip, Typography } from '@mui/material';
import React from 'react'
import { APP_ROUTES, APP_TABLE_CONFIGS, TRAIN_SCREEN_MODES } from '../../../utilities/constants';
import { SortMetaDto, TicketReservationDetailsDto } from '../../../utilities/models';
import style from './TicketReservationManagementGrid.module.scss'
import { StyledTableCell, StyledSwitch } from '../../../assets/theme/theme';
import { travelerDto } from '../../../utilities/models/travellor.model';
import { CustomButton, CustomHeaderCell, AppSkeleton } from '../../Shared';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { EditOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
const TicketReservationManagementGrid:React.FC<{
    page: number,
    rowsPerPage: number,
    isFiltered: boolean,
    onHandleChangePage(event: unknown, newPage: number): void,
    onHandleChangeRowsPerPage(event: React.ChangeEvent<HTMLInputElement>): void,
    requestDataIsLoading: boolean,
    filteredList: TicketReservationDetailsDto[],
    sortMeta: SortMetaDto,
    onSortHandle(col: string): void
    // onShowStatus(id: string): void
    onFilterHandle(col: string, value: any): void;
    getFilterList: (col: string) => string[];
    navigateTo(mode: string, id: string): void;
    onClearFilter(): void;
  
  }> =(props) => {
    const navigate = useNavigate()
  return (
    <section className={style.gridContainer}>
    <div className={style.gridHeader}>
      <Typography
        noWrap
        component="div"
        className={style.gridTitle}
      >
        <h3>Ticket Booking Management</h3>
      </Typography>
      <Box sx={{ flexGrow: 1 }} />
      <div className='layout-row'>
        {props.isFiltered &&
          <CustomButton text='Clear filter' textColor='black' bgColor='#bfbfbf' onClick={props.onClearFilter} />
        }
        <CustomButton text='Book Tickets' onClick={() => { sessionStorage.setItem("Mode",TRAIN_SCREEN_MODES.CREATE);
        sessionStorage.setItem("id", ""); navigate(APP_ROUTES.BOOK_TICKET)}} />
      </div>
    </div>

    <TableContainer component={Paper} className={style.grid}>
      <Table className={style.table}>
        <TableHead>
          <TableRow>
            <CustomHeaderCell width={180} id='reservationID' sortable onSort={props.onSortHandle} filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle}>reservation ID</CustomHeaderCell>
            <CustomHeaderCell width={220} id='referenceID' sortable onSort={props.onSortHandle} filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle}>Reference ID</CustomHeaderCell>
            <CustomHeaderCell width={220} id='ReserverNationalID' sortable onSort={props.onSortHandle} filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle}>Reserved  Persons National Identity Card</CustomHeaderCell>
            <CustomHeaderCell width={180} id='ReservedPesonName' sortable onSort={props.onSortHandle} >Reserved Peson Name</CustomHeaderCell>
            <CustomHeaderCell width={180} id='trainName' sortable onSort={props.onSortHandle} filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle} >Train Name</CustomHeaderCell>
            <CustomHeaderCell width={180} id='TicketType' sortable onSort={props.onSortHandle} filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle}>Ticket Type</CustomHeaderCell>
            <CustomHeaderCell width={300} id='depatureFrom' sortable onSort={props.onSortHandle} filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle} >Depature From</CustomHeaderCell>
            <CustomHeaderCell width={220} id='depatureFromDateandTime' sortable onSort={props.onSortHandle} filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle}>Depature Date And Time</CustomHeaderCell>
            <CustomHeaderCell width={220} id='arriveTo' sortable onSort={props.onSortHandle} filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle} >arriveTo</CustomHeaderCell>
            <CustomHeaderCell width={250} id='arriveDateAndTime' sortable onSort={props.onSortHandle} filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle} > Arrive Date And Time</CustomHeaderCell>
            <CustomHeaderCell width={150} id='ticketCount' sortable onSort={props.onSortHandle}  filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle}> Ticket Count</CustomHeaderCell>
            <CustomHeaderCell width={150} id='totalPrice' sortable onSort={props.onSortHandle}  filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle}> Total Price</CustomHeaderCell>
            <CustomHeaderCell width={100} id='actions' >Actions</CustomHeaderCell>
          </TableRow>
        </TableHead>
        {props.requestDataIsLoading && (
          <AppSkeleton numOfRows={APP_TABLE_CONFIGS.DEFAULT_ROWS_PER_PAGE} numOfColumns={21} columnWidth={80} tag="table" />
        )}
        {!props.requestDataIsLoading && props.filteredList.length > 0 &&
          <TableBody>
            {props.filteredList.slice(props.page * props.rowsPerPage, props.page * props.rowsPerPage + props.rowsPerPage).map((req: TicketReservationDetailsDto) => (
              <TableRow key={req.reservationID}>
                  <StyledTableCell >{req.reservationID}</StyledTableCell>
                   <StyledTableCell >{req.referenceID  }</StyledTableCell>
                   <StyledTableCell >{req.ReserverNationalID  }</StyledTableCell>
                   <StyledTableCell >{req.ReservedPesonName}</StyledTableCell>
                   <StyledTableCell >{req.trainName}</StyledTableCell>
                   <StyledTableCell >{req.TicketType.ticketTypeName}</StyledTableCell>
                   <StyledTableCell >{req.depatureFrom}</StyledTableCell>
                   <StyledTableCell >{req.depatureFromDateandTime}</StyledTableCell>           
                   <StyledTableCell >{req.arriveTo}</StyledTableCell>
                   <StyledTableCell >{req.arriveDateAndTime}</StyledTableCell>
                   <StyledTableCell >{req.ticketCount}</StyledTableCell>
                   <StyledTableCell >{req.totalPrice}</StyledTableCell>

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

export default TicketReservationManagementGrid