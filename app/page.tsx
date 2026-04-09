import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="text-foreground">
      <Button variant={"secondary"}>Hello</Button>
      <p>Subscribe</p>
      <UserButton />
    </div>
  );
}
