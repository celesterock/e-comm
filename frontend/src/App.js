import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./Header";
import SubHeader from "./SubHeader";
import Carousel from "./Carousel";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  const location = useLocation();
  const hideComponentsOnPaths = ["/login", "/signup"];
  const shouldHideComponents = hideComponentsOnPaths.includes(
    location.pathname
  );
  return (
    <div className="App">
      {!shouldHideComponents && <Header />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {!shouldHideComponents && <SubHeader />}
      {!shouldHideComponents && <Carousel />}
    </div>
  );
  // return (
  //   <div className="App">
  //     <Router>
  //       <Header />
  //       <Routes>
  //         <Route path="/login" element={<Login />} />
  //         <Route path="/signup" element={<Signup />} />
  //       </Routes>
  //       <SubHeader />
  //       <Carousel />
  //     </Router>
  //   </div>
  // );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
