"use client";

import { useEffect, useState } from "react";

interface ClientProps {
  children: React.ReactNode;
}

const Client: React.FC<ClientProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  });

  if (!mounted) {
    return null;
  }

  return <>{children}</>;
};

export default Client;
