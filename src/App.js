import React from "react";
import styled from "styled-components";
import AdminDashboard from "./Pages/Admin/Dashboard/AdminDashboard";

const AppContainer = styled.div`
  font-family: "Arial", sans-serif;
  background-color: #f0f2f5;
  min-height: 100vh;
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

function App() {
  return (
    <AppContainer>
      <AdminDashboard />
    </AppContainer>
  );
}

export default App;
