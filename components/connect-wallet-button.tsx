"use client";

import { useState, type ComponentProps } from "react";
import { connectFreighter } from "@/lib/freighter";
import { Button } from "@/components/ui/button";

export function ConnectWalletButton({
  label = "Connect Wallet",
  size = "default",
  className,
}: {
  label?: string;
  size?: ComponentProps<typeof Button>["size"];
  className?: string;
}) {
  const [error, setError] = useState<string | null>(null);

  async function handleClick() {
    try {
      await connectFreighter();
    } catch {
      setError("Wallet connection isn't implemented yet.");
    }
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <Button size={size} className={className} onClick={handleClick}>
        {label}
      </Button>
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
