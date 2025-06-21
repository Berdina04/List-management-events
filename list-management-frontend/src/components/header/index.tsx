import "./index.scss"
import SearchBar from "../SearchBar";

const Header = () => {
    return (
       <div className="Header">
         <h1 className="list-title">
            Rooming List Management: Events
        </h1>
        <SearchBar/>
       </div>
    )
}

export default Header;