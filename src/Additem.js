import React from 'react'
import { FaPlus } from 'react-icons/fa'

const Additem = ({newItem,setNewItem,handleSubmit}) => {
  return (
    <div>
        <form onSubmit={handleSubmit} className='addform'>
            <label htmlFor="addItem">Add Item</label>
            <input 
                  autoFocus
                  id='addItem'
                  type="text"
                  placeholder='Add Items'
                  required 
                  value={newItem}
                  onChange={(e) => setNewItem (e.target.value)}
            />
            <button
              type='submit'
              aria-label='Add Item'
              className='FaPlus'
            >
                <FaPlus/>
            </button>
        </form>
    </div>
  )
}

export default Additem