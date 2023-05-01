import useCreatePostModal from "../../hooks/useCreatePostModal";

const PostCreationModal = () => {
  const postCreationModal = useCreatePostModal();

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
