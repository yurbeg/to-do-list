import BookList from "./components/BookList";
import Headaer from "./components/Header";
import { useEffect, useState } from "react"
import './App.css'
const App = () => {
  const [todo, setTodo] = useState([
    "Name of the Wind",
    "The Wise Man's Feardelete",
    "Kafka on the Shore",
    "The Master and the Margarita",
  ]);
  const [ searchText,setSerchText ] = useState("")
  const [ inputValue, setInputValue ] = useState("");
  const [ searchTodo,setSearchTodo] = useState([]);

  const handleRemoveBook = (id) => {
    setTodo(
      todo.filter((value, i) => {
        return id !== i;
      })
    );
  };
  const addBook = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    setTodo([...todo, inputValue]);
    setInputValue("");
    e.target[1].value = "";
  };
  const handleSearchList = (e) =>{
      setSerchText(e.target.value)
  }
  useEffect(()=>{
     setSearchTodo(todo.filter(value => {
      return value.includes(searchText)
     }))
  },[searchText,todo])
  const changeInput = (e) => {
    setInputValue(e.target.value);
  };
 
  return (
    <div id="divContainer">
      <Headaer handleSearchList = {handleSearchList}/>
      <BookList searchTodo={searchTodo} todo={todo} searchText={searchText} handleRemoveBook={handleRemoveBook} addBook={addBook} changeInput={changeInput}/>
    </div>
  );
};

export default App;
