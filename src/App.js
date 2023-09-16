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
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path="/services" element={<Services/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
