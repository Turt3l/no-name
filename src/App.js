import Header from "./Components/Header";
import ContactsPage from "./Pages/Contacts/Contacts";
import LandingPage from "./Pages/Landing/Landing";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Services from "./Pages/Services/Services";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path="/contacts" element={<ContactsPage/>} />
          <Route path="/services" element={<Services/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
