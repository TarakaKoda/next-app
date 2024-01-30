"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useSession } from "next-auth/react";
import Link from "next/link";

const NavBar = () => {
  const { status, data: session } = useSession();

  return (
    <nav className="flex h-16 w-full justify-between gap-5 border-b-2 border-[#1F1F1F] p-5">
      <Link href="/">Next.js</Link>
      <div className="flex gap-6">
        <Link href="/users">User</Link>
        {status === "loading" ? (
          <div className=" flex gap-2">
            <Skeleton className="h-6 w-[5.2rem]" />
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="h-6 w-20" />
          </div>
        ) : status === "authenticated" ? (
          <>
            <div className="flex gap-2">
              <p>{session.user?.name}</p>
              {session.user && (
                <img
                  className="rounded-full"
                  src={session.user.image!}
                  alt="profile picture"
                />
              )}
            </div>
            <Link href="/api/auth/signout">Sign Out</Link>
          </>
        ) : (
          <Link href="/api/auth/signin">Sign In</Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
