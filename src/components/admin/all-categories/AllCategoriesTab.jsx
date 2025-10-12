import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { categories, subCategories } from '../../../utility/category';
import { Box, Dialog, DialogContent, DialogTitle, FormControl, IconButton, InputLabel, MenuItem, Select } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CloseIcon from '@mui/icons-material/Close';


const columns = [
  { id: 'category', label: 'Category', minWidth: 170 },
  { id: 'sub-category', label: 'Sub category', minWidth: 200 },
  { id: 'sub-sub-category',label: 'Sub sub category',minWidth: 170,},
  { id: 'Action',label: 'Action',minWidth: 100,},
];

export const  AllCategoriesTab = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [open, setOpen] = useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    // align={column.align}
                    sx={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {categories
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      <TableCell>{row.value}</TableCell>
                      <TableCell>
                        <Box sx={{display:'flex', alignItems:'center', gap:'8px'}}>
                          <FormControl sx={{width:'100%',}} size='small'>
                            <InputLabel id="demo-simple-select-label">Select </InputLabel>
                            <Select
                              label={"Select"}
                              sx={{width:'100%', '& .MuiSelect-select': {p: ''}}}
                            >
                              { subCategories?.map((item, i) => {
                                return (
                                  <MenuItem key={i}>{item.value}</MenuItem>
                                )
                              })}
                            </Select>
                          </FormControl>
                          <IconButton title='View sub categories' onClick={() => setOpen(true)}><RemoveRedEyeIcon /></IconButton>
                        </Box>
                      </TableCell>
                      <TableCell>Select sub category to see all sub sub categories <IconButton title='View sub sub categories' onClick={() => setOpen(true)}><RemoveRedEyeIcon /></IconButton></TableCell>
                      <TableCell>
                        <Box>
                          <IconButton sx={{fontSize:'1rem'}}><EditIcon fontSize='inherit'/></IconButton>
                          <IconButton sx={{fontSize:'1rem'}}><DeleteIcon fontSize='inherit'/></IconButton>
                        </Box>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={1}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <Dialog open={open} fullWidth={true} maxWidth={'sm'}>
        <DialogTitle sx={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
          <span>Sub Categories</span>
          <IconButton onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {subCategories?.map((item, i) => {
                  return (
                    <TableRow key={i}>
                      <TableCell>{item.id}</TableCell>
                      <TableCell>{item.value}</TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
      </Dialog>
    </>
  );
}
