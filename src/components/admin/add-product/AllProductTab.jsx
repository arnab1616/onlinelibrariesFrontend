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
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import { books } from '../../../utility/books';


const columns = [
  { id: 'product', label: 'Product', minWidth: 'fit-content' },
  { id: 'title', label: 'Title', minWidth: 200 },
  { id: 'price', label: 'Price', minWidth: 'fit-content' },
  { id: 'rating', label: 'Rating', minWidth: 'fit-content' },
  { id: 'stock',label: 'Stock',minWidth: 'fit-content',},
  { id: 'sale',label: 'Total sale',minWidth: 'fit-content',},
  { id: 'last-update',label: 'Last update',minWidth: 'fit-content',},
  { id: 'ction',label: 'Action',minWidth: 'fit-content',},
];

export const  AllProductTab = () => {
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
      <Paper sx={{ width: '100%', overflow: 'hidden', mt: 2 }}>
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
              {books
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      <TableCell>
                        <div class="order-thumbnail">
                            <div class="thumbnail-inner" style={{backgroundImage: `url(${row.thumbnail})`, width:'60px', height:'80px'}}></div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div style={{display:'flex', flexDirection:'column', gap:'2px'}}>
                            <span>{row.title.length > 45 ? row.title.slice(0, 45) + '...' : row.title}</span>
                            <span style={{fontSize:'0.8rem', fontWeight:'500', color:'#888'}}>Author: {row.author}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className='order-price'>
                            <CurrencyRupeeIcon color='inherit' fontSize='inherit' />
                            <span>{row.price}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div style={{display:'flex', alignItems:'center', gap:'2px'}}>
                            <StarIcon sx={{color: '#faaf00', fontSize:"18px"}} />{row.rating}
                        </div>
                      </TableCell>
                      
                      <TableCell>25</TableCell>
                      <TableCell>15k</TableCell>
                      <TableCell>12 Jun, 2025</TableCell>
                      <TableCell>
                        <Box sx={{width:'fit-content'}}>
                            <IconButton sx={{fontSize:'1rem'}}><RemoveRedEyeIcon fontSize='inherit' /></IconButton>
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
          count={books.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
