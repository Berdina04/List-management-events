import "./index.scss";
import SearchBar from "../SearchBar";
import Filter from "../Filter";
import { useAppContext } from "../../context/AppContext";

const Header = () => {
  const { seed } = useAppContext();

  const handleSeed = async () => {
    try {
      await seed();

    } catch (error) {
      alert("Error inserting data.");
    }
  };
  return (
    <div className="Header">
      <h1 className="list-title">Rooming List Management: Events</h1>
      <div className="filter-search-section">
        <button className="seed-btn" onClick={handleSeed}>
          Insert Bookings and Rooming Lists
        </button>
        <SearchBar />
        <Filter />
      </div>
    </div>
  );
};

export default Header;
