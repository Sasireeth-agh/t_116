import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  Select,
  ErrorMessage,
  Button,
  Input,
} from "./CommissionForm.style";

const CommissionForm = ({
  onSubmit,
  selectedOption,
  setSelectedOption,
  options,
}) => {
  const [isCustom, setIsCustom] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    reset();
    setIsCustom(false);
  };

  const handleCustomOption = (e) => {
    setIsCustom(e.target.value === "custom");
    reset();
  };

  const onSubmitForm = (data) => {
    const option = isCustom ? data.customOption : data.option;
    onSubmit(option, parseFloat(data.rate));
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmitForm)}>
      <div>
        <Select
          {...register("type", { required: "Type is required" })}
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option value="occupation">Occupation</option>
          <option value="product">Product</option>
          <option value="user">User</option>
        </Select>
        {errors.type && <ErrorMessage>{errors.type.message}</ErrorMessage>}
      </div>

      <div>
        <Select
          {...register("option", { required: "Option is required" })}
          onChange={handleCustomOption}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
          <option value="custom">Add Custom</option>
        </Select>
        {isCustom && (
          <Input
            {...register("customOption", {
              required: "Custom option is required",
            })}
            placeholder="Enter custom occupation"
          />
        )}
        {errors.option && !isCustom && (
          <ErrorMessage>{errors.option.message}</ErrorMessage>
        )}
        {errors.customOption && isCustom && (
          <ErrorMessage>{errors.customOption.message}</ErrorMessage>
        )}
      </div>

      <div>
        <Input
          {...register("rate", {
            required: "Rate is required",
            valueAsNumber: true,
          })}
          placeholder="Enter commission rate"
        />
        {errors.rate && <ErrorMessage>{errors.rate.message}</ErrorMessage>}
      </div>

      <Button type="submit">Set Rate</Button>
    </Form>
  );
};

export default CommissionForm;
