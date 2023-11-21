import Main from "./pages/main";
import { useState, useEffect } from "react";
import Custompreloader from "./components/Custompreloader";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
  return <>{loading ? <Custompreloader /> : <Main />}</>;
}

export default App;
