import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'

import './App.css'
import UserSide from './UserSide'
import AdminSide from './AdminSide'

export default function App() {
  
  return (
    <Router>
      <UserSide/>
      <AdminSide/>
    </Router>
  );
}


