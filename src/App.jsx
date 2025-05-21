import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/home/Home.jsx'
import AnimeList from './pages/anime-list/AnimeList.jsx'
import './App.css'
import News from './pages/news/News.jsx'
import Search from './pages/search/Search.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path='/animelist' element={<AnimeList />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
