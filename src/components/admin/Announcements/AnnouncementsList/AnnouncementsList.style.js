import styled from "styled-components";

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ListItem = styled.li`
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  width: 100%;

  @media (min-width: 768px) {
    width: 45%;
  }

  @media (min-width: 992px) {
    width: 30%;
  }
`;

export const Title = styled.h3`
  color: #333;
  margin-bottom: 0.5rem;
`;

export const Content = styled.p`
  color: #666;
  margin-bottom: 0.5rem;
`;

export const TargetGroup = styled.p`
  color: #28a745;
  font-weight: bold;
  margin: 0;
`;
