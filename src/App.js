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
import { useEffect, useState } from "react";
import Loading from "./Pages/Loading/Loading";

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])
  return (
    <div className="App">
      {loading && <Loading />}
      {<BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path="/contacts" element={<ContactsPage/>} />
          <Route path="/services" element={<Services/>}/>
          <Route path="/aboutus" element={<AboutUsPage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>}
    </div>
  );
}

export default App;
