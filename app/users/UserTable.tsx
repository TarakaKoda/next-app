import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { sort } from "fast-sort";
import Link from "next/link";

interface User {
  name: string;
  username: string;
  email: string;
}

interface Props {
  sortOrder: string;
}

const UserTable = async ({ sortOrder }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users: User[] = await res.json();

  const sortedUsers = sort(users).asc((user) =>
    sortOrder === "email" ? user["email"] : user["name"],
  );

  return (
    <Table className="rounded-lg border border-white">
      <TableCaption>A list of all users.</TableCaption>
      <TableHeader>
        <TableRow className="hover:bg-[#1F1F1F]">
          <TableHead>
            <Link
              className="text-white hover:text-black"
              href="users?sortOrder=name"
            >
              Name
            </Link>
          </TableHead>
          <TableHead>
            <Link
              className="text-white hover:text-black"
              href="users?sortOrder=email"
            >
              Email
            </Link>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sortedUsers.map((user) => (
          <TableRow
            className="hover:bg-white hover:text-black"
            key={user.username}
          >
            <TableCell key={user.username}>{user.name}</TableCell>
            <TableCell key={user.username}>{user.email}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UserTable;
