import React from "react";
import getCurrentUser from "@/server/getCurrentUser";

import "../styles/globals.css";
import NavBar from "@/components/navbar/NavBar";
import Client from "@/components/Client";
import Modal from "@/components/modals/Modal";
import RegisterModal from "@/components/modals/RegisterModal";
import Notification from "@/components/toasts/Notification";
import LoginModal from "@/components/modals/LoginModal";

export default async function App() {
  const currentUser = await getCurrentUser;

  return (
    <>
      <Client>
        <Notification />
        <LoginModal />
        <RegisterModal />
        <NavBar currentUser={currentUser} />
      </Client>
    </>
  );
}
