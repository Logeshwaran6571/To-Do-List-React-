import React from 'react';
import LineItem from './LineItem';

const ItemsList = ({ items, handleLabel, handleCheck, deletee }) => {
  return (
    <div>
      <ul className="ul">
        {items.map((item) => (
         <LineItem
           item = {item}
           key = {item.id}
           handleLabel = {handleLabel}
           handleCheck = {handleCheck}
           deletee = {deletee}
         />
        ))}
      </ul>
    </div>
  );
}

export default ItemsList;
