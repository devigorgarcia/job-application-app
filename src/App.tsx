import { ToastContainer } from "react-toastify";
import { Router } from "./routes/routes";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router />
      <ToastContainer />
    </>
  );
}

export default App;
