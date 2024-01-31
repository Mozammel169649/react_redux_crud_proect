import React from 'react'
import Home from '../../component/Home.'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Create from '../../component/Create';

function Index() {

    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/> 
          </Routes>
          <Routes>
            <Route path="/create" element={<Create/>}/> 
          </Routes>
        </BrowserRouter>
      );
}

export default Index