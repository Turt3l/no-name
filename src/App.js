import Header from "./Components/Header";
import ContactsPage from "./Pages/Contacts/Contacts";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/contacts" element={<ContactsPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
