import styled from "styled-components";

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const ListItem = styled.li`
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  width: 100%;

  @media (min-width: 768px) {
    width: 250px;
    margin: 0.5rem;
  }
`;

export const ProductName = styled.h3`
  color: #333;
  margin-bottom: 0.5rem;
`;

export const ProductInfo = styled.p`
  color: #666;
  margin: 0.25rem 0;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

export const EditButton = styled(Button)`
  background-color: #ffc107;
  color: #212529;

  &:hover {
    background-color: #e0a800;
  }
`;

export const RemoveButton = styled(Button)`
  background-color: #dc3545;
  color: white;

  &:hover {
    background-color: #c82333;
  }
`;

export const CommissionTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
`;

export const CommissionRate = styled.td`
  text-align: right;
`;
