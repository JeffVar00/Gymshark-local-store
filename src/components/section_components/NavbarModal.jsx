import dynamic from "next/dynamic";

const Navbar = dynamic(() =>
  import("@/components/menu_components/Navbar", { ssr: false })
);

function NavbarModal() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default NavbarModal;
