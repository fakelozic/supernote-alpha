"use client";
import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

function LogoutButton() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleLogOut() {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const errorMessage = null;
    if (!errorMessage) {
      toast("Logged Out", {
        description: "You have been successfully logged out",
      });
      router.push("/");
    } else {
      toast("Error", { description: errorMessage });
    }

    setLoading(false);
  }
  return (
    <Button
      variant="outline"
      disabled={loading}
      onClick={handleLogOut}
      className="w-20"
    >
      {loading ? <Loader2 className="scale-125 animate-spin" /> : "Log Out"}
    </Button>
  );
}

export default LogoutButton;
