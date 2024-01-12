import { FC } from "react";
import Button from "@/components/ui/Button";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const Page = async ({}) => {
  const session = await getServerSession(authOptions);
  console.log("hey");
  return <p>hi</p>;
};

export default Page;
