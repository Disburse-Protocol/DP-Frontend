export function Hero() {
  return (
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
            Fund a vault, and your employees get paid in USDC with
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
  );
}
