import React from 'react'
import { sheduleTrainDetailsGridDto } from '../../../utilities/models/trains.model';
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
import style from './SheduleManagemetGrid.module.scss'
import { trainDetailsGridDto } from '../../../utilities/models/trains.model';
const SheduleManagemetGrid: React.FC<{
    page: number,
    rowsPerPage: number,
    isFiltered: boolean,
    onHandleChangePage(event: unknown, newPage: number): void,
    onHandleChangeRowsPerPage(event: React.ChangeEvent<HTMLInputElement>): void,
    requestDataIsLoading: boolean,
    filteredList: sheduleTrainDetailsGridDto[],
    sortMeta: SortMetaDto,
    onSortHandle(col: string): void
    // onShowStatus(id: string): void
    onFilterHandle(col: string, value: any): void;
    getFilterList: (col: string) => string[];
    navigateTo(mode: string, id: string): void;
    onClearFilter(): void;
    handleView(property: string, value:number): void;
}> = (props) => {
    const navigate = useNavigate()
    return (
        <section className={style.gridContainer}>
            <div className={style.gridHeader}>
                <Typography
                    noWrap
                    component="div"
                    className={style.gridTitle}
                >
                    <h3>Train Shedule Details</h3>
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
                            <CustomHeaderCell width={180} id='trainid' sortable onSort={props.onSortHandle} filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle}>Train Id</CustomHeaderCell>
                            <CustomHeaderCell width={180} id='trainName' sortable onSort={props.onSortHandle} filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle}>Train Name</CustomHeaderCell>
                            <CustomHeaderCell width={180} id='startingStation' sortable onSort={props.onSortHandle} filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle}>Starting Station</CustomHeaderCell>
                            <CustomHeaderCell width={220} id='arrivingStation' sortable onSort={props.onSortHandle} filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle}>Arriving Station</CustomHeaderCell>
                            <CustomHeaderCell width={180} id='status' sortable onSort={props.onSortHandle} filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle}>Status</CustomHeaderCell>
                            <CustomHeaderCell width={180} id='schedule'>schedule</CustomHeaderCell>

                            {/* <CustomHeaderCell width={120} id='action'>Action</CustomHeaderCell> */}

                        </TableRow>
                    </TableHead>
                    {props.requestDataIsLoading && (
                        <AppSkeleton numOfRows={APP_TABLE_CONFIGS.DEFAULT_ROWS_PER_PAGE} numOfColumns={21} columnWidth={80} tag="table" />
                    )}
                    {!props.requestDataIsLoading && props.filteredList.length > 0 &&
                        <TableBody>
                            {props.filteredList.slice(props.page * props.rowsPerPage, props.page * props.rowsPerPage + props.rowsPerPage).map((req: sheduleTrainDetailsGridDto,index) => (
                                <TableRow key={index}>
                                    <StyledTableCell >{req.trainId}</StyledTableCell> 
                                    <StyledTableCell >{req.trainName}</StyledTableCell>
                                    <StyledTableCell >{req.departureStation.stationName}</StyledTableCell>
                                    <StyledTableCell >{req.arrivalStation.stationName}</StyledTableCell>
                                    <StyledTableCell >      <StyledSwitch
                           checked={req.isActive}
                           disabled={false}
                           onChange={() => "props.onInputHandleChangeRequestForSomeone('isForSomeone', !_isForSomeone.value)"}/>
                   </StyledTableCell>
                                
                                    <StyledTableCell>
                                    <CustomButton text="View schedule"bgColor="#6e6e6e" onClick={() => props.handleView("schedule", index)} />
                                   </StyledTableCell>
                                   

                                    {/* <StyledTableCell style={{ backgroundColor: '#282828' }}>

                                        <Box className='layout-row'>
                                            <Box>
                                                <IconButton size='small' onClick={() => { " props.navigateTo(DRIVER_SCREEN_MODES.VIEW, item.id)" }}>
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
                                                <IconButton size='small' onClick={() => { "props.onSelectDriverForRemove(item.id)" }}>
                                                    <Tooltip title="Delete">
                                                        <DeleteOutlinedIcon sx={{ fontSize: '20px', mr: '-1', color: 'white' }} />
                                                    </Tooltip>
                                                </IconButton>
                                            </Box>
                                        </Box>
                                    </StyledTableCell> */}
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

export default SheduleManagemetGrid