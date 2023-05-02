"use client";

import Heading from "../Heading";
import Modal from "./Modal";
import Input from "../inputs/Input";
import useCreatePost from "../hooks/useCreatePost";
import { useForm, FieldValues } from "react-hook-form";

const PostCreationModal = () => {
  const postCreationModal = useCreatePost();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      dogs: true,
      cats: true,
      maxOccupancy: 1,
      imageSrc: "",
      price: 1,
      title: "",
      description: "",
    },
  });

  const bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Describe your animal vacation home!"
        subtitle="Get short and straight to the point!"
      />
      <Input id="title" label="Title" register={register} errors={errors} />
    </div>
  );

  return (
    <Modal
      title="Create an animal vacation home listing!"
      isOpen={postCreationModal.isOpen}
      onClose={postCreationModal.onClose}
      onSubmit={postCreationModal.onClose}
      actionLabel="Create Listing!"
    />
  );
};

export default PostCreationModal;
