import React from "react";
import { Route, Routes } from "react-router-dom";
const Users = React.lazy(() => import("./pages/Users"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
    </Routes>
  );
}

export default App;
