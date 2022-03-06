import React from 'react'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'

const columns = [
  { id: 'id', label: 'ID', minWidth: 10 },
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
]

function createData(id, name, code, population, size) {
  const density = population / size
  return { id, name, code, population, size, density }
}

const rows = [
  createData(1, 'India', 'IN', 1324171354, 3287263),
  createData(2, 'China', 'CN', 1403500365, 9596961),
  createData(3, 'Italy', 'IT', 60483973, 301340),
  createData(4, 'United States', 'US', 327167434, 9833520),
  createData(5, 'Canada', 'CA', 37602103, 9984670),
  createData(6, 'Australia', 'AU', 25475400, 7692024),
  createData(7, 'Germany', 'DE', 83019200, 357578),
  createData(8, 'Ireland', 'IE', 4857000, 70273),
  createData(9, 'Mexico', 'MX', 126577691, 1972550),
  createData(10, 'Japan', 'JP', 126317000, 377973),
  createData(11, 'France', 'FR', 67022000, 640679),
  createData(12, 'United Kingdom', 'GB', 67545757, 242495),
  createData(13, 'Russia', 'RU', 146793744, 17098246),
  createData(14, 'Nigeria', 'NG', 200962417, 923768),
  createData(15, 'Brazil', 'BR', 210147125, 8515767),
]

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.primary.main,
    // color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
  },
}))

const StudentsTable = ({ handleStudentDetail }) => {
  const [page, setPage] = React.useState(1)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage = (event, newPage) => {
    console.log(newPage)
    console.log(event)
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    console.log(event.target.value)
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Paper>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead sx={{ bgcolor: '#444890' }}>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  sortDirection='asc'
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    hover
                    role='checkbox'
                    tabIndex={-1}
                    key={row.code}
                    onClick={() => handleStudentDetail(row.id)}
                    sx={{ cursor: 'pointer' }}
                  >
                    {columns.map((column) => {
                      const value = row[column.id]
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default StudentsTable
