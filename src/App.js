import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";
import Additem from "./Additem";
import Searchitem from "./Searchitem";

function App() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('To-do List')));

// controlled Inputs
  const [newItem,setNewItem] = useState('');
  const [search,setSearch] = useState('');

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id +1 : 1 ;
    const addNewItem = {id, checked : false, item}
    const listItems = [...items, addNewItem ]
    setItems(listItems)
    localStorage.setItem("To-do List",JSON.stringify(listItems))
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item)
    setItems(listItems)
    localStorage.setItem("To-do List",JSON.stringify(listItems))
  };

  const deletee = (id) => {
    const listItems = items.filter((item) =>item.id!==id)
    setItems(listItems)
    localStorage.setItem("To-do List",JSON.stringify(listItems))

  };

  const handleLabel = (id) => {
    handleCheck(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItem) return;
    console.log(newItem)
    //adding items 
    addItem(newItem)
    //empty input after sumbit
    setNewItem('');
  }


  return (
    <div className="App">
      <Header title="To-Do List"/>
      
      <Additem
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}  
      /> 
      <Searchitem
        search = {search}
        setSearch = {setSearch}
      />
      <Content 
        items = {items.filter(item =>((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleLabel = {handleLabel}
        handleCheck = {handleCheck}
        deletee = {deletee}
      />
      
      {/* <UseState/> */}
      <Footer 
      length = {items.length}
      />
    </div>
  );
}

export default App;
