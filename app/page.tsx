import { ConnectWalletButton } from "@/components/connect-wallet-button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8 text-center">
      <h1 className="text-3xl font-semibold">Disburse Protocol</h1>
      <p className="max-w-md text-sm text-black/60 dark:text-white/60">
        Decentralized payroll on Stellar. Connect a Freighter wallet to view the employer
        dashboard or your employee portal.
      </p>
      <ConnectWalletButton />
    </main>
  );
}
