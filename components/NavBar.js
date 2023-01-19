import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <div className="logo">Ninja Listing</div>
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/ninjas"}>Ninja listing</Link>
    </nav>
  );
};

export default NavBar;
