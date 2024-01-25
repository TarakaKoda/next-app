import { notFound } from "next/navigation";

interface Props {
  params: { id: number };
}

const UserDetailPage = ({ params: { id } }: Props) => {
  if (id <= 10) {
    return <div>UserDetailPage {id}</div>;
  } else {
    notFound()
  }
};

export default UserDetailPage;
