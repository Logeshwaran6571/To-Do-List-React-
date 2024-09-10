import React from "react";

import ItemsList from "./ItemsList";

const Content = ({items,handleLabel,handleCheck,deletee}) => {
  
  return (
    <div className="datas">
       {(items.length) ? (
        <ItemsList
            items = {items}
            handleLabel = {handleLabel}
            handleCheck = {handleCheck}
            deletee = {deletee}
        />
       ) : (
        <h2 className="Empty">The List Is Empty</h2>
       )
       }
    </div>
  );
};

export default Content;
