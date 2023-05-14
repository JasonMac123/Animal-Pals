"use client";

import Heading from "../Heading";
import Modal from "./Modal";
import Input from "../inputs/Input";
import useCreatePost from "../hooks/useCreatePost";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { categories } from "../category/CategoryBar";
import CategoryInput from "../inputs/CategoryInput";
import DropDownSelect from "../inputs/DropDownSelect";
import NumberCounter from "../inputs/NumberCounter";
import ImageUpload from "../inputs/ImageUpload";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const PostCreationModal = () => {
  const postCreationModal = useCreatePost();
  const router = useRouter();

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
  const location = watch("location");
  const maxOccupancy = watch("maxOccupancy");
  const imageSrc = watch("imageSrc");

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    axios
      .post("/api/route", data)
      .then(() => {
        toast.success("Post created");
        router.refresh();
        reset();
        postCreationModal.onClose();
      })
      .catch(() => {
        toast.error(
          "Could not submit, please check if you entered in every field otherwise try again."
        );
      })
  };

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
    <div className="flex flex-col gap-8 mb-8">
      <div className="space-y-4">
        <Heading
          title="Describe your animal vacation home!"
          subtitle="Get short and straight to the point!"
        />
        <Input id="title" label="Title" register={register} errors={errors} />
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
        <Heading
          title="How much is to stay at your house?"
          subtitle="Canadian Dollars per night"
        />
        <Input
          id="price"
          label="price"
          formatPrice={true}
          type="number"
          register={register}
          errors={errors}
        />
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
        <NumberCounter
          title="How many pets can be at your place?"
          value={maxOccupancy}
          onChange={(value) => {
            setFormValue("maxOccupancy", value);
          }}
        />
        <ImageUpload
          value={imageSrc}
          onChange={(value) => {
            setFormValue("imageSrc", value);
          }}
        />
      </div>
    </div>
  );

  return (
    <Modal
      title="Create an animal vacation home listing!"
      isOpen={postCreationModal.isOpen}
      onClose={postCreationModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      actionLabel="Create Listing!"
      body={bodyContent}
      overflow
    />
  );
};

export default PostCreationModal;
