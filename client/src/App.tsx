import React from "react";
import { CssBaseline } from "@mui/material";
import Layout from "./layout/Layout";
import Routes from "./Routes";

function App() {
  return (
    <Layout>
      <CssBaseline />
      <Routes />
    </Layout>
  );
}

export default App;
