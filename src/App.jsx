import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Form,
} from "react-router-dom";
import LeftBar from "./components/left-bar/Left_Bar";
import SobreMim from "./components/main/SobreMim";
import Projetos from "./components/main/Projetos";
import Contato from "./components/main/Contato";

function App() {
  return (
    <>
      <Router>
        <LeftBar />
        <Routes>
          <Route exact path="/" element="" />

          <Route path="/SobreMim" element={<SobreMim />} />

          <Route path="/Projetos" element={<Projetos />} />

          <Route path="/Contato" element={<Contato />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
