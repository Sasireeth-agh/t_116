import styled from "styled-components";

export const DashboardContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

export const NavBar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    margin-bottom: 2rem;
  }
`;

export const NavButton = styled.button`
  background-color: ${(props) => (props.active ? "#007bff" : "#f8f9fa")};
  color: ${(props) => (props.active ? "white" : "#333")};
  border: none;
  padding: 0.75rem 1rem;
  margin: 0.5rem 0;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.active ? "#0056b3" : "#e9ecef")};
  }

  @media (min-width: 768px) {
    margin: 0 0.5rem;
  }
`;
