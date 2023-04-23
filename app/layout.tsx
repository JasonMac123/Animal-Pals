import "./globals.css";
import NavBar from "./components/navbar/NavBar";
import RegisterModal from "./components/modals/RegisterModal";
import LoginModal from "./components/modals/LoginModal";
import Client from "./components/Client";
import Notification from "./components/toasts/Notification";

import getCurrentUser from "./actions/getCurrentUser";
import CategoryBar from "./components/category/CategoryBar";

export const metadata = {
  title: "Animal-Pals",
  description: "A place where animals can find their vacation homes",
};

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
        <Client>
          <CategoryBar />
        </Client>
        <div className="">
          
        </div>
      </body>
    </html>
  );
}
