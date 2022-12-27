import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Forum from "./components/Forum";
import Shop from "./components/Shop";
import Events from "./components/Events";
import Signin from "./components/Signin";

function App() {
  return (
    <>
      <Router>
        <Landing />
        <Forum />
        <Shop />
        <Events />

        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/events" element={<Events />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
