import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="h-16 w-full border-b-2 border-[#1F1F1F] p-5 flex gap-5">
      <Link href="/">Next.js</Link>
      <Link href="/users">User</Link>
    </nav>
  );
};

export default NavBar;
