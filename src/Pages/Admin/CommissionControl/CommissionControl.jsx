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
  const [commissionRates, setCommissionRates] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState("occupation");
  const [options, setOptions] = useState([]);

  useEffect(() => {
    fetchCommissionRates().then((data) => {
      setCommissionRates(data);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      let data = [];
      if (selectedOption === "occupation") {
        data = Object.keys(commissionRates);
      } else if (selectedOption === "product") {
        const products = await fetchProducts();
        data = products.map((product) => product.name);
      } else if (selectedOption === "user") {
        const users = await fetchUsers();
        data = users.map((user) => user.name);
      }
      setOptions(data);
      setIsLoading(false);
    };

    fetchData();
  }, [selectedOption, commissionRates]);

  const handleUpdateCommissionRate = async (key, rate) => {
    const updatedRate = await updateCommissionRate(key, rate);
    setCommissionRates((prevRates) => ({
      ...prevRates,
      ...updatedRate,
    }));

    if (selectedOption === "occupation" && !options.includes(key)) {
      setOptions((prevOptions) => [...prevOptions, key]);
    }
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
