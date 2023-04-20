import React from "react";

import "../styles/globals.css";
import NavBar from "@/components/navbar/NavBar";
import Client from "@/components/Client";
import RegisterModal from "@/components/modals/RegisterModal";
import Notification from "@/components/toasts/Notification";
import LoginModal from "@/components/modals/LoginModal";

export default function App() {
  return (
    <>
      <Client>
        <Notification />
        <LoginModal />
        <RegisterModal />
        <NavBar />
      </Client>
    </>
  );
}
