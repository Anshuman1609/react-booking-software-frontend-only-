import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./components/home/Home";
import NotFound from "./components/NotFound";
import List from "./components/list/List";
import Hotel from "./components/hotel/Hotel";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element = {<Home/>} />
        <Route exact path="/hotels" element = {<List/>} />
        <Route exact path="/hotels/:id" element = {<Hotel/>} />

        <Route exact path="*" element = {<NotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;
