import { ReactNode } from "react";

export default function Page({
  params,
}: {
  params: {
    number: ReactNode;
    id: Number;
  };
}) {
  return <div>halo: {params.number}</div>;
}
