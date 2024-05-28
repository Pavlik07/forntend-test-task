import React from 'react'
import { useEffect } from 'react';

function BrigadesList({visibleBrigades, setAllBrigades}) {

// Getting the API data
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/v1336/frontend-test-task/master/data/data.json')
      .then(response => response.json())
      .then(data => setAllBrigades(data))
      .catch(error => console.log(error))
  },[]);

  return (
    <div>
        <ul className='brigadesList'>
            {visibleBrigades.map(brigade =>
                <li key={brigade.id}>
                    {brigade.brigade_name}: {brigade.department.name}
                </li>
            )}
        </ul>
    </div>
  )
}

export default BrigadesList