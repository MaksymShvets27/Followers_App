import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "../../pages/HomePage";
import { TweetsPage } from "../../pages/TweetsPage";

function App() {
  return (
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/tweets" Component={TweetsPage} />
      <Route path="/*" Component={HomePage} />
    </Routes>
  );
}

export default App;
