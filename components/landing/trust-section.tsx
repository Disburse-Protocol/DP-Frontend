const TRUST_BADGES = ["SOC2 Type II", "Non-Custodial", "ISO 27001", "Global KYC"];

export function TrustSection() {
  return (
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
            {TRUST_BADGES.map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <span className="material-symbols-outlined text-green-600">check_circle</span>
                <span className="font-mono text-[14px] leading-5 tracking-[0.02em]">
                  {badge}
                </span>
              </div>
            ))}
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
  );
}
