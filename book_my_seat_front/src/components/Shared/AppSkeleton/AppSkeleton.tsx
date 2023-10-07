import { Grid, Skeleton, TableBody } from '@mui/material'
import React from 'react'
import { StyledCheckBox, StyledTableCell, StyledTableRow } from '../../../assets/theme/theme'
const AppSkeleton: React.FC<{
  numOfRows: number;
  numOfColumns: number;
  columnWidth?: number;
  styles?: number | undefined
  tag: string;
  height?: number;
  stickyFirst?: boolean;
}> = (props) => {
  const columns = []
  if(props.stickyFirst){
    columns.push(
      <StyledTableCell align="center" >
        <StyledCheckBox size="small" />
      </StyledTableCell>
    )
  }
  for (let i = 0; i < props.numOfColumns; i++) {
    columns.push(
      <StyledTableCell key={i} align="center" >
        <Skeleton variant="text" width={props.columnWidth} height={props.height ?? 30} />
      </StyledTableCell>
    )
  }
  const rows = []
  for (let i = 0; i < props.numOfRows; i++) {
    rows.push(
      <StyledTableRow>
        {columns}
      </StyledTableRow>
    )
  }

  const stteper: any[] = []
  for (let i = 0; i < props.numOfColumns * props.numOfRows; i++){
    stteper.push(
      <Grid item xs={12} md={6}>
        <Skeleton variant="text" height={props.height ?? 30} />
      </Grid>
    )
  } 
  return (
    <>
      {props.tag === 'table' &&
        <TableBody>
          {rows}
        </TableBody>}
      {props.tag === 'formField' &&
        <div style={{ width: '100%' }}>
          <Skeleton variant="text" height={props.height ?? 30} />
        </div>}

      {props.tag === 'stepper' && 
        <Grid container spacing={4}>
          {stteper}
        </Grid>
      }
    </>

  )
}

export default AppSkeleton
