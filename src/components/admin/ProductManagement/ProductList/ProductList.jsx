import React from "react";
import {
  List,
  ListItem,
  ProductName,
  ProductInfo,
  ButtonGroup,
  EditButton,
  RemoveButton,
  CommissionTable,
  CommissionRate,
} from "./ProductList.style.js";

const ProductList = ({ products, onEdit, onRemove }) => {
  return (
    <List>
      {products.map((product) => {
        // Filter out `_id` from commissionRates
        const filteredCommissionRates = Object.entries(product.commissionRates).filter(
          ([key]) => key !== '_id' // Adjust this filter if needed based on actual data structure
        );

        return (
          <ListItem key={product._id}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
            <ProductName>{product.name}</ProductName>
            <ProductInfo>Price: Rs.{product.price}</ProductInfo>
            <CommissionTable>
              <thead>
                <tr>
                  <th>Occupation</th>
                  <th>Commission Rate</th>
                </tr>
              </thead>
              <tbody>
                {filteredCommissionRates.map(([occupation, rate]) => (
                  <tr key={occupation}>
                    <td>{occupation}</td>
                    <td><CommissionRate>{rate}%</CommissionRate></td>
                  </tr>
                ))}
              </tbody>
            </CommissionTable>
            <ButtonGroup>
              <EditButton onClick={() => onEdit(product._id)}>Edit</EditButton>
              <RemoveButton onClick={() => onRemove(product._id)}>
                Remove
              </RemoveButton>
            </ButtonGroup>
          </ListItem>
        );
      })}
    </List>
  );
};

export default ProductList;
