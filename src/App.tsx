import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
const Users = React.lazy(() => import("./pages/Users"));

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Users />} />
      </Routes>
    </Layout>
  );
}

export default App;
