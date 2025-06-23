import EventList from "../components/EventList";
import Header from "../components/Header";
import "./ListManagmentEventsPage.scss"

const ListManagmentEventsPage: React.FC = () => {
  return (
    <div className="ListManagmentEventsPage">
      <Header />
      <EventList />
    </div>
  );
};

export default ListManagmentEventsPage;
