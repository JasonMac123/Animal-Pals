import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export default function App() {
  return (
    <UserProvider>
      <h1>Hello</h1>
    </UserProvider>
  );
}
