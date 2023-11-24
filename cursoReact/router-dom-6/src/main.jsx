import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home/index.jsx'
import { About } from './components/About/index.jsx'
import { Menu } from './components/Menu/index.jsx'
import { Posts } from './components/Posts/index.jsx'
import { Redirect } from './components/Redirect/index.jsx'
import { Notfound } from './components/notfound/index.jsx'
import { Post } from './components/Post/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        {/* <Route path='/posts/:id' element={<Posts />}/> */}
        <Route path='/posts' element={<Posts />}>
          <Route path=':id' element={<Post/>}/>
        </ Route>
        <Route path='/posts' element={<Posts />}/>
        <Route path='/redirect' element={<Redirect />}/>
        <Route path='*' element={<Notfound />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
