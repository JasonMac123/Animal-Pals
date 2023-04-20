import "./globals.css";
import NavBar from "./components/navbar/NavBar";
import RegisterModal from "./components/modals/RegisterModal";
import LoginModal from "./components/modals/LoginModal";
import Client from "./components/Client";
import Notification from "./components/toasts/Notification";

export const metadata = {
  title: "Airbnb",
  description: "A place where animals can find their vacation homes",
};

import getCurrentUser from "./actions/getCurrentUser";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body>
        <Client>
          <Notification />
          <LoginModal />
          <RegisterModal />
          <NavBar currentUser={currentUser} />
        </Client>
      </body>
    </html>
  );
}
