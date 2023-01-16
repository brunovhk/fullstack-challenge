import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Container from "./components/layouts/Container";
// Pages
import Home from "./components/pages/Home";
// Context
import { ClientProvider } from "./context/ClientContext";

function App() {
  return (
    <ClientProvider>
      <Router>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </ClientProvider>
  );
}

export default App;
