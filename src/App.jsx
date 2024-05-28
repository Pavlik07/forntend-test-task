import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import BrigadesList from './BrigadesList';
import PagesNav from './PagesNav';
import UserFilter from './UserFilter';

function App() {
  const [allBrigades, setAllBrigades] = useState(JSON.parse(localStorage.getItem('currentBrigadesKey')) || []);
  const [currentBrigades, setCurrentBrigades] = useState(JSON.parse(localStorage.getItem('currentBrigadesKey')) || []);
  
  const [brigadesPerPage, setBrigadesPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);

  const [selectValue, setSelectValue] = useState(JSON.parse(localStorage.getItem('currentSelectKey')) || 'all');
  const [searchInput, setSearchInput] = useState(JSON.parse(localStorage.getItem('currentSearchKey')) || '');

// Variables for Page Navigation
  const totalPages = Math.ceil(currentBrigades ? currentBrigades.length / brigadesPerPage : allBrigades.length / brigadesPerPage);
  const pages = [...Array(totalPages + 1).keys()].slice(1);

  const indexOfLastBrigade = currentPage * brigadesPerPage;
  const indexOfFirstBrigade = indexOfLastBrigade - brigadesPerPage;
  const visibleBrigades = currentBrigades ? currentBrigades.slice(indexOfFirstBrigade, indexOfLastBrigade) : allBrigades.slice(indexOfFirstBrigade, indexOfLastBrigade);

// Local Storage
  useEffect(() => {
    localStorage.setItem('currentBrigadesKey', JSON.stringify(currentBrigades))
    localStorage.setItem('currentSearchKey', JSON.stringify(searchInput))
    localStorage.setItem('currentSelectKey', JSON.stringify(selectValue))
  }, [selectValue, searchInput, currentBrigades])

  return (
    <div className='app'>
      <UserFilter setCurrentPage={setCurrentPage} allBrigades={allBrigades} setCurrentBrigades={setCurrentBrigades} searchInput={searchInput} selectValue={selectValue} setSearchInput={setSearchInput} setSelectValue={setSelectValue}/>
      <BrigadesList visibleBrigades={visibleBrigades} allBrigades={allBrigades} setAllBrigades={setAllBrigades}/>
      <PagesNav pages={pages} totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} currentBrigades={currentBrigades} brigadesPerPage={brigadesPerPage} allBrigades={allBrigades}/>
    </div>
  )
}

export default App