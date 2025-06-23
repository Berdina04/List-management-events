import ListManagmentEventsPages from "./pages/ListManagementEventsPage";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <ListManagmentEventsPages />
    </AppProvider>
  );
}

export default App;
