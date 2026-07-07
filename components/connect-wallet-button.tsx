"use client";

import { useEffect, useState, type ComponentProps } from "react";
import { LogOut } from "lucide-react";
import toast from "react-hot-toast";
import {
  connectFreighter,
  FreighterNotInstalledError,
  getConnectedAddress,
} from "@/lib/freighter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function truncateAddress(address: string) {
  return `${address.slice(0, 4)}…${address.slice(-4)}`;
}

export function ConnectWalletButton({
  label = "Connect Wallet",
  size = "default",
  className,
}: {
  label?: string;
  size?: ComponentProps<typeof Button>["size"];
  className?: string;
}) {
  const [address, setAddress] = useState<string | null>(null);
  const [connecting, setConnecting] = useState(false);

  useEffect(() => {
    getConnectedAddress().then(setAddress);
  }, []);

  async function handleConnect() {
    setConnecting(true);
    try {
      const connected = await connectFreighter();
      setAddress(connected);
      toast.success(`Connected as ${truncateAddress(connected)}`);
    } catch (err) {
      toast.error(
        err instanceof FreighterNotInstalledError
          ? "Install the Freighter extension to connect your wallet."
          : err instanceof Error
            ? err.message
            : "Couldn't connect to Freighter."
      );
    } finally {
      setConnecting(false);
    }
  }

  function handleDisconnect() {
    setAddress(null);
    toast("Wallet disconnected.");
  }

  if (address) {
    return (
      <div className="flex items-center gap-2">
        <span
          title={address}
          className="rounded-lg border border-border bg-muted px-3 py-1.5 font-mono text-sm"
        >
          {truncateAddress(address)}
        </span>
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={handleDisconnect}
          aria-label="Disconnect wallet"
        >
          <LogOut />
        </Button>
      </div>
    );
  }

  return (
    <Button
      size={size}
      className={cn(className)}
      onClick={handleConnect}
      disabled={connecting}
    >
      {connecting ? "Connecting…" : label}
    </Button>
  );
}
