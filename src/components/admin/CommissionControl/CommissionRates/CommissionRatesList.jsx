import React from "react";
import { List, ListItem, Occupation, Rate } from "./CommissionRatesList.style";

const CommissionRatesList = ({ rates, options }) => {
  return (
    <List>
      {options.map((option) => (
        <ListItem key={option}>
          <Occupation>{option}</Occupation>
          <Rate>{rates[option] ? `${rates[option]}%` : "N/A"}</Rate>
        </ListItem>
      ))}
    </List>
  );
};

export default CommissionRatesList;
