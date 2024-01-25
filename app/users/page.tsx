import Link from "next/link";
import UserTable from "./UserTable";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface Props {
  searchParams: { sortOrder: string };
}

const UserPage = ({ searchParams: { sortOrder } }: Props) => {
  return (
    <div className="">
      <h1>Users</h1>
      <Link href="/users/new">
        <Button className="btn-dark-1 mb-3">New User</Button>
      </Link>
      <Suspense fallback={<Skeleton className="w-80 h-80"/>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </div>
  );
};

export default UserPage;
