import { AiOutlineSearch } from "react-icons/ai";
import { Container } from "../assets/wrappers/components/Searchbar";

const Searchbar = ({ search, handleSearch }) => {
  return (
    <Container>
      <AiOutlineSearch />
      <input
        type="text"
        name="search"
        placeholder="Buscar..."
        value={search}
        onChange={handleSearch}
      />
    </Container>
  );
};
export default Searchbar;
