import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import DarkModeToggle from "./DarkModeToggle";
import LogoutButton from "./LogoutButton";

function Header() {
  const user = 1;
  return (
    <div>
      <Link href="/">
        <Image src="" height={60} width={60} alt="logo" priority />
      </Link>

      <div className="flex gap-4">
        {user ? (
          <LogoutButton />
        ) : (
          <>
            <Button asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/login">Login</Link>
            </Button>
          </>
        )}
        <DarkModeToggle />
      </div>
    </div>
  );
}

export default Header;
