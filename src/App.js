import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./components/home/Home";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element = {<Home/>} />
        <Route exact path="*" element = {<NotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;
