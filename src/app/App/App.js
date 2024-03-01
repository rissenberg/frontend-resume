import './App.css';
import {LandingPage} from "../../pages/LandingPage";
import {Navbar} from "../../widgets/Navbar";
import {Footer} from "../../widgets/Footer";

const App = () => {
  return (
      <>
        <Navbar />
        <LandingPage />
        <Footer />
      </>
  );
}

export default App;
