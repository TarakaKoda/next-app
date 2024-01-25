"use client";

import { Button } from "./ui/button";

const AddToCart = () => {
  return (
    <div>
      <Button
        className="btn-dark-1"
        onClick={() => console.log("Clicked")}
      >
        Add To Cart
      </Button>
    </div>
  );
};

export default AddToCart;
