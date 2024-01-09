import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import myRoutes from "./myRoutes";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        {myRoutes.map(({ id, to, element }) => (
          <Route path={to} element={element} key={id} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
