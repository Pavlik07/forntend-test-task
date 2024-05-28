import React from 'react'
import { useEffect } from 'react'

function UserFilter({setCurrentPage, allBrigades, setCurrentBrigades, searchInput, selectValue, setSearchInput, setSelectValue}) {
// Showing results based on search  
    useEffect(() => {
        if(searchInput !== '' && selectValue === 'working') {
            setCurrentBrigades(allBrigades.filter(brigade => 
                brigade.connection_state === 1 &&
                brigade.department.name.toLowerCase().includes(searchInput.toLowerCase())
        ));
            setCurrentPage(1);
        }
        else if(searchInput !== '' && selectValue === 'notWorking') {
            setCurrentBrigades(allBrigades.filter(brigade => 
                brigade.connection_state === 0 &&
                brigade.department.name.toLowerCase().includes(searchInput.toLowerCase())
        ));
            setCurrentPage(1);
        }
        else if(searchInput === '' && selectValue === 'working') {
            setCurrentBrigades(allBrigades.filter(brigade => 
                brigade.connection_state === 1
        ));
            setCurrentPage(1);
        }
        else if(searchInput === '' && selectValue === 'notWorking') {
            setCurrentBrigades(allBrigades.filter(brigade => 
                brigade.connection_state === 0
        ));
            setCurrentPage(1);
        }
        else if(searchInput === '' && selectValue === 'all') {
            setCurrentBrigades(allBrigades);
            setCurrentPage(1);
        }
        else if(searchInput !== '' && selectValue === 'all') {
            setCurrentBrigades(allBrigades.filter(brigade =>
                brigade.department.name.toLowerCase().includes(searchInput.toLowerCase())
        ))
            setCurrentPage(1);
        }
    }, [searchInput, selectValue, allBrigades]);
 
// Setting search and select based on user input  
  function searchInputChange (e) {
    e.preventDefault();
    setSearchInput(e.target.value);
  }
  function filterByChange (e) {
    e.preventDefault();
    setSelectValue(e.target.value);
  }

    return (
        <div>
            Поиск:
            <input name='userSearchFilter' className='searchInput' placeholder='Введите название Подразделения' value={searchInput} onChange={searchInputChange}></input>
            <select name='userSelectFilter' onChange={filterByChange} defaultValue={JSON.parse(localStorage.getItem('currentSelectKey')) || 'all'}>
                <option name='all' value='all'>Все</option>
                <option name='working' value='working'>Работающие</option>
                <option name='notWorking' value='notWorking'>Прекратили работу</option>
            </select>
        </div>
    )
}

export default UserFilter