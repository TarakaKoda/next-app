import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className="flex">
      <aside className="mr-5 bg-[#1F1F1F] rounded-xl p-5">Admin side bar</aside>
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
