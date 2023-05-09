"use client";

import Heading from "../Heading";
import Modal from "./Modal";
import Input from "../inputs/Input";
import useCreatePost from "../hooks/useCreatePost";
import { useForm, FieldValues } from "react-hook-form";
import { categories } from "../category/CategoryBar";
import CategoryInput from "../inputs/CategoryInput";
import DropDownSelect from "../inputs/DropDownSelect";

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
      animals: [],
      maxOccupancy: 1,
      address: "",
      region: null,
      imageSrc: "",
      price: 1,
      title: "",
      description: "",
    },
  });

  let animals = watch("animals");
  let location = watch("location");

  const setFormValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const setCategory = (id: string, value: string) => {
    if (animals.includes(value)) {
      animals = animals.filter((item: string) => item !== value);
    } else {
      animals.push(value);
    }

    setValue(id, animals, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const bodyContent = (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <Heading
          title="Describe your animal vacation home!"
          subtitle="Get short and straight to the point!"
        />
        <Input id="title" label="Title" register={register} errors={errors} />
      </div>
      <div className="space-y-2">
        <Heading
          title="Tell us what your animal vacation offers!"
          subtitle="Get all the juicy details about your animal vacation home!"
        />
        <Input
          id="description"
          label="description"
          register={register}
          errors={errors}
        />
      </div>
      <div>
        <Heading
          title="What animals does your home allow?"
          subtitle="Select which animals are allowed down below"
        />
        <div className="mt-2 flex gap-3 flex-wrap w-full justify-center">
          {categories.map((item) => {
            return (
              <CategoryInput
                key={item.label}
                label={item.label}
                icon={item.icon}
                onClick={(animal) => setCategory("animals", animal)}
                selected={animals.includes(item.label)}
              />
            );
          })}
        </div>
      </div>
      <div>
        <Heading
          title="Where is your home located?"
          subtitle="Please fill in your address"
        />
        <Input
          id="address"
          label="address"
          register={register}
          errors={errors}
        />
        <Heading
          title="What region in Toronto is your home located?"
          subtitle="Select the region"
        />
        <DropDownSelect
          value={location}
          onChange={(value) => setFormValue("location", value)}
        />
      </div>
    </div>
  );

  return (
    <Modal
      title="Create an animal vacation home listing!"
      isOpen={postCreationModal.isOpen}
      onClose={postCreationModal.onClose}
      onSubmit={postCreationModal.onClose}
      actionLabel="Create Listing!"
      body={bodyContent}
      overflow
    />
  );
};

export default PostCreationModal;
