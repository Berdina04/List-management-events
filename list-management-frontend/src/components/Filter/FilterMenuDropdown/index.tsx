import React, { useState } from "react";
import checkedBoxIco from "../../../assets/checked-box-ico.svg";
import "./index.scss";

interface CheckedBoxProps {
  id: number;
  label: string;
}

const FilterMenuDropDown: React.FC = () => {
  const filterOptions: Array<CheckedBoxProps> = [
    { id: 1, label: "Active" },
    { id: 2, label: "Closed" },
    { id: 3, label: "Canceled" },
  ];

  //This reduce is done to create dynamically the states for the checked box, instead of adding manually
  const [checked, setChecked] = useState<Record<number, boolean>>(
    filterOptions.reduce((acc, option) => {
      acc[option.id] = false;
      return acc;
    }, {} as Record<number, boolean>)
  );

  //Change the value of the selected box, and keep the values of the rest of the object
  const handleCheckFilterOption = (id: number) => {
    setChecked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return (
    <div className="FilterMenuDropDown">
      <div className="filter-content">
        <p className="filter-menu-title">RFP STATUS</p>
        <ul className="filter-options-list">
          {filterOptions.map((option) => (
            <div className="filter-option-container">
              <button
                onClick={() => handleCheckFilterOption(option.id)}
                className={`filter-option-box${
                  checked[option.id] ? " checked" : ""
                }`}
              >
                <img
                  className="filter-checked-box-ico"
                  src={checkedBoxIco}
                  alt="filter checked box icon"
                />
              </button>
              <li key={option.id} className="filter-option-label">
                {option.label}
              </li>
            </div>
          ))}
        </ul>
      </div>
      <button className="filter-save-button">Save</button>
    </div>
  );
};

export default FilterMenuDropDown;