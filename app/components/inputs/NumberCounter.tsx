"use client";

import { useCallback } from "react";

interface CounterProps {
  placeholder: string;
  value: number;
  onChange: (value: number) => void;
}

const NumberCounter: React.FC<CounterProps> = ({
  placeholder,
  value,
  onChange,
}) => {
  const onAdd = useCallback(() => {
    onChange(value + 1);
  }, [onChange, value]);

  const onMinus = useCallback(() => {
    onChange(value + 1);
  }, [onChange, value]);

  return <div></div>;
};

export default NumberCounter;
