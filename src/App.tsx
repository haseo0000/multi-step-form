import "./App.css";
import BG_Mobile from "./assets/bg-sidebar-mobile.svg";

import FormPage from "./pages/FormPage";

function App() {
  return (
    <div className="container">
      <div className="bg">
        <img src={BG_Mobile} alt="bg" />
      </div>
      <FormPage />
    </div>
  );
}

export default App;
