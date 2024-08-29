import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  Input,
  ErrorMessage,
  TextArea,
  Select,
  Button,
} from "./AnnouncementForm.style";

const AnnouncementForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmitForm = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmitForm)}>
      <div>
        <Input
          {...register("title", { required: "Title is required" })}
          placeholder="Announcement Title"
        />
        {errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}
      </div>

      <div>
        <TextArea
          {...register("content", { required: "Content is required" })}
          placeholder="Announcement Content"
          rows={4}
        />
        {errors.content && (
          <ErrorMessage>{errors.content.message}</ErrorMessage>
        )}
      </div>

      <div>
        <Select
          {...register("targetGroup", { required: "Target group is required" })}
        >
          <option value="">Select Target Group</option>
          <option value="all">All Users</option>
          <option value="students">Students</option>
          <option value="professionals">Professionals</option>
          <option value="marketingAgents">Marketing Agents</option>
        </Select>
        {errors.targetGroup && (
          <ErrorMessage>{errors.targetGroup.message}</ErrorMessage>
        )}
      </div>

      <Button type="submit">Create Announcement</Button>
    </Form>
  );
};

export default AnnouncementForm;
