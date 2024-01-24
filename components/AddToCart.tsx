"use client";

import { Button } from "./ui/button";

const AddToCart = () => {
  return (
    <div>
      <Button
        className="bg-white text-black hover:bg-sky-300"
        onClick={() => console.log("Clicked")}
      >
        Add To Cart
      </Button>
    </div>
  );
};

export default AddToCart;
