import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {HomePage} from '../page/home/HomePage'
import {DetailPage} from '../page/defail/DetailPage'

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/detail/:id" element={<DetailPage/>}/>
        </Routes>
    )
}

export default Router
