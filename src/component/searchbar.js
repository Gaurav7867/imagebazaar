const SearchBar=({onChangeText,onSearch,isLoading})=>{
return <div className="search-bar">
    <div className="inner-container">
    <input placeholder="Search For Images..."onChange={onChangeText}/>
    <button onClick={onSearch} disabled={isLoading}>Search</button>
    </div>
</div>
}
export default SearchBar;