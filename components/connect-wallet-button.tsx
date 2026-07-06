"use client";

import { useState } from "react";
import { connectFreighter } from "@/lib/freighter";

export function ConnectWalletButton() {
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
      <button
        onClick={handleClick}
        className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
      >
        Connect Wallet
      </button>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
