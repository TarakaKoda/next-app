import { TbLoader3 } from "react-icons/tb";

import { Button } from "@/components/ui/button";

const Loading = () => {
  return (
    <Button disabled>
      <TbLoader3 className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
  );
};

export default Loading;
