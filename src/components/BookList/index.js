import { useState, useEffect } from "react";
import "./index.css";
const BookList = ({
  todo,
  handleRemoveBook,
  addBook,
  changeInput,
  searchTodo,
}) => {

  const [isHide, setIsHide] = useState(true);
  useEffect(() => {}, [todo, isHide]);
  const handleHide = () => {
    setIsHide(!isHide);
  };

  return (
    <div id="book_list">
      <h2>Books to Read</h2>
      {isHide && (
        <ul>
          {(searchTodo.length > 0 ? searchTodo : todo).map((text, i) => {
            return (
              <li key={i}>
                <span className="name">{text}</span>
                <button
                  onClick={() => {
                    handleRemoveBook(i);
                  }}
                  className="delete"
                >
                  delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
      <form className="add-book" onSubmit={(e) => addBook(e)}>
        <input
          onChange={() => {
            handleHide();
          }}
          type="checkbox"
          id="hide"
        />
        <label>Hide all books</label>
        <input
          onChange={(e) => {
            changeInput(e);
          }}
          type="text"
          id="add-form-input"
          placeholder="Add a book..."
        />
        <button id="add-button">Add</button>
      </form>
    </div>
  );
};

export default BookList;
