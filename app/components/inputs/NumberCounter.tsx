"use client";

import { useCallback } from "react";

interface CounterProps {
  title: string;
  value: number;
  onChange: (value: number) => void;
}

const NumberCounter: React.FC<CounterProps> = ({ title, value, onChange }) => {
  const onAdd = useCallback(() => {
    onChange(value + 1);
  }, [onChange, value]);

  const onMinus = useCallback(() => {
    if (value === 1) {
      return;
    }

    onChange(value - 1);
  }, [onChange, value]);

  return (
    <div className="flex items-center justify-between">
      <div>{title}</div>
      <div className="flex items-center space-x-4">
        <div onClick={onAdd}></div>
        <div>{value}</div>
        <div onClick={onMinus}></div>
      </div>
    </div>
  );
};

export default NumberCounter;
