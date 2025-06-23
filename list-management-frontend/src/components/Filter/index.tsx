import { useState } from "react";
import filterIco from "../../assets/filter-ico.svg";
import "./index.scss";
import FilterMenuDropDown from "./FilterMenuDropdown";

const Filter: React.FC = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);

  return (
    <div className="Filter">
      <button onClick={() => setIsDropDownOpen(prev => !prev)} className={`filter-button${isDropDownOpen ? " open" : ""}`}>
        <label htmlFor="filterButton" className="filter-button-label">
          Filters
        </label>
        <img src={filterIco} alt="Filter event icon" className="filter-ico" />
      </button>
      {isDropDownOpen && <FilterMenuDropDown />}
    </div>
  );
};

export default Filter;
