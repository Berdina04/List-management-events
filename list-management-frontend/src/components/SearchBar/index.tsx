import searchIco from "../../assets/search-ico.svg";
import { useAppContext } from "../../context/AppContext";
import "./index.scss";

const SearchBar: React.FC = () => {
  const { search, setSearch } = useAppContext();

  return (
    <div className="SearchBar">
      <button className="search-button" aria-label="Search">
        <img src={searchIco} alt="search event icon" className="search-ico" />
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          aria-label="Search events"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </button>
    </div>
  );
};

export default SearchBar;
