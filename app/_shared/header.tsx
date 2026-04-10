import { Button } from "@/components/ui/button";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

export default async function Header() {
  const user = await currentUser();
  console.log("server component");
  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex gap-2 items-center">
        <Image src={"/logo.png"} width={40} height={40} alt="logo" />
        <h2 className="text-xl font-semibold">
          <span className="text-primary">UI/UX </span>
          MOCK
        </h2>
      </div>
      <ul className="flex gap-10 items-center text-lg">
        <li className="hover:text-primary cursor-pointer transition-all duration-300">
          Home
        </li>
        <li className="hover:text-primary cursor-pointer transition-all duration-300">
          Pricing
        </li>
      </ul>
      {user ? (
        <UserButton />
      ) : (
        <SignInButton mode="modal">
          <Button>Get Started</Button>
        </SignInButton>
      )}
    </div>
  );
}
