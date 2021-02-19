import { DesktopNavbar, MobileNavbar } from "../Navbar";

export default function Layout({ children }) {
  return (
    <>
      <DesktopNavbar />
      {children}
      <MobileNavbar />
    </>
  );
}
