"use client";

import useCreatePost from "../hooks/useCreatePost";
import Modal from "./Modal";

const PostCreationModal = () => {
  const postCreationModal = useCreatePost();

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
