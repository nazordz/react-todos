import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Layout from '@/App'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import DescriptionIcon from '@mui/icons-material/Description';
import ReceiptIcon from '@mui/icons-material/Receipt';
import HomeIcon from '@mui/icons-material/Home';

const Home = React.lazy(() => import('@/routes/Home'))
const Invoice = React.lazy(() => import('@/routes/Invoices'))
const Expense = React.lazy(() => import('@/routes/Expenses'))

export const menus = [
  {
    name: 'home',
    url: '/',
    icon: <HomeIcon />,
    label: 'Home'
  },
  {
    name: 'invoice',
    url: '/invoices',
    icon: <DescriptionIcon />,
    label: 'Invoices'
  },
  {
    name: 'expense',
    url: 'expenses',
    icon: <ReceiptIcon />,
    label: 'Expenses'
  },
]

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/invoices" element={<Invoice />}/>
          <Route path="/expenses" element={<Expense />}/>
          <Route path="*" element={
            <Box display="flex" justifyContent="center">
              <Typography variant="h3">404 - NOT FOUND</Typography>
            </Box>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
