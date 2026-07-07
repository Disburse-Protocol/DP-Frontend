export function FeaturesSection() {
  return (
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
  );
}
