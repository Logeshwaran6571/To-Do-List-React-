import React from 'react';
import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({item,handleLabel,handleCheck,deletee}) => {
  return (
    <div>
         <li className="item" key={item.id}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheck(item.id)}
            />
            <label 
              onClick={() => handleLabel(item.id)}> {item.item} 
            </label>
            <FaTrashAlt
              className="trash"
              onClick={() => deletee(item.id)}
              role="button"
              tabIndex="0"
              aria-label={`Delete ${item.item}`}
            />
          </li>
    </div>
  )
}

export default LineItem