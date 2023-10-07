import Header from "./Components/Header";
import ContactsPage from "./Pages/Contacts/Contacts";
import LandingPage from "./Pages/Landing/Landing";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Services from "./Pages/Services/Services";
import AboutUsPage from "./Pages/About us/AboutUs";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path="/contacts" element={<ContactsPage/>} />
          <Route path="/services" element={<Services/>}/>
          <Route path="/aboutus" element={<AboutUsPage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
