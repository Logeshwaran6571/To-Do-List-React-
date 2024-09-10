import React from 'react';
import './footer.css';

const Footer = ({length}) => {

   

  return (
     <footer>{length}  List {length===1 ? "Item" : "items"}</footer>
  )
}

export default Footer