import React from "react";
import "../styles/globals.css";
import NavBar from "@/components/navbar/NavBar";
import Client from "@/components/Client";
import Modal from "@/components/modals/Modal";

export default function App() {
  return (
    <>
      <Client>
        <Modal title="hello-world" isOpen actionLabel="Submit" />
        <NavBar />
      </Client>
    </>
  );
}
