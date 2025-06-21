import searchIco from "../../assets/search-ico.svg";
import "./index.scss"

const SearchBar: React.FC = () => {
  return (
    <div className="SearchBar">
      <button className="button-search" aria-label="Search">
        <img src={searchIco} alt="search event icon" />
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          aria-label="Search events"
        />
      </button>
    </div>
  );
};

export default SearchBar;
