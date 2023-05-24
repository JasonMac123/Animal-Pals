import useSearch from "../hooks/useSearch";
import Modal from "./Modal";

const SearchModal = () => {
  const searchModal = useSearch();

  return (
    <Modal
      isOpen={searchModal.isOpen}
      onClose={searchModal.onClose}
      onSubmit={searchModal.onOpen}
      title="Filter"
      actionLabel="Search!"
    />
  );
};

export default SearchModal;
