import { ConnectWalletButton } from "@/components/connect-wallet-button";

export default function Home() {
  return (
    <div className="mesh-bg font-sans text-[16px] leading-6 text-[#241915]">
      {/* Top Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-[#fff8f6] shadow-sm">
        <div className="mx-auto flex h-16 w-full max-w-360 items-center justify-between px-4 md:px-10">
          <div className="flex items-center gap-8">
            <span className="text-[24px] font-bold leading-8 text-[#a03c11]">
              Disburse
            </span>
            <div className="hidden items-center gap-6 md:flex">
              <a
                href="#"
                className="font-mono text-[14px] leading-5 tracking-[0.02em] text-[#57423b] transition-colors hover:text-[#a03c11]"
              >
                About
              </a>
              <a
                href="#"
                className="font-mono text-[14px] leading-5 tracking-[0.02em] text-[#57423b] transition-colors hover:text-[#a03c11]"
              >
                Docs
              </a>
              <a
                href="#"
                className="font-mono text-[14px] leading-5 tracking-[0.02em] text-[#57423b] transition-colors hover:text-[#a03c11]"
              >
                GitHub
              </a>
            </div>
          </div>
          <ConnectWalletButton className="h-auto rounded-[8px] bg-[#a03c11] px-6 py-2 font-mono text-[14px] leading-5 tracking-[0.02em] font-bold text-white transition-all hover:bg-[#a03c11] hover:opacity-80 active:scale-95" />
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative overflow-hidden px-4 pb-32 pt-20 md:px-10">
        <div className="mx-auto flex max-w-360 flex-col items-center gap-12 md:flex-row">
          <div className="z-10 flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#a03c11]/20 bg-[#a03c11]/10 px-3 py-1 text-[#a03c11]">
              <span className="material-symbols-outlined text-sm">auto_awesome</span>
              <span className="font-mono text-[12px] leading-4 tracking-wider">
                NEXT-GEN FINTECH
              </span>
            </div>
            <h1 className="max-w-2xl text-[48px] font-bold leading-14 tracking-[-0.02em] text-[#241915]">
              Payroll on Autopilot.{" "}
              <span className="text-[#a03c11]">Powered by Stellar.</span>
            </h1>
            <p className="max-w-lg text-[18px] leading-7 text-[#57423b]">
              Fund a smart contract, and your employees get paid in USDC with
              5-second settlement. Institutional security meets blockchain
              speed.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="rounded-[12px] bg-[#D36135] px-8 py-4 text-[16px] leading-6 font-bold text-white transition-all hover:opacity-90 active:scale-95">
                Get Started
              </button>
              <button className="rounded-[12px] border-2 border-[#a03c11] bg-transparent px-8 py-4 text-[16px] leading-6 font-bold text-[#a03c11] transition-all hover:bg-[#a03c11]/5 active:scale-95">
                View Docs
              </button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                <div className="flex size-10 items-center justify-center rounded-full border-2 border-[#ece4b7] bg-[#f3ded8] text-xs font-bold">
                  JD
                </div>
                <div className="flex size-10 items-center justify-center rounded-full border-2 border-[#ece4b7] bg-[#ffc07c] text-xs font-bold">
                  AS
                </div>
                <div className="flex size-10 items-center justify-center rounded-full border-2 border-[#ece4b7] bg-[#008098] text-xs font-bold text-white">
                  KL
                </div>
              </div>
              <span className="text-[14px] leading-5 text-[#57423b]">
                Trusted by 200+ Decentralized Teams
              </span>
            </div>
          </div>

          <div className="relative w-full max-w-xl flex-1">
            <div className="tonal-card group relative overflow-hidden border-2 border-[#a03c11]/10 p-6">
              <div className="mb-8 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-mono text-[12px] uppercase leading-4 tracking-wider text-[#57423b]/60">
                    Contract Balance
                  </span>
                  <span className="font-mono text-[24px] font-bold leading-8">
                    42,000.00 USDC
                  </span>
                </div>
                <span className="material-symbols-outlined text-3xl text-[#a03c11] transition-transform duration-300 group-hover:rotate-[5deg] group-hover:scale-110">
                  account_balance_wallet
                </span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-[8px] border border-[#dec0b7]/30 bg-[#fff1ec] p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex size-8 items-center justify-center rounded-full bg-[#a03c11]/20 text-[#a03c11]">
                      <span className="material-symbols-outlined text-sm">person</span>
                    </div>
                    <span className="font-mono text-[14px] leading-5 tracking-[0.02em]">
                      S. Nakamoto
                    </span>
                  </div>
                  <span className="font-mono text-[14px] leading-5 tracking-[0.02em] text-[#006579]">
                    Paid (5s)
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-[8px] border border-[#dec0b7]/30 bg-[#fff1ec] p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex size-8 items-center justify-center rounded-full bg-[#a03c11]/20 text-[#a03c11]">
                      <span className="material-symbols-outlined text-sm">person</span>
                    </div>
                    <span className="font-mono text-[14px] leading-5 tracking-[0.02em]">
                      V. Buterin
                    </span>
                  </div>
                  <span className="font-mono text-[14px] leading-5 tracking-[0.02em] text-[#83541a]">
                    Processing...
                  </span>
                </div>
              </div>
              {/* Ambient Light Decor */}
              <div className="pointer-events-none absolute -bottom-20 -right-20 size-64 rounded-full bg-[#a03c11]/5 blur-3xl" />
            </div>
            {/* Abstract Geometric Shapes */}
            <div className="absolute -right-12 -top-12 size-24 animate-pulse rounded-full border-4 border-[#a03c11]/10" />
            <div className="absolute -left-12 bottom-12 size-16 rotate-45 border-2 border-[#83541a]/20" />
          </div>
        </div>
      </header>

      {/* Stats Banner */}
      <section className="bg-[#3a2e29] px-4 py-12 md:px-10">
        <div className="mx-auto grid max-w-360 grid-cols-2 gap-8 md:grid-cols-4">
          <div className="text-center md:text-left">
            <p className="mb-1 font-mono text-[12px] uppercase leading-4 text-[#f3ded8]/60">
              Total Disbursed
            </p>
            <h3 className="font-mono text-[24px] font-semibold leading-8 text-[#ffdbcf]">
              $142.8M
            </h3>
          </div>
          <div className="text-center md:text-left">
            <p className="mb-1 font-mono text-[12px] uppercase leading-4 text-[#f3ded8]/60">
              Active Orgs
            </p>
            <h3 className="font-mono text-[24px] font-semibold leading-8 text-[#ffdbcf]">
              1,240
            </h3>
          </div>
          <div className="text-center md:text-left">
            <p className="mb-1 font-mono text-[12px] uppercase leading-4 text-[#f3ded8]/60">
              Employees Paid
            </p>
            <h3 className="font-mono text-[24px] font-semibold leading-8 text-[#ffdbcf]">
              12.5k
            </h3>
          </div>
          <div className="text-center md:text-left">
            <p className="mb-1 font-mono text-[12px] uppercase leading-4 text-[#f3ded8]/60">
              Avg Settlement
            </p>
            <h3 className="font-mono text-[24px] font-semibold leading-8 text-[#ffdbcf]">
              5.2s
            </h3>
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="bg-[#fff8f6] px-4 py-24 md:px-10">
        <div className="mx-auto max-w-360">
          <div className="mb-16 space-y-4 text-center">
            <h2 className="text-[32px] font-bold leading-10 tracking-[-0.01em] text-[#241915]">
              Powerful Payroll Infrastructure
            </h2>
            <p className="mx-auto max-w-xl text-[16px] leading-6 text-[#57423b]">
              Eliminate administrative overhead with smart contracts that
              handle compliance, taxes, and distributions automatically.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            {/* Feature Card 1 */}
            <div className="tonal-card group relative flex min-h-80 flex-col justify-end overflow-hidden p-8 md:col-span-8">
              <div className="accent-bar bg-[#a03c11]" />
              <div className="z-10">
                <span className="material-symbols-outlined mb-4 text-4xl text-[#a03c11] transition-transform duration-300 group-hover:rotate-[5deg] group-hover:scale-110">
                  autorenew
                </span>
                <h4 className="mb-2 text-[24px] font-semibold leading-8">
                  Automated Disbursement
                </h4>
                <p className="max-w-md text-[16px] leading-6 text-[#57423b]">
                  Schedule recurring payments on-chain. Funds are pulled from
                  your secure vault and delivered instantly based on your
                  custom logic.
                </p>
              </div>
              <div
                className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-20"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 70% 30%, #D36135 0%, transparent 70%)",
                }}
              />
            </div>
            {/* Feature Card 2 */}
            <div className="tonal-card group relative min-h-80 p-8 md:col-span-4">
              <div className="accent-bar bg-[#006579]" />
              <span className="material-symbols-outlined mb-4 text-4xl text-[#006579] transition-transform duration-300 group-hover:rotate-[5deg] group-hover:scale-110">
                call_split
              </span>
              <h4 className="mb-2 text-[24px] font-semibold leading-8">
                Payment Splits
              </h4>
              <p className="text-[16px] leading-6 text-[#57423b]">
                Automatically split payments between multiple wallets for
                taxes, retirement, or secondary employee accounts.
              </p>
            </div>
            {/* Feature Card 3 */}
            <div className="tonal-card group relative min-h-80 p-8 md:col-span-4">
              <div className="accent-bar bg-[#83541a]" />
              <span className="material-symbols-outlined mb-4 text-4xl text-[#83541a] transition-transform duration-300 group-hover:rotate-[5deg] group-hover:scale-110">
                hourglass_empty
              </span>
              <h4 className="mb-2 text-[24px] font-semibold leading-8">
                Vesting Schedules
              </h4>
              <p className="text-[16px] leading-6 text-[#57423b]">
                Lock tokens in vesting contracts with linear or cliff
                releases. Fully transparent for both employer and employee.
              </p>
            </div>
            {/* Feature Card 4 */}
            <div className="tonal-card group relative flex min-h-80 items-center justify-between p-8 md:col-span-8">
              <div className="accent-bar bg-[#241915]" />
              <div className="max-w-sm">
                <span className="material-symbols-outlined mb-4 text-4xl text-[#241915] transition-transform duration-300 group-hover:rotate-[5deg] group-hover:scale-110">
                  lock
                </span>
                <h4 className="mb-2 text-[24px] font-semibold leading-8">
                  Multi-Sig Approval
                </h4>
                <p className="text-[16px] leading-6 text-[#57423b]">
                  Secure your corporate treasury. Require multiple signatures
                  from your finance team before any payroll batch is
                  released.
                </p>
              </div>
              <div className="hidden size-48 items-center justify-center rounded-full border-4 border-dashed border-[#dec0b7]/20 bg-[#dec0b7]/10 lg:flex">
                <span className="material-symbols-outlined text-6xl text-[#dec0b7]/40">
                  groups
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-24 md:px-10">
        <div className="mx-auto max-w-360">
          <h2 className="mb-16 text-center text-[32px] font-bold leading-10 tracking-[-0.01em] text-[#241915]">
            How It Works
          </h2>
          <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="absolute left-0 top-12 -z-10 hidden h-0.5 w-full bg-[#dec0b7]/20 md:block" />
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex size-16 items-center justify-center rounded-full bg-[#a03c11] text-[24px] font-semibold leading-8 text-white shadow-lg">
                1
              </div>
              <h5 className="text-[24px] font-semibold leading-8">
                Setup Organization
              </h5>
              <p className="text-[16px] leading-6 text-[#57423b]">
                Connect your Stellar wallet and define your employee roster
                and salary structures.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex size-16 items-center justify-center rounded-full bg-[#a03c11] text-[24px] font-semibold leading-8 text-white shadow-lg">
                2
              </div>
              <h5 className="text-[24px] font-semibold leading-8">
                Fund Vault
              </h5>
              <p className="text-[16px] leading-6 text-[#57423b]">
                Deposit USDC or XLM into the secure Disburse smart contract
                vault to cover the pay period.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex size-16 items-center justify-center rounded-full bg-[#a03c11] text-[24px] font-semibold leading-8 text-white shadow-lg">
                3
              </div>
              <h5 className="text-[24px] font-semibold leading-8">
                Automate &amp; Settle
              </h5>
              <p className="text-[16px] leading-6 text-[#57423b]">
                Smart contracts execute the distribution. Funds arrive in
                employee wallets in under 5 seconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="border-y border-[#dec0b7]/20 bg-[#fff1ec] py-24">
        <div className="mx-auto flex max-w-360 flex-col items-center gap-16 px-4 md:flex-row md:px-10">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 text-[#006579]">
              <span className="material-symbols-outlined">verified_user</span>
              <span className="font-mono text-[14px] leading-5 tracking-[0.02em]">
                FULLY ON-CHAIN
              </span>
            </div>
            <h2 className="text-[32px] font-bold leading-10 tracking-[-0.01em]">
              Institutional Grade Security
            </h2>
            <p className="text-[18px] leading-7 text-[#57423b]">
              Disburse is built on the Horizon protocol. Every transaction is
              auditable on the Stellar Ledger, ensuring 100% transparency for
              compliance and tax reporting.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-green-600">check_circle</span>
                <span className="font-mono text-[14px] leading-5 tracking-[0.02em]">
                  SOC2 Type II
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-green-600">check_circle</span>
                <span className="font-mono text-[14px] leading-5 tracking-[0.02em]">
                  Non-Custodial
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-green-600">check_circle</span>
                <span className="font-mono text-[14px] leading-5 tracking-[0.02em]">
                  ISO 27001
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-green-600">check_circle</span>
                <span className="font-mono text-[14px] leading-5 tracking-[0.02em]">
                  Global KYC
                </span>
              </div>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-6">
            <div className="tonal-card group flex aspect-square flex-col items-center justify-center gap-2 bg-white p-4">
              <span className="material-symbols-outlined text-4xl text-[#a03c11] transition-transform duration-300 group-hover:rotate-[5deg] group-hover:scale-110">
                security
              </span>
              <span className="font-mono text-[12px] uppercase leading-4 tracking-wider opacity-50">
                Audited
              </span>
            </div>
            <div className="tonal-card group mt-8 flex aspect-square flex-col items-center justify-center gap-2 bg-white p-4">
              <span className="material-symbols-outlined text-4xl text-[#006579] transition-transform duration-300 group-hover:rotate-[5deg] group-hover:scale-110">
                token
              </span>
              <span className="font-mono text-[12px] uppercase leading-4 tracking-wider opacity-50">
                Stablecoin Native
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#dec0b7] bg-[#fff1ec]">
        <div className="mx-auto flex w-full max-w-360 flex-col items-center gap-8 px-4 py-12 md:flex-row md:justify-between md:px-10">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[14px] font-bold leading-5 tracking-[0.02em] text-[#241915]">
              Disburse
            </span>
            <p className="max-w-xs text-[14px] leading-5 text-[#57423b]">
              Programmable payroll infrastructure for the decentralized
              economy.
            </p>
            <div className="mt-4 flex w-fit items-center gap-2 rounded-[6px] border border-[#dec0b7] bg-white px-3 py-1">
              <div className="flex size-5 items-center justify-center rounded-full bg-black">
                <div className="size-3 rotate-45 bg-white" />
              </div>
              <span className="font-mono text-[12px] leading-4 tracking-wider">
                Built on Stellar Protocol
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-12">
            <div className="space-y-4">
              <h6 className="font-mono text-[14px] font-bold leading-5 tracking-[0.02em]">
                Platform
              </h6>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-[14px] leading-5 text-[#57423b] transition-colors hover:text-[#a03c11]">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[14px] leading-5 text-[#57423b] transition-colors hover:text-[#a03c11]">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[14px] leading-5 text-[#57423b] transition-colors hover:text-[#a03c11]">
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h6 className="font-mono text-[14px] font-bold leading-5 tracking-[0.02em]">
                Resources
              </h6>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-[14px] leading-5 text-[#57423b] transition-colors hover:text-[#a03c11]">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[14px] leading-5 text-[#57423b] transition-colors hover:text-[#a03c11]">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[14px] leading-5 text-[#57423b] transition-colors hover:text-[#a03c11]">
                    SDKs
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h6 className="font-mono text-[14px] font-bold leading-5 tracking-[0.02em]">
                Company
              </h6>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-[14px] leading-5 text-[#57423b] transition-colors hover:text-[#a03c11]">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[14px] leading-5 text-[#57423b] transition-colors hover:text-[#a03c11]">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[14px] leading-5 text-[#57423b] transition-colors hover:text-[#a03c11]">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-360 items-center justify-between border-t border-[#dec0b7]/10 px-4 py-6 md:px-10">
          <span className="font-mono text-[12px] leading-4 tracking-wider text-[#57423b]">
            © {new Date().getFullYear()} Disburse Labs. All rights reserved.
          </span>
          <div className="flex gap-4">
            <span className="material-symbols-outlined cursor-pointer text-[#57423b] hover:text-[#a03c11]">
              public
            </span>
            <span className="material-symbols-outlined cursor-pointer text-[#57423b] hover:text-[#a03c11]">
              terminal
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
