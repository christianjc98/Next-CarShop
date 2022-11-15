const Searchbar = ({ search, handleSearch }) => {
  return (
    <form>
      <input type="text" name="search" value={search} onChange={handleSearch} />
    </form>
  );
};
export default Searchbar;
