"use client";
import qs from "query-string";
import useSearch from "../hooks/useSearch";
import { useRouter, useSearchParams } from "next/navigation";
import Modal from "./Modal";
import { useCallback, useState } from "react";
import Heading from "../Heading";
import DropDownSelect from "../inputs/DropDownSelect";

const SearchModal = () => {
  const searchModal = useSearch();
  const params = useSearchParams();
  const router = useRouter();

  const [petCount, setPetCount] = useState(1);
  const [region, setRegion] = useState({
    value: "Brampton",
    label: "Brampton",
  });

  const onSubmit = useCallback(async () => {
    let query = {};

    if (params) {
      query = qs.parse(params.toString());
    }

    const newQuery: any = {
      ...query,
      region: region.value,
      maxOccupancy: petCount,
    };

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: newQuery,
      },
      { skipNull: true }
    );

    searchModal.onClose();

    router.push(url);
  }, [searchModal, location, router, petCount, region, params]);

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading title="What area are you looking for?" />
      <DropDownSelect value={region} onChange={(value) => setRegion(value)} />
    </div>
  );

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
