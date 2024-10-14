import "./index.css";
const Headaer = (props) => {
  const { handleSearchList } = props
  return (
    <div className="header">
      <h1>library</h1>
      <p>Books for Students</p>
      <form id="search-books">
        <input  onChange={(e)=>{handleSearchList(e)}} type="text" placeholder="Search books..." id="searchBar" />
      </form>
    </div>
  );
};

export default Headaer;
