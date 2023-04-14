import React from "react";
import "../styles/globals.css";
import NavBar from "@/components/navbar/NavBar";
import Client from "@/components/Client";
import Modal from "@/components/modals/Modal";
import RegisterModal from "@/components/modals/RegisterModal";

export default function App() {
  return (
    <>
      <Client>
        <RegisterModal />
        <NavBar />
      </Client>
    </>
  );
}
