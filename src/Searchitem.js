import React from 'react'

const Searchitem = ({search,setSearch}) => {
  return (
    <div>
        <form action="#" className='searchform' onSubmit={(e)=>e.preventDefault()}>
            <label htmlFor="search">Search</label>
            <input 
                type="text"
                id='search'
                role='searchbox'
                placeholder='Search Items'
                value={search}
                onChange={(e)=> setSearch(e.target.value)}
            />
        </form>
    </div>
  )
}

export default Searchitem