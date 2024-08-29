import styled from "styled-components";

export const CommissionControlContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;

  @media (min-width: 768px) {
    width: auto;
    padding: 3rem;
  }
`;

export const Title = styled.h2`
  color: #333;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;
