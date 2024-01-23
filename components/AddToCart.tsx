"use client";

import { Button } from "./ui/button";

const AddToCart = () => {
  return (
    <div>
      <Button onClick={() => console.log("Clicked")}>Add To Cart</Button>
    </div>
  );
};

export default AddToCart;
