import React, { useState, useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";
import CommissionForm from "../../../components/admin/CommissionControl/CommissionForm/CommissionForm.jsx";
import CommissionRatesList from "../../../components/admin/CommissionControl/CommissionRates/CommissionRatesList.jsx";
import {
  fetchCommissionRates,
  fetchProducts,
  fetchUsers,
  updateCommissionRate,
} from "../../../components/services/api.js";
import {
  CommissionControlContainer,
  Title,
  LoaderContainer,
} from "./CommissionControl.style.js";

const CommissionControl = () => {
  const [commissionRates, setCommissionRates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState("user");
  const [options, setOptions] = useState([]);

  const fetchCommissionRatesData = async () => {
    try {
      setIsLoading(true);
      const data = await fetchCommissionRates(selectedOption);
      setCommissionRates(data);
    } catch (error) {
      console.error("Error fetching commission rates:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log("Selected option on mount or change:", selectedOption);
    if (!selectedOption) {
      console.error("Selected option is not set");
      return;
    }
    fetchCommissionRatesData();
  }, [selectedOption]);

  useEffect(() => {
    const fetchOptions = async () => {
      setIsLoading(true);
      let data = [];
      if (selectedOption === "occupation") {
        data = commissionRates.map(rate => rate.name);
      } else if (selectedOption === "product") {
        const products = await fetchProducts();
        data = products.map(product => product.name);
      } else if (selectedOption === "user") {
        const users = await fetchUsers();
        data = users.map(user => user.name);
      }
      setOptions(data);
      setIsLoading(false);
    };

    if (selectedOption) {
      fetchOptions();
    }
  }, [selectedOption, commissionRates]);

  const handleUpdateCommissionRate = async (key, rate) => {
    try {
      const updatedRate = await updateCommissionRate(selectedOption, key, rate);
      if (updatedRate) {
        setCommissionRates(prevRates => (
          prevRates.map(item => (
            item.name === key ? { ...item, rate } : item
          ))
        ));

        if (!options.includes(key)) {
          setOptions(prevOptions => [...prevOptions, key]);
        }
      }
    } catch (error) {
      console.error("Error updating commission rate:", error);
    }
    fetchCommissionRatesData();
  };

  return (
    <CommissionControlContainer>
      <Title>Manage Commission Rates</Title>
      <CommissionForm
        onSubmit={handleUpdateCommissionRate}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        options={options}
      />
      {isLoading ? (
        <LoaderContainer>
          <ThreeDots color="#007bff" height={80} width={80} />
        </LoaderContainer>
      ) : (
        <CommissionRatesList rates={commissionRates} options={options} />
      )}
    </CommissionControlContainer>
  );
};

export default CommissionControl;