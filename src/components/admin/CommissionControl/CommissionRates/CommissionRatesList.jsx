import React from "react";
import { List, ListItem, Occupation, Rate } from "./CommissionRatesList.style";

const CommissionRatesList = ({ rates, options }) => {
  return (
    <List>
      {options.map((option,id) => (
        <ListItem key={option}>
          <Occupation>{option}</Occupation>
          <Rate>{rates.length-1>=id?(rates[id].rate ? `${rates[id].rate}%` : "N/A"):"N/A"}</Rate>
        </ListItem>
      ))}
    </List>
  );
};

export default CommissionRatesList;
