"use client";

import { Button } from "@/components/ui/button";
import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}

const UserError = ({ error, reset }: Props) => {
  console.log(error);
  return (
    <>
      <div>userError</div>
      <Button className="btn-dark-1" onClick={() => reset()}>Retry...</Button>
    </>
  );
};

export default UserError;
