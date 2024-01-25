"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const NewUserPage = () => {
  const router = useRouter();
  return (
    <Button className="btn-dark-1" onClick={() => router.push("/users")}>
      Create
    </Button>
  );
};

export default NewUserPage;
